#include <vector>
#include <OpenNI.h>
#include "openni_opencv_interop.hpp"
#include <opencv2/opencv.hpp>

using namespace openni;
using namespace std;


OpenNI_Connection::OpenNI_Connection() {
	Status rc = openni::STATUS_OK;
	rc = OpenNI::initialize();
	init();
}

OpenNI_Connection::~OpenNI_Connection(){
	stop_streams();
	disconnect_devices();
}	


void OpenNI_Connection::load_devices(){
	Array<DeviceInfo>* deviceInfoList = new Array<DeviceInfo>();
	OpenNI::enumerateDevices(deviceInfoList);

	int i;
	for(i=0; i<deviceInfoList->getSize(); i++){ 
		devices.push_back(new Device());
		devices[i]->open((*deviceInfoList)[i].getUri());
	}

	delete deviceInfoList;

}

void OpenNI_Connection::load_streams(){
	//For now, we will load the devices here, since we are just getting ALL of the available streams for all currently connected devices
	load_devices();
	
	//Iterate over the device list and fetch the streams
	//Do not start the streams yet
	int i = 0;
	for( auto device : devices ){
		//Iterate over a device's stream types
		for( auto sensor_type : sensor_types_by_device(device)){
			streams.push_back(new VideoStream());
			streams[i]->create(*device, sensor_type);
			i++;
		}
	}
}

vector<SensorType> OpenNI_Connection::sensor_types_by_device(Device* device){
	vector<SensorType> rv;
  int i;
	SensorType const STypes[] = {SENSOR_IR, SENSOR_COLOR, SENSOR_DEPTH};
										 
	for(i = 0; i < 3; i++){
		if(device->hasSensor(STypes[i])){
			rv.push_back(STypes[i]);
		}
	}
	return rv;
}

void OpenNI_Connection::add_extractor(SensorType s_type, VideoStream::NewFrameListener* listener){
		for(auto stream: streams){
			if(s_type == stream->getSensorInfo().getSensorType()){
				stream->addNewFrameListener(listener);
			}
		}
}

void OpenNI_Connection::start_streams(){
	//Iterate over the streams and start them
	for( auto stream: streams ){
		stream->start();
	}
}

void OpenNI_Connection::stop_streams(){
	//Iterate over the streams and stop them
	for( auto stream: streams ){
		stream->stop();
	}
}

void OpenNI_Connection::disconnect_devices(){
	//Iterate over the streams and kill them
	for( auto device: devices ){
		device->close();
	}
}

void OpenNI_Connection::init(){
	load_streams();
	start_streams();
}



void CVFrameExtractor::onNewFrame(VideoStream& stream){

	VideoFrameRef pFrame = VideoFrameRef();
	stream.readFrame(&pFrame);

	//Turn the VideoFrameRef into a cv::Mat

	int w = pFrame.getWidth();
	int h = pFrame.getHeight();


	//Do not futz with frame if being accessed by get_one_frame
	//Exception Safe
	{
		//Mutex scope
		std::unique_lock<mutex> lock(mu);

		//Free last frame if get_one_frame was not called
		if(got_last_frame == false){
			cur_frame.release();
		}
		new_frame_available.notify_all();
		cur_frame = cv::Mat(h, w, CV_16UC1, (uint16_t*)pFrame.getData());
	}
	got_last_frame = false;
}

cv::Mat* CVFrameExtractor::get_one_frame(){
	std::unique_lock<std::mutex> lk(mu);
	new_frame_available.wait(lk);
	got_last_frame = true;
	return &cur_frame;
}








