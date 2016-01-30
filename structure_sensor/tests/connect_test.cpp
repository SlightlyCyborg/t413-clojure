#include <OpenNI.h>
#include "stdio.h"
#include <vector>
#include <string>
#include <unistd.h>
//#include <opencv/highgui.h>
//#include <opencv/cv.h>
#include "Viewer.h"


using namespace openni;

//Forward Declare because why not?


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
			if(sensor_type = (*stream_it)->getSensorInfo().getSensorType()){
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


void Structure_Sensor::start_viewer(SensorType sensor_type, int argc, char** argv){
	int device_index = 0;
	VideoStream *depth_stream, *ir_stream;
	for(streams_by_device_it = streams_by_device.begin();
			streams_by_device_it != streams_by_device.end();
			streams_by_device_it++){
		//Get the first stream that has this sensor type and then add the listener
		for(stream_it = streams_by_device_it->begin();
				stream_it != streams_by_device_it->end();
				stream_it++){
			if(SENSOR_DEPTH == (*stream_it)->getSensorInfo().getSensorType()){
				depth_stream = (*stream_it);
				ir_stream = (*stream_it);
			}
				//Deleted init status checking. F*** sane error handling!!
		}
				device_index++;
	}
	SampleViewer sampleViewer("Simple Viewer", *devices[0], *depth_stream, *ir_stream);
		sampleViewer.init(argc, argv);
		sampleViewer.run();

}

//DISTGUSTING CODE DUPLICATION. FIX! ^^^^


//A new Frame Listener that prints the frame
class PrintFrameListener : public VideoStream::NewFrameListener{
		void onNewFrame(VideoStream& stream){
			int i,j,k;
			int h, w, stride;
			
			VideoFrameRef* pFrame = new VideoFrameRef();
			stream.readFrame(pFrame);
			stride = pFrame->getStrideInBytes();
			w      = pFrame->getWidth();
			h      = pFrame->getHeight();

			printf("Frame recieved\n");
			printf("----Stride: %d\n", stride);
			printf("----WidthxHeight: %dx%d\n", w, h);
		}
};




int main(int argc, char *argv[]){
	Structure_Sensor* my_structure = new Structure_Sensor();
	PrintFrameListener* my_listener = new PrintFrameListener();
	/*my_structure->add_frame_listener(SENSOR_IR, my_listener);
	my_structure->start_streams();
	usleep(10000000);
	my_structure->stop_streams();
	*/
	my_structure->start_viewer(SENSOR_DEPTH, argc, argv);
	delete my_structure;
	delete my_listener;
}

