#include <vector>
#include <mutex>
#include <OpenNI.h>
#include <opencv2/opencv.hpp>

using namespace openni;
using namespace std; //Specifically AIDs

class OpenNI_Connection{
public:
	//Structors
	OpenNI_Connection();
	~OpenNI_Connection();

	//Funcs
	void init();
	void add_extractor(SensorType, VideoStream::NewFrameListener*);
	

	//Getters
	vector<Device*> get_devices(){
		return devices;
	}
	vector<VideoStream*> get_streams(){
		return streams;
	}


private:
	//Funcs
	vector<SensorType> sensor_types_by_device(Device*);
  void load_devices();
	void load_streams();
	void start_streams();
	void stop_streams();
	void disconnect_devices();

	//Vars
	vector<Device*> devices;
	vector<VideoStream*> streams;
};



class CVFrameExtractor : public VideoStream::NewFrameListener{
	mutex mu;
	std::condition_variable new_frame_available;
	bool got_last_frame;

	cv::Mat cur_frame;
	
public:
	void onNewFrame(VideoStream&);
	cv::Mat* get_one_frame();
};
