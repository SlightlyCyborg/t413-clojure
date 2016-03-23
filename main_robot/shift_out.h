#ifndef _SHIFT_OUT_H_
#define _SHIFT_OUT_H_

struct Bit_Shifter{

		int motor_data_pin = 2;
		int shift_clock_pin = 4;
		int storage_clock_pin = 8;
		int master_reset_pin = 12;
		int pulse_width = 10;
	  String data;
	  int data_size;


		Bit_Shifter(int size){
			int i;

			pinMode(motor_data_pin, OUTPUT);
			pinMode(shift_clock_pin, OUTPUT);
			pinMode(storage_clock_pin, OUTPUT);
			pinMode(master_reset_pin, OUTPUT);

			//Init Values
			digitalWrite(shift_clock_pin, LOW);
			digitalWrite(storage_clock_pin, LOW);
			digitalWrite(motor_data_pin, LOW);

			data = "";
			for(i; i<size; i++){
				data += "0";
			}
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

	void shift_out(){
		int i;
		reset_shift();
		for( i=data.length()-1; i>=0; i--){
			set_data_pin(String(data[i]));
			pulse_clock(shift_clock_pin);
		}
		pulse_clock(storage_clock_pin);
		delayMicroseconds(1);
	}

	  bool set_bit(int index, char value){
			if(value == '0' || value == '1'){
			  data[index] = value;
				return true;
  		}
			else{
				return false;
			}
		}

	void reset_data(){
		int i;
		for(i=0; i<data_size; i++){
			data[i] = '0';
		}
	}
};

#endif
