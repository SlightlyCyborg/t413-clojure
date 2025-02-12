// Select either ASCII or the normal binary serial packet type

#define SERIAL_ASCII
//#define SERIAL_BINARY

//#define DEBUG_SERIAL


#define DEFAULT_BAUDRATE 115200

#define COMMAND            0x01
#define COMMAND_REPLY      0x02

#define DATA_REQUEST       0x11
#define DATA_BYTE          0x12
#define DATA_INT           0x13

#define DATA_ARRAY_REQUEST 0x21
#define DATA_ARRAY         0x22

/// Sensor Types:

#define MAIN_BAT_VOLTAGE 0x10

/// Command IDs

#define STOP_MOTOR_A       0x10
#define START_MOTOR_A      0x11
#define SET_SPEED_MOTOR_A  0x12
#define BRAKE_MOTOR_A      0x13

#define STOP_MOTOR_B       0x15
#define START_MOTOR_B      0x16
#define SET_SPEED_MOTOR_B  0x17
#define BRAKE_MOTOR_B      0x18
