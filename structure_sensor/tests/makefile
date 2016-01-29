CC = g++
NI_LIB_DIR = /usr/local/Cellar/openni2/2.2.0.33/lib/ni2
NI_INC = /usr/local/Cellar/openni2/2.2.0.33/include/ni2
NI = OpenNI2

all:
	$(CC) connect_test.cpp -o connect_test -I $(NI_INC) -L $(NI_LIB_DIR) -l$(NI)
