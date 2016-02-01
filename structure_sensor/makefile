CC = g++

INTEROP = openni_opencv_interop.cpp
INTEROP_TEST = openni_opencv_interop_test.cpp
INTEROP_OBJ =  openni_opencv_interop.o

NI_LIB = -L /usr/local/Cellar/openni2/2.2.0.33/lib/ni2 -lOpenNI2
NI_INC = -I /usr/local/Cellar/openni2/2.2.0.33/include/ni2

CV_LIB = -L /usr/local/Cellar/opencv/2.4.12_2/lib -lopencv_core -lopencv_highgui
CV_INC = -I /usr/local/Cellar/opencv/2.4.12_2/include/opencv2


interop:
	$(CC) -g $(INTEROP) -c $(NI_INC) $(CV_INC)

test_interop: interop
	$(CC) -g $(INTEROP_TEST) $(INTEROP_OBJ) -o test_interop $(NI_INC) $(NI_LIB) $(CV_INC) $(CV_LIB)

clean:
	rm $(INTEROP_OBJ) rm test_interop  


