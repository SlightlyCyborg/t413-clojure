#include <math.h>
#define STRING_HYPOT       120 //mills
#define MAX_STRING_CONTRACT 54 //mills
#define MOTOR_RADIUS       197.5 //mills

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

void setup(){
	Serial.begin(115200); 
	int i;

	float data[3] = {MOTOR_RADIUS, MOTOR_RADIUS, MOTOR_RADIUS};
	calculate_string_lengths(20,0, data);
	delay(1000);
	for(i=0;i<3;i++){
		Serial.println(data[i]);
	}
}

void loop(){}