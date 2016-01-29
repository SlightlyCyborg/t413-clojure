#include <OpenNI.h>
#include "stdio.h"
#include <vector>

using namespace openni;

std::vector<Device*> load_sensors(Array<DeviceInfo>* deviceInfoList);
void print_device_info(Array<DeviceInfo>* deviceInfoList);
int kill_sensors(std::vector<Device*> devices);

int main(int argc, char** argv)
{
	std::vector<Device*> devices ;
	Status rc = openni::STATUS_OK;
	rc = OpenNI::initialize();
	printf("After initialization:\n%s\n", OpenNI::getExtendedError());

	Array<DeviceInfo>* deviceInfoList = new Array<DeviceInfo>();
	OpenNI::enumerateDevices(deviceInfoList);

	devices = load_sensors(deviceInfoList);
	kill_sensors(devices);

	delete deviceInfoList;

	OpenNI::shutdown();
		
			
}

 std::vector<Device*> load_sensors(Array<DeviceInfo>* deviceInfoList){
	printf("Loading all available sensors");
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




