CC = g++
CV_INC = /usr/local/Cellar/opencv/2.4.12_2/include/
CV_LIB_DIR = /usr/local/Cellar/opencv/2.4.12_2
LINK_CV = -l opencv_core -l opencv_highgui -lopencv_imgproc
NI_LIB_DIR = /usr/local/Cellar/openni2/2.2.0.33/lib/ni2
NI_INC = /usr/local/Cellar/openni2/2.2.0.33/include/ni2
NI = OpenNI2
LIB_GLUT = -L /usr/X11/lib
LINK_GLUT = -lGL -lGLU -lglut 

viewer:
	$(CC) Viewer.cpp -c  -I $(NI_INC) -L $(NI_LIB_DIR)  $(LIB_GLUT) 

cv_only:
	$(CC) cv_has_libraries_to_do_what_i_wanted.cpp -L $(NI_LIB_DIR) -l$(NI) -L $(CV_LIB_DIR) $(LINK_CV) -o show_depth

all:
	$(CC) -g connect_test.cpp -o connect_test -I $(NI_INC) -I $(CV_INC) -L $(NI_LIB_DIR)  -l$(NI)  -L $(CV_LIB_DIR) $(LINK_CV)

