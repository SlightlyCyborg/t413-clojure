#ifndef _STEPPER_MOTOR_H_
#define _STEPPER_MOTOR_H_

#include "shift_out.h"

struct Stepper_Motor{
	
	  int steps_per_rotation = 200;

		String motor_steps[4] = {String("1000"),
														String("0001"),
													String("0100"),
														String("0010")};

	  int shift_out_start_bit;
	  int last_step;

	  Bit_Shifter *bit_shifter;

	  Stepper_Motor(Bit_Shifter *shifter, int shift_out_start_bit){
			bit_shifter = shifter;
			last_step = 0;
	  }

		Drive_Result drive_motor(int frequency, Drive_Result last_drive_result = Drive_Result{"", 0, 0}){

			//Serial.print(last_drive_result.step_num);
			//Serial.print(",");
			//Serial.print(last_drive_result.useconds_last_step);
			//Serial.print(",");

			long int useconds_last_step = last_drive_result.useconds_last_step;
			long int last_step_num      = last_drive_result.step_num;


			int i, j;
			int next_step = last_step_num;

			//Frequency is cw from motor perspective and ccw from top down
			long int microsecs_in_sec = 1000000;

			//Only do step logic if we want to turn the motor at some freq
			if(frequency > 0){

			//time_per_step is "wavelength" w = 1/f divided by num steps_per_rotation
			int usecs_per_step = (1/frequency) * microsecs_in_sec / steps_per_rotation;
						

			//Serial.print(usecs_per_step);

			//Need the time this loop starts so that we can calculate the amount of delay needed
			int cur_time_micro = millis() * 1000;

				//Test if step needs to occur
				if(useconds_last_step + usecs_per_step <= (millis() * 1000)){

					//Serial.print("In if");

					if(frequency > 0){
						next_step = (last_step_num + 1) % 4;
					}
					if(frequency < 0){
						next_step = (last_step_num - 1) % 4;
					}
					//Step has occured, so we need to set useconds_last_step to cur time
					useconds_last_step = millis() * 1000;
				}
			}

			//Serial.println(next_step);
			String motor_data = motor_steps[next_step];

			//Serial.print(useconds_last_step);
			//Serial.print(",");
			return Drive_Result{motor_data, useconds_last_step, next_step};
		}
  int step(int direction){

		int cur_step, i;

		if(direction == -1){
			cur_step = (last_step - 1) % 4;
		}
		else{
			cur_step = (last_step + 1) % 4;
		}

		for (i=0; i<4; i++){
			motor_steps[cur_step][i];
		  bit_shifter->set_bit(shift_out_start_bit + i,  motor_steps[cur_step][i]);
			
		}
		last_step = cur_step;
	}
};


#endif
