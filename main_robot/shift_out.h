#ifndef _SHIFT_OUT_H_
#define _SHIFT_OUT_H_

struct Bit_Shifter{

		int motor_data_pin = 2;
		int shift_clock_pin = 4;
		int storage_clock_pin = 8;
		int master_reset_pin = 12;
		int pulse_width = 10;


		Bit_Shifter(){
			pinMode(motor_data_pin, OUTPUT);
			pinMode(shift_clock_pin, OUTPUT);
			pinMode(storage_clock_pin, OUTPUT);
			pinMode(master_reset_pin, OUTPUT);

			//Init Values
			digitalWrite(shift_clock_pin, LOW);
			digitalWrite(storage_clock_pin, LOW);
			digitalWrite(motor_data_pin, LOW);

		}
	
		void reset_shift(){
			digitalWrite(master_reset_pin, LOW); //Resets the registers
			delayMicroseconds(1); //t pulse width
			digitalWrite(master_reset_pin, HIGH);
			delayMicroseconds(1); //Always return in a ready state
		}

		void set_data_pin(String bit){
			if(bit == "0"){
				digitalWrite(motor_data_pin, LOW);
			}
			if(bit == "1"){
				digitalWrite(motor_data_pin, HIGH);
			}
			delayMicroseconds(20);
		}

		void pulse_clock(int clock_pin){
			digitalWrite(clock_pin, HIGH);
			delayMicroseconds(1);
			digitalWrite(clock_pin, LOW);
			delayMicroseconds(1); //Always return in a ready state
		}

		void shift_out(String data){
			int i;
			reset_shift();
			for( i=data.length()-1; i>=0; i--){
				set_data_pin(String(data[i]));
				pulse_clock(shift_clock_pin);
			}
			pulse_clock(storage_clock_pin);
			delayMicroseconds(1);
		}
};

#endif
