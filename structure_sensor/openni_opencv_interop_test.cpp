#define CATCH_CONFIG_MAIN  // This tells Catch to provide a main() - only do this in one cpp file
#include "catch.hpp"
#include "openni_opencv_interop.hpp"
#include <iostream>

using namespace std;



TEST_CASE( "Test CV handle frame", "[]"){
	OpenNI_Connection *conn = new OpenNI_Connection();

	CVFrameExtractor* frame_extractor = new CVFrameExtractor();
	conn->add_extractor(SENSOR_IR, frame_extractor);

	cv::Mat* mat = NULL;
	//This will block until a frame has been recieved
	mat = frame_extractor->get_one_frame();

	//Check that the extactor instanciated the Mat
	REQUIRE( mat != NULL );

	if( mat != NULL ){
		//Check that the mat actually has an image
		REQUIRE( !mat->empty());
	}
}

