#include <OpenNI.h>
#include "stdio.h"
#include "stdint.h"
#include <vector>
#include <string>
#include <unistd.h>
#include <opencv2/opencv.hpp>


using namespace openni;
using namespace cv;

//Forward Declare because why not?

static void colorizeDisparity( const Mat& gray, Mat& rgb, double maxDisp=-1.f, float S=1.f, float V=1.f )
{
    CV_Assert( !gray.empty() );
    CV_Assert( gray.type() == CV_16UC1 );

    if( maxDisp <= 0 )
    {
        maxDisp = 0;
        minMaxLoc( gray, 0, &maxDisp );
    }

    rgb.create( gray.size(), CV_8UC3 );
    rgb = Scalar::all(0);
    if( maxDisp < 1 )
        return;

    for( int y = 0; y < gray.rows; y++ )
    {
        for( int x = 0; x < gray.cols; x++ )
        {
            unsigned short d = gray.at<unsigned short>(y,x);
            unsigned int H = ((unsigned short)maxDisp - d) * 240 / (unsigned short)maxDisp;

            unsigned int hi = (H/60) % 6;
            float f = H/60.f - H/60;
            float p = V * (1 - S);
            float q = V * (1 - f * S);
            float t = V * (1 - (1 - f) * S);

            Point3f res;

            if( hi == 0 ) //R = V,  G = t,  B = p
                res = Point3f( p, t, V );
            if( hi == 1 ) // R = q, G = V,  B = p
                res = Point3f( p, V, q );
            if( hi == 2 ) // R = p, G = V,  B = t
                res = Point3f( t, V, p );
            if( hi == 3 ) // R = p, G = q,  B = V
                res = Point3f( V, q, p );
            if( hi == 4 ) // R = t, G = p,  B = V
                res = Point3f( V, p, t );
            if( hi == 5 ) // R = V, G = p,  B = q
                res = Point3f( q, p, V );

            uchar b = (uchar)(std::max(0.f, std::min (res.x, 1.f)) * 255.f);
            uchar g = (uchar)(std::max(0.f, std::min (res.y, 1.f)) * 255.f);
            uchar r = (uchar)(std::max(0.f, std::min (res.z, 1.f)) * 255.f);

            rgb.at<Point3_<uchar> >(y,x) = Point3_<uchar>(b, g, r);
        }
    }
}

bool str_to_uint16(const char *str, uint16_t *res) {
    char *end;
    errno = 0;
    long val = strtol(str, &end, 10);
    if (errno || end == str || *end != '\0' || val < 0 || val >= 0x10000) {
        return false;
    }
    *res = (uint16_t)val;
    return true;
}


class Structure_Sensor{
 public:
		Structure_Sensor();
	  ~Structure_Sensor();
 private:
	  //Vars
		std::vector<Device*> devices ;
		std::vector<Device*>::iterator device_iterator;
		std::vector<VideoStream*> tmp_streams;
	  std::vector<VideoStream*>::iterator stream_it;
		std::vector< std::vector<VideoStream*> > streams_by_device;
		std::vector< std::vector<VideoStream*> >::iterator streams_by_device_it;


	  //Funcs

 public:
	  int add_frame_listener(SensorType , VideoStream::NewFrameListener*);
	  void start_streams();
	  void stop_streams();
	  void start_viewer(SensorType, int, char**);
 private:
		std::vector<Device*> load_sensors(Array<DeviceInfo>* deviceInfoList);
		void print_device_info(Array<DeviceInfo>* deviceInfoList);
		int kill_sensors(std::vector<Device*> devices);
		std::vector<VideoStream*> load_streams(Device* device);
		int kill_streams(std::vector<VideoStream*> streams);
		void print_stream_info(std::vector<VideoStream*> streams);
	  std::vector<SensorType> get_available_sensors(Device* device);

	
};

Structure_Sensor::Structure_Sensor ()
{
	Status rc = openni::STATUS_OK;
	rc = OpenNI::initialize();
	printf("After initialization:\n%s\n", OpenNI::getExtendedError());

	Array<DeviceInfo>* deviceInfoList = new Array<DeviceInfo>();
	OpenNI::enumerateDevices(deviceInfoList);

	devices = load_sensors(deviceInfoList);


	//Get all the streams for all devices (currently just the one device w 3 streams
	for(device_iterator = devices.begin(); device_iterator != devices.end(); device_iterator++){
		tmp_streams = load_streams(*device_iterator);
		streams_by_device.push_back(tmp_streams);
		printf("Obtained %d streams\n", streams_by_device.back().size()); //Should be 3 with 1 structure.io sensor attached
		print_stream_info(tmp_streams);
	}

	delete deviceInfoList;
}

Structure_Sensor::~Structure_Sensor(){

	for(streams_by_device_it = streams_by_device.begin();
			streams_by_device_it != streams_by_device.end();
			streams_by_device_it++){
		kill_streams(*streams_by_device_it);
	}

	kill_sensors(devices);


	OpenNI::shutdown();
}


int Structure_Sensor::add_frame_listener(SensorType sensor_type, VideoStream::NewFrameListener* listener){
	for(streams_by_device_it = streams_by_device.begin();
			streams_by_device_it != streams_by_device.end();
			streams_by_device_it++){
		//Get the first stream that has this sensor type and then add the listener
		for(stream_it = streams_by_device_it->begin();
				stream_it != streams_by_device_it->end();
				stream_it++){
			if(sensor_type == (*stream_it)->getSensorInfo().getSensorType()){
				(*stream_it)->addNewFrameListener(listener);
				return 1;
			}
		}
	}
	return 0;
}
		
			

void Structure_Sensor::print_stream_info(std::vector<VideoStream*> streams){
	 int i;
	 char* type_names[4]  = {"","IR", "COLOR", "DEPTH" };
	 for(i=0; i<streams.size(); i++){
		 const SensorInfo& info = streams[i]->getSensorInfo();
		 printf("Sensor at index %d in the stream is a %s sensor\n", i, type_names[info.getSensorType()]);

	 }
 }

int Structure_Sensor::kill_streams(std::vector<VideoStream*> streams){
	 std::vector<VideoStream*>::iterator streams_it;
	 for(streams_it = streams.begin(); streams_it != streams.end(); streams_it++){
		 (*streams_it)->destroy();
		 delete (*streams_it);
	 }
	 return 1;
 }

std::vector<SensorType> Structure_Sensor::get_available_sensors(Device* device){
	std::vector<SensorType> rv;
	int i;
	SensorType const STypes[] = {SENSOR_IR, SENSOR_COLOR, SENSOR_DEPTH};
										 
	for(i = 0; i < 3; i++){
		if(device->hasSensor(STypes[i])){
			rv.push_back(STypes[i]);
		}
	}
	return rv;
}

std::vector<VideoStream*> Structure_Sensor::load_streams(Device* device){
	//Need to check the presence of different types of sensors
	//I know my sensor has IR, depth, and RGB
	int i;
  std::vector<SensorType> available_sensor_types;
	std::vector<VideoStream*> rv;

	available_sensor_types = get_available_sensors(device);
	for(i=0; i<available_sensor_types.size(); i++){
		rv.push_back(new VideoStream());
		rv[i]->create(*device, available_sensor_types[i]);
	}
	return rv;
}


std::vector<Device*> Structure_Sensor::load_sensors(Array<DeviceInfo>* deviceInfoList){
	printf("Loading all available sensors\n");
	print_device_info(deviceInfoList);

	std::vector<Device*> rv;
	int i;

	for(i=0; i<deviceInfoList->getSize(); i++){ 
		rv.push_back(new Device());
		rv[i]->open((*deviceInfoList)[i].getUri());
	}
	return rv;
}

int Structure_Sensor::kill_sensors(std::vector<Device*> devices){
	std::vector<Device*>::iterator device_iterator;
	for(device_iterator = devices.begin(); device_iterator != devices.end(); device_iterator++){
		(*device_iterator)->close();
		delete *device_iterator;
		return 1;
	}
}


void Structure_Sensor::print_device_info(Array<DeviceInfo>* deviceInfoList){
	int i;
	DeviceInfo info;
	printf("You have %d devices available\n", deviceInfoList->getSize());
	for(i=0; i<deviceInfoList->getSize(); i++){
		info = (*deviceInfoList)[i];
		printf("Device URI:%s\nDevice Vendor:\nDevice Name:\nUSB VID\nUSB PID:\n",
					 info.getUri(), info.getVendor(), info.getName(), info.getUsbVendorId(), info.getUsbProductId());
	}
}

void Structure_Sensor::start_streams(){
	for(streams_by_device_it = streams_by_device.begin();
			streams_by_device_it != streams_by_device.end();
			streams_by_device_it++){
		//Get the first stream that has this sensor type and then add the listener
		for(stream_it = streams_by_device_it->begin();
				stream_it != streams_by_device_it->end();
				stream_it++){
			(*stream_it)->start();
		}
	}
}

void Structure_Sensor::stop_streams(){
	for(streams_by_device_it = streams_by_device.begin();
			streams_by_device_it != streams_by_device.end();
			streams_by_device_it++){
		//Get the first stream that has this sensor type and then add the listener
		for(stream_it = streams_by_device_it->begin();
				stream_it != streams_by_device_it->end();
				stream_it++){
			(*stream_it)->stop();
		}
	}
}
//DISTGUSTING CODE DUPLICATION. FIX! ^^^^


//A new Frame Listener that prints the frame
class PrintFrameListener : public VideoStream::NewFrameListener{
		void onNewFrame(VideoStream& stream){
			printf("in-listener");
			int i,j,k;
			int h, w, stride, fps, size;
			PixelFormat p_type;
			VideoMode v_mode;
		  uint16_t *data;
			const SensorInfo* s_info;
			SensorType s_type;
			
			VideoFrameRef* pFrame = new VideoFrameRef();
			stream.readFrame(pFrame);

			v_mode = pFrame->getVideoMode();
			

			s_info = &stream.getSensorInfo();
			s_type = s_info->getSensorType();
			p_type = v_mode.getPixelFormat();
			fps    = v_mode.getFps();
			stride = pFrame->getStrideInBytes();
			w      = pFrame->getWidth();
			h      = pFrame->getHeight();
			data   = (uint16_t*)pFrame->getData();
			size   = pFrame->getDataSize();

			printf("Frame recieved\n");
			printf("----Stride      : %d\n"    , stride);
			printf("----WidthxHeight: %dx%d\n" , w, h);
			printf("----PixelFormat : %d\n"   , p_type);
			printf("----FPS         : %d\n"    , fps);
			printf("----Size        : %d\n"    ,size);
			printf("----Sensor Type : %d\n"    ,s_type);
			printf("----DATA!!----------\n");

			/*for(i=0; i<h; i++){
				printf("\n");
				for(j=0; j<w; j++){
					printf("%d,", data[i*w + w]);
				}
				}*/
		}
};

//A NewFrameListener that prints the image using OpenCV's highgui
class CVFrameListener : public VideoStream::NewFrameListener{

	cv::Mat buff_image;
	cv::Mat new_image;
	cv::Mat old_image;

public:
	CVFrameListener(){
		//Init the HighGUI.
		cv::namedWindow("sensor");
	}

	~CVFrameListener(){
		cv::destroyWindow("sensor");
	}

	void onNewFrame(VideoStream& stream){
		Mat validColorDisparityMap;
		printf("Got frame");
		VideoFrameRef* pFrame = new VideoFrameRef();
		stream.readFrame(pFrame);

		//Turn the VideoFrameRef into IplImage
		int w = pFrame->getWidth();
		int h = pFrame->getHeight();

		new_image = cv::Mat(h, w, CV_16UC1, (uint16_t*)pFrame->getData());
		colorizeDisparity(new_image, validColorDisparityMap);
		if(new_image.empty()){
			printf("img empty");
		}else{
			cv::imshow("sensor", validColorDisparityMap);
		}
	}
};




int main(int argc, char *argv[]){
	Structure_Sensor* my_structure = new Structure_Sensor();
	CVFrameListener* my_listener = new CVFrameListener();
	//PrintFrameListener* my_listener = new PrintFrameListener();
	my_structure->add_frame_listener(SENSOR_DEPTH, my_listener);
	my_structure->start_streams();
	while(true){
	}
	my_structure->stop_streams();
	delete my_structure;
	delete my_listener;
}

