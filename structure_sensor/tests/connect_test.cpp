#include <OpenNI.h>
#include "stdio.h"
#include <vector>

using namespace openni;

//Forward Declare because why not?
std::vector<Device*> load_sensors(Array<DeviceInfo>* deviceInfoList);
void print_device_info(Array<DeviceInfo>* deviceInfoList);
int kill_sensors(std::vector<Device*> devices);
std::vector<VideoStream*> load_streams(Device* device);
int kill_streams(std::vector<VideoStream*> streams);

int main(int argc, char** argv)
{
	std::vector<Device*> devices ;
	std::vector<Device*>::iterator device_iterator;
	std::vector< std::vector<VideoStream*> > streams_by_device;
	std::vector< std::vector<VideoStream*> >::iterator streams_by_device_it;

	Status rc = openni::STATUS_OK;
	rc = OpenNI::initialize();
	printf("After initialization:\n%s\n", OpenNI::getExtendedError());

	Array<DeviceInfo>* deviceInfoList = new Array<DeviceInfo>();
	OpenNI::enumerateDevices(deviceInfoList);

	devices = load_sensors(deviceInfoList);

	//Get all the streams for all devices (currently just the one device w 3 streams
	for(device_iterator = devices.begin(); device_iterator != devices.end(); device_iterator++){
		streams_by_device.push_back(load_streams(*device_iterator));
		printf("Obtained %d streams", streams_by_device.back().size()); //Should be 3 with 1 structure.io sensor attached
	}

	for(streams_by_device_it = streams_by_device.begin();
			streams_by_device_it != streams_by_device.end();
			streams_by_device_it++){
		kill_streams(*streams_by_device_it);
	}

	kill_sensors(devices);

	delete deviceInfoList;

	OpenNI::shutdown();
		
			
}

 int kill_streams(std::vector<VideoStream*> streams){
	 std::vector<VideoStream*>::iterator streams_it;
	 for(streams_it = streams.begin(); streams_it != streams.end(); streams_it++){
		 (*streams_it)->destroy();
		 delete (*streams_it);
	 }
	 return 1;
 }

std::vector<SensorType> get_available_sensors(Device* device){
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

 std::vector<VideoStream*> load_streams(Device* device){
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


 std::vector<Device*> load_sensors(Array<DeviceInfo>* deviceInfoList){
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

int kill_sensors(std::vector<Device*> devices){
	std::vector<Device*>::iterator device_iterator;
	for(device_iterator = devices.begin(); device_iterator != devices.end(); device_iterator++){
		(*device_iterator)->close();
		delete *device_iterator;
		return 1;
	}
}


void print_device_info(Array<DeviceInfo>* deviceInfoList){
	int i;
	DeviceInfo info;
	printf("You have %d devices available\n", deviceInfoList->getSize());
	for(i=0; i<deviceInfoList->getSize(); i++){
		info = (*deviceInfoList)[i];
		printf("Device URI:%s\nDevice Vendor:\nDevice Name:\nUSB VID\nUSB PID:\n",
					 info.getUri(), info.getVendor(), info.getName(), info.getUsbVendorId(), info.getUsbProductId());
	}
}




