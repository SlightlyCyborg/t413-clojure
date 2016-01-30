CC = g++
CV_LIB_DIR = /usr/local/lib
LINK_CV = -l opencv_core -l opencv_highgui
NI_LIB_DIR = /usr/local/Cellar/openni2/2.2.0.33/lib/ni2
NI_INC = /usr/local/Cellar/openni2/2.2.0.33/include/ni2
NI = OpenNI2
LIB_GLUT = -L /usr/X11/lib
LINK_GLUT = -lGL -lGLU -lglut 

viewer:
	$(CC) Viewer.cpp -c  -I $(NI_INC) -L $(NI_LIB_DIR)  $(LIB_GLUT) 

all: viewer
	$(CC) connect_test.cpp viewer.o -o connect_test -I $(NI_INC) -L $(NI_LIB_DIR)  -l$(NI) $(LIB_GLUT) $(LINK_GLUT)
