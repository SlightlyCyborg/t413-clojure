#ifndef _HEAD_ASSEMBLY_
#define _HEAD_ASSEMBLY_

#include "drive_result.h"
#include "stepper_motor.h"
#include "shift_out.h"

#define STRING_HYPOT       120   //mills
#define MAX_STRING_CONTRACT 54   //mills
#define MOTOR_RADIUS       197.5 //mills
#define SPINDLE_CIRC       12*2*PI    //mills



struct Head_Assembly {
	static const int num_motors = 3;
	Stepper_Motor *steppers[num_motors];
	Bit_Shifter* bit_shifter;
	Drive_Result drive_results[3];

	float frequencies[3];
	int time_left;
	int last_tick;



	Head_Assembly(){
		int i;
		bit_shifter = new Bit_Shifter(12);

		//Initalize steppers
		for( i=0; i<num_motors; i++ ){
			steppers[i] = new Stepper_Motor(bit_shifter, i * 4);
		}

		//Initalize drive_results
		for( i=0; i<num_motors; i++ ){
					drive_results[i] = {"", 0, 0};
				}
	}

	void motor_loop(){
	}
	

	void drive_motors( int frequencies[] ){
			String data = "";
			int i;

			for( i=0; i<num_motors; i++ ){
				//Serial.print(i);
				 //Serial.print(":");
				 drive_results[i] = steppers[i]->drive_motor(frequencies[i], drive_results[i]);
				 data += drive_results[i].motor_data;
			}

			Serial.println(data);
			bit_shifter->shift_out(data);
  }

	void test_step(){
		steppers[0]->step(1);
		bit_shifter->shift_out();
	}

	void drive_motor( float phi, float theta, int millisecs ){
		float string_lengths[3];
		float tmp;
		int i;

		calculate_string_lengths(phi, theta, string_lengths);

		//Calculate the frequencies needed
		/*
		for(i=0;i<3;i++){
			tmp = string_lengths[i] - current_string_lengths[i];
			frequencies[i] = tmp/((float)millisecs*STRING_CIRC/1000);
		}

		time_left = millisecs;
		last_tick = millis();
		*/
	}


	//Take a position on the sphere.
	//Transform it into a position in polar
	
	/*
	Polar_Coor spherical_to_polar(float phi, float theta){
		float radius = sin(radians(phi)) * STRING_HYPOT;

		return Polar_Coor(radius, theta);
	}

	Cart_Coor polar_to_cart(Polar_Coor coor){
		float x = coor.r * cos(radians(coor.theta));
		float y = coor.r * sin(radians(coor.theta));

		return Cart_Coor(x, y);
	}
	*/
	
  void calculate_string_lengths(float phi, float theta, float *string_lengths){
				int i;
				int wheel_angles[3] = {0, 120, 240};
				//Theta  0-360
				//Phi 0-20

				float lines[3];
				//Project spherical coors onto the plane. 
				float radius = sin(radians(phi)) * STRING_HYPOT;

				//Convert polar to cartesian
				float x = radius * cos(radians(theta));
				float y = radius * sin(radians(theta));

				Serial.print("y:");
				Serial.println(y);



				for(i=0; i<3; i++){
					float motorx = MOTOR_RADIUS * cos(radians(wheel_angles[i]));
					float motory = MOTOR_RADIUS * sin(radians(wheel_angles[i]));
					Serial.print("motorx");
					Serial.print(i);
					Serial.print(":");
					Serial.println(motorx);

					Serial.print("motory");
					Serial.print(i);
					Serial.print(":");
					Serial.println(motory);

					string_lengths[i] = sqrt(sq(motorx-x) + sq(motory-y));
				}

		}
};

#endif 
