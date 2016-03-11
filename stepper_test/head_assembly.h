#ifndef _HEAD_ASSEMBLY_
#define _HEAD_ASSEMBLY_

#include "drive_result.h"
#include "stepper_motor.h"
#include "shift_out.h"

struct Head_Assembly {

	int num_motors = 3;
	
		void setup_head_assembly(){
		}

	Drive_Result* drive_motors(Drive_Result previous_results[], int frequencies[]){
			String data = "";
			int i;

			
			for( i=0; i<num_motors; i++ ){
				data += drive_motor(frequencies[i], previous_results[i]);
			}
		}
};

#endif 
