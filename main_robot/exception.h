#ifndef _EXCEPTION_H_
#define _EXCEPTION_H_
void throw_exception(String msg){
	//This function handles exceptions.

	if(CLOJURE_CONNECTED){
	//If serial_clojure is connected, then send the proper serial code for an exception

		//Implement this
	}else{ 
	//Else print to the serial in the normal way the exception
		//Serial.print("Exception: ");
		//Serial.println(msg);
	}
}
#endif
