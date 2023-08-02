#include <stdio.h> 
#include <stdlib.h>
using namespace std;
#include <TinyGPS++.h>
#include <HardwareSerial.h>


#include "secrets.h"
#include <WiFiClientSecure.h>
#include <PubSubClient.h>
#include <ArduinoJson.h>
#include "WiFi.h"
//String myID  "3"
#define AWS_IOT_PUBLISH_TOPIC   "esp32/5/pub"
#define AWS_IOT_SUBSCRIBE_TOPIC "getRage"

#include "time.h"
const char* ntpServer = "pool.ntp.org";
const long  gmtOffset_sec = 0;
const int   daylightOffset_sec = 3600;
 bool isStatus = true ;
 bool sendFalse = false;
WiFiClientSecure net = WiFiClientSecure();
PubSubClient client(net);

#define LED 21 
#define RXPin 16
#define TXPin 17
bool filterGPS = true;
static const uint32_t GPSBaud = 9600;
 int myDelay = 5000;
// The TinyGPS++ object
TinyGPSPlus gps;

// The serial connection to the GPS device
HardwareSerial ss(1);


void awsConnect(){
  net.setCACert(AWS_CERT_CA);
  net.setCertificate(AWS_CERT_CRT);
  net.setPrivateKey(AWS_CERT_PRIVATE);
 
  // Connect to the MQTT broker on the AWS endpoint we defined earlier
  client.setCallback(callback);
  client.setServer(AWS_IOT_ENDPOINT, 8883);
 
  // Create a message handler
  
  //client.setCallback(messageHandler);
 
  Serial.println("Connecting to AWS IOT");
 
  while (!client.connect(THINGNAME))
  {
    Serial.print(".");
    delay(100);
  }
 
  if (!client.connected())
  {
    Serial.println("AWS IoT Timeout!");
    return;
  }
 
  // Subscribe to a topic
  
  client.subscribe("esp32/setAll");
  client.subscribe("esp32/3setinterval");
  client.subscribe("esp32/3/setStatus");
  client.subscribe("esp32/setinterval");
  client.publish(AWS_IOT_PUBLISH_TOPIC, "what");
  Serial.println("AWS IoT Connected!");
  Serial.println(AWS_IOT_SUBSCRIBE_TOPIC);
}

void connectWIFI(){
   WiFi.mode(WIFI_STA);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
 
  Serial.println("Connecting to Wi-Fi");
 
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
  }
  Serial.println("WIFI Connected");
}
const String getTime(){

    Serial.println("");
    Serial.print("day : ");
    char myTime[256];
    char dayStr[10]; 
    int dayInt = gps.date.day();
    sprintf(dayStr, "%d", dayInt); 
    
   char monthStr[10]; 
    int monthInt = gps.date.month();
    sprintf(monthStr, "%d", monthInt);

    char yearStr[10]; 
    int yearInt = gps.date.year();
    sprintf(yearStr, "%d", yearInt);

    char hourStr[10]; 
    int hourInt = gps.time.hour()+7;
    sprintf(hourStr, "%d", hourInt);

    char minStr[10]; 
    int minInt = gps.time.minute();
    sprintf(minStr, "%d", minInt);

    char secondStr[10]; 
    int secondInt = gps.time.second();
    sprintf(secondStr, "%d", secondInt);
  
      sprintf(myTime,"%s %s %s %s %s %s",dayStr,monthStr,yearStr,hourStr,minStr,secondStr); // puts string into buffer
//    strncat(myTime,monthStr,2);
//    strncat(myTime,yearStr,4);
//
//    strncat(myTime,blank);
//    strncat(myTime,hourStr);
//    strncat(myTime,minStr);
//    strncat(myTime,secondStr);
   
    Serial.println(myTime);
    return myTime;
  
  }

void publishMessage(float mylong,float mylat,String myTimeInPublish)
{
  StaticJsonDocument<200> doc;
  doc["device"] = "1";
  doc["longitude"] = serialized(String(mylong,6)) ;
  doc["latitude"] = serialized(String(mylat,6)) ;
  doc["time"] = myTimeInPublish ;
  String tempStatus = "true";
  if (!isStatus) {
    tempStatus = "false";
  }
  doc["status"] = tempStatus ;
  Serial.println(tempStatus);
  char jsonBuffer[512];
  serializeJson(doc, jsonBuffer); // print to client
 if(isStatus == false) {
     Serial.println("lastFalse");
    sendFalse = true;
    }
    else {
       sendFalse = false ;
      }
  client.publish(AWS_IOT_PUBLISH_TOPIC, jsonBuffer);
  
}

void setup()
{
Serial.begin(115200);
ss.begin(9600, SERIAL_8N1, 16, 17);
  pinMode(LED,OUTPUT);
Serial.println(TinyGPSPlus::libraryVersion());
connectWIFI();
configTime(gmtOffset_sec, daylightOffset_sec, ntpServer);
awsConnect();
}

void loop()
{
  delay(1000);
client.loop();
digitalWrite(LED,HIGH);
while (ss.available() > 0)

if (gps.encode(ss.read()))
filterGPS = true;

if ((isStatus == true) || (sendFalse == false)) {
displayInfo();
}
if (millis() > 5000 && gps.charsProcessed() < 10)
{
Serial.println(F("No GPS detected: check wiring."));
//while(true);
}
//  digitalWrite(LED,LOW);

}

void displayInfo()
{
  Serial.print(F("nani"));

if (gps.location.isValid() )
{
  if ( filterGPS == true) {
    float myLong = gps.location.lng();
    float myLat = gps.location.lat();
    String myTimeInGPS = getTime();
    publishMessage(myLong,myLat,myTimeInGPS);
    Serial.print(F("Location: "));
Serial.print(gps.location.lat(), 6);
Serial.print(F(","));
Serial.print(gps.location.lng(), 6);
filterGPS = false;
delay(myDelay);

  }
}
else
{
Serial.print(F("INVALID"));
}

Serial.println();

}

void callback(char* topic, byte* message, unsigned int length) {
  Serial.print("Message arrived on topic: ");
  Serial.print(topic);
  Serial.print(". Message: ");
  String messageTemp;
  
  for (int i = 0; i < length; i++) {
    Serial.print((char)message[i]);
    messageTemp += (char)message[i];
  }
  Serial.println();
  StaticJsonDocument<64> doc;
    DeserializationError error = deserializeJson(doc, messageTemp);

    if (error) {
    Serial.print(F("deserializeJson() failed: "));
    Serial.println(error.c_str());
    return;
  }
  else {
  
  if (String(topic) == "esp32/setAll") {
    String tempStatus = doc["status"];
    bool tempBool = tempStatus.equalsIgnoreCase("true");
   isStatus = tempBool ;
  }
 if  (String(topic) == "esp32/5/setStatus") {
      String tempStatus = doc["status"];
    bool tempBool = tempStatus.equalsIgnoreCase("true");
   isStatus = tempBool ;
    }

  
  if  (String(topic) == "esp32/5setinterval") {
      Serial.print("String(topic)");
      String timeInterval = doc["timeInterval"];
      int tempDelay = timeInterval.toInt() * 1000;
      Serial.print(tempDelay);
      myDelay = tempDelay ;
      filterGPS = false;
      Serial.println(myDelay);
    }
    if  (String(topic) == "esp32/setinterval") {
      Serial.print("String(topic)");
      String timeInterval = doc["timeInterval"];
      int tempDelay = timeInterval.toInt() * 1000;
      filterGPS = false;
      myDelay = tempDelay ;
    }

    
  }
}
