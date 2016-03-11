#include "head_assembly.h"



void print_bits(){
	Serial.print(analogRead(A5));
  Serial.print(", ");
	Serial.print(analogRead(A4));
  Serial.print(", ");
	Serial.print(analogRead(A3));
  Serial.print(", ");
	Serial.println(analogRead(A2));
}

void setup(){
	setup_head_motor();
	Serial.begin(9600);
}







Drive_Result dr = Drive_Result{"", 0, 0};

void loop(){



	/*
  dr = drive_motor(1, dr);

	Serial.print("Motor Data: ");
	Serial.print(dr.motor_data);
	Serial.print(", Useconds last step: ");
	Serial.print(dr.useconds_last_step);
	Serial.print(", Step num: ");
	Serial.println(dr.step_num);
	*/

	
	shift_out(String("0000001000000000"));
	/*
	delayMicroseconds(3000);
	//print_bits();
	shift_out(String("0001000000000000"));
	delayMicroseconds(3000);
	//print_bits();
	shift_out(String("0000010000000000"));
	delayMicroseconds(3000);
	//print_bits();
	shift_out(String("0000100000000000"));
	delayMicroseconds(3000);
	//print_bits();
	*/
	
	
}