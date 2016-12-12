/* Sweep
 by BARRAGAN <http://barraganstudio.com>
 This example code is in the public domain.

 modified 8 Nov 2013
 by Scott Fitzgerald
 http://www.arduino.cc/en/Tutorial/Sweep
*/

#include <Servo.h>

Servo myservo_0;  // create servo object to control a servo
Servo myservo_1;
Servo myservo_2;

int pos = 0;    // variable to store the servo position


void setup() {
  myservo_0.attach(9);  // attaches the servo on pin 9 to the servo object
  myservo_1.attach(10);  // attaches the servo on pin 9 to the servo object
  myservo_2.attach(11);
}

void loop() {
  for (pos = 0; pos <= 180; pos += 1) { // goes from 0 degrees to 180 degrees
                                         // in steps of 1 degree
    myservo_0.write(pos); 
    myservo_1.write(pos); 
//    myservo_2.write(pos);              // tell servo to go to position in variable 'pos'
    delay(15);                       // waits 15ms for the servo to reach the position
  }
  for (pos = 0; pos <= 180; pos += 1) { // goes from 0 degrees to 180 degrees
                         // waits 15ms for the servo to reach the position
      myservo_2.write(pos); 
    delay(30);                       // waits 15ms for the servo to reach the position
  }
  for (pos = 180; pos >= 0; pos -= 1) { // goes from 180 degrees to 0 degrees
    myservo_0.write(pos);              // tell servo to go to position in variable 'pos'
    
    delay(5);                       // waits 15ms for the servo to reach the position
  }
//   for (pos = 180; pos >= 0; pos -= 6) { // goes from 180 degrees to 0 degrees
////    myservo_2.write(pos);              // tell servo to go to position in variable 'pos'
//    
//    delay(15);                       // waits 15ms for the servo to reach the position
//  }
}

