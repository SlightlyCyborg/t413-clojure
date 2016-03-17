
#define BAT_VOLTAGE "10"
#define MOTOR_0_DEG "20"
#define MOTOR_120_DEG "21"
#define MOTOR_240_DEG "22"
#define WHEEL_0_DEG "30"
#define WHEEL_120_DEG "31"
#define WHEEL_240_DEG "32"
#define CLOJURE_CONNECTED false

#include <stdio.h>
#include <Wire.h>
#include "mpu.h"
#include "head_assembly.h" 
#include "drive_motors.h"
#include "shift_out.h"

Head_Assembly* head_mover;
Drive_Result* drive_results;
Bit_Shifter shifter;
Drive_Motors* drive_motors;
MPU* mpu;
MPU_Data* mpu_data;

//Resistor in ohms used to measure the current voltage of the battery
//Needed for undervoltage dropout so that the batteries do not become under charged
float r1=6800.0;
float r2=2000.0;

//For the loop
long previous_millis = 0;

//MPU Data
uint16_t acc_data[3] = {0, 0, 0};


void setup() {
  // put your setup code here, to run once:
	Serial.begin(115200); 
	//mpu_setup();
	head_mover = new Head_Assembly();
  shifter = Bit_Shifter();	
	drive_motors = new Drive_Motors();
	mpu = new MPU();

	//int freqs[3] = {0,0,0};
	//head_mover->drive_motors(freqs);
	//delay(5000);

}




float get_cur_main_battery_voltage(){
		float rv, v_r2;
		int analog_value;

		rv = 0;

		analog_value = analogRead(A0);

		v_r2 = (analog_value * 5.0) / 1024.0; 
		rv = v_r2 / (r2/(r1+r2));

		if (rv < 0.1) 
		{
			rv=0.0;
		}

		return rv;
}

void test_motors(){
	drive_motors->change_motor_speed(0, .5);
	delay(1000);
	drive_motors->change_motor_speed(0, 0);
	delay(1000);
	drive_motors->change_motor_speed(0, -.5);
	delay(1000);
	drive_motors->change_motor_speed(0, 0);
	delay(1000);

  drive_motors->change_motor_speed(1, .5);
	delay(1000);
	drive_motors->change_motor_speed(1, 0);
	delay(1000);
	drive_motors->change_motor_speed(1, -.5);
	delay(1000);
	drive_motors->change_motor_speed(1, 0);
	delay(1000);

	
  drive_motors->change_motor_speed(2, .5);
	delay(1000);
	drive_motors->change_motor_speed(2, 0);
	delay(1000);
	drive_motors->change_motor_speed(2, -.5);
	delay(1000);
	drive_motors->change_motor_speed(2, 0);
	delay(1000);
	
}

void sendData (String data_id, String data){
	Serial.println("T00I" + data_id + "P" + data);
}

//Timing
int interval_check_voltage = 5000;
unsigned long last_check_voltage = 0;

void send_neccisary_data(unsigned long currentMillis){
  char data_buf[4];
	if((currentMillis - last_check_voltage) > interval_check_voltage){
		sprintf(data_buf, "%04d", (int)(get_cur_main_battery_voltage()*100));
		sendData(BAT_VOLTAGE, data_buf);
		last_check_voltage = currentMillis;
	}
}


void loop() {
  // put your main code here, to run repeatedly:
	unsigned long currentMillis = millis(); // missil Dislexia?

	//Send Data if need be
	send_neccisary_data(currentMillis);

	
	//int freqs[3] = {1, 1, 1};
	/*
	head_mover->drive_motors(freqs);
	delay(2);
	*/

	/*
	freqs[0] = 0;
	freqs[1] = 0;
	freqs[2] = 0;
	head_mover->drive_motors(freqs);
	delay(10);
	*/
	

	//shifter.shift_out("1");
	//Serial.println(analogRead(A1));
	
	//delay(2000);
	//test_motors();


	mpu_data = mpu->loop();
	for(int i = 0; i < 3; i++){
		Serial.print("Accelerometer: ");
		Serial.print(mpu_data->a[0]);
		Serial.print(", ");
		Serial.print(mpu_data->a[1]);
		Serial.print(", ");
		Serial.println(mpu_data->a[2]);
	}
	delay(1000);
	delete mpu_data;
}


/*
  SerialEvent occurs whenever a new data comes in the
 hardware serial RX.  This routine is run between each
 time loop() runs, so using delay inside loop can delay
 response.  Multiple bytes of data may be available.
 */
void serialEvent() {
		//Handle the data
}