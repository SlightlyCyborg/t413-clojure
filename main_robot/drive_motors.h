#ifndef _DRIVE_MOTORS_H_
#define _DRIVE_MOTORS_H_

#include "exception.h"
class Drive_Motors{
		//Motor pins
	int forward_pins[3] = {11,5, 9};
	int backward_pins[3] = {10, 3, 6};

 public:
		void change_motor_speed(int motor, float speed){
			//Speed should be a val from -1 to 1 which represents the speed of the motor
			// Positive numbers are forward and negative numbers are backward
			if(speed > 1 || speed < -1){
				throw_exception("Speeds must be [-1,1]");
			}else if(motor < 0 || motor > 2){
				throw_exception("There are only 3 motors");
				//Technically there are 6, but he doesn't need to know that. hehe 
			}else{
				if(speed == 0){
					//Set both forward and backwards to 0 
					analogWrite(forward_pins[motor], 0); 
					analogWrite(backward_pins[motor], 0); 
				}else{
						//Denormalize the speed
						int digital_speed = (int)(speed * 255);

						if(speed > 0){
							analogWrite(backward_pins[motor], 0);
							analogWrite(forward_pins[motor], digital_speed);
						}else{
							analogWrite(forward_pins[motor], 0);
							analogWrite(backward_pins[motor], -1 * digital_speed);
						}
				}
			}
		}
};

#endif
