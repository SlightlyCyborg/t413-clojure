#include "shift_out.h"


Bit_Shifter *my_shifter;

void print_bits(){
	Serial.println(analogRead(A1));
}

void setup(){
  my_shifter = new Bit_Shifter();
	my_shifter->init();
	Serial.begin(9600);
}







//Drive_Result dr = Drive_Result{"", 0, 0};

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

	
	my_shifter->shift_out(String("1"));
	delay(1);
	print_bits();
	delay(1000);
	
	my_shifter->shift_out(String("0"));
	delay(1);
	print_bits();
	delay(1000);

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
