#include<iostream>

using namespace std;

int main(){
    int i;
    for(i = 0; i < (5000 * 5000); i++){
        if(i%5000==0){
            std::cout<<i<<endl;
        }
    }
}
