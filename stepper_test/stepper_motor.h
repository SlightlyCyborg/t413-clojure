#ifndef _STEPPER_MOTOR_H_
#define _STEPPER_MOTOR_H_


struct Stepper_Motor{
	
	  int steps_per_rotation = 200;

		String motor_steps[4] = {String("1000"),
														String("0001"),
														String("0100"),
														String("0010")};

		Drive_Result drive_motor(int frequency, Drive_Result last_drive_result = Drive_Result{"", 0, 0}){

			int useconds_last_step = last_drive_result.useconds_last_step;
			int last_step_num      = last_drive_result.step_num;


			int i, j;
			int next_step = last_step_num;

			//Frequency is cw from motor perspective and ccw from top down
			long int microsecs_in_sec = 1000000;

			//time_per_step is "wavelength" w = 1/f divided by num steps_per_rotation
			int usecs_per_step = (1/frequency) * microsecs_in_sec / steps_per_rotation;

			//Need the time this loop starts so that we can calculate the amount of delay needed
			int cur_time_micro = millis() * 1000;

			//Test if step needs to occur
			if(useconds_last_step + usecs_per_step <= (millis() * 1000)){

				if(frequency > 0){
					next_step = (last_step_num + 1) % 4;
				}
				if(frequency < 0){
					next_step = (last_step_num - 1) % 4;
				}
				//Step has occured, so we need to set useconds_last_step to cur time
				useconds_last_step = millis() * 1000;
			}

			Serial.println(next_step);
			String motor_data = motor_steps[next_step];

			return Drive_Result{motor_data, useconds_last_step, next_step};
		}
};


#endif
