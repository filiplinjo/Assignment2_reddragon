
var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:8080')
const fs = require('fs');
var json2xml = require('json2xml');
var topicnr = 0;

//senML_exi
const EXI4JSON = require('exificient.js');
var toBuffer = require('typedarray-to-buffer')


const array = ['light', 'proxmity', 'temperatur','security', 'smoke and gas', 'humidity'];


function random() {
  return  Math.floor(Math.random() * 100).toString();
}


function getVariable(topic) {
  switch(topic){
  case 'light':  return 'Watts'; break;
  case 'proxmity': return 'Meters'; break;
  case 'temperatur': return 'Celsius'; break;
  case 'security': return 'Detected burglary'; break;
  case 'smoke and gas': return 'OPL'; break;
  default: return 'SI';
 }
}


//For json2xml uncomment:
 client.on('connect',()=>{
   setInterval(()=>{
    topic = array[topicnr];
    var date = new Date();
    var timestamp = date.toISOString();
    console.log(timestamp);
    nummer = random();
    var variable = getVariable(topic);
    var message = `{"Data":{"SOM":{"Tab":[{"SensorValues":{"DeviceID": "${topic}" , "NewValue": "${nummer}" , "Time": "${timestamp}" , "Variable": "${variable}" , "Version": "0.0.2"}}]}}}`;
    var jsonObj = JSON.parse(message);
    message = json2xml(jsonObj);
    console.log(message);
    ++topicnr;
    if (topicnr==6){
    topicnr=0}
    client.publish(topic, message)
    },5000)
   })


/*
client.on('connect',()=>{
  setInterval(()=>{
   var topic = array[topicnr];
   var nummer = random();
   var message = `{"Data":{"SOM":{"Tab":[{"Values":{"SensorID": "${topic}", "value": "${nummer}"}}]}}}`;
   var jsonObj = JSON.parse(message);
   var uint8Array = EXI4JSON.exify(jsonObj);
   uint8Array = toBuffer(uint8Array);
   console.log(uint8Array);
   ++topicnr;
   if (topicnr==6){
    topicnr=0;
    }
     client.publish(topic, uint8Array)
     },5000)
   })
*/

