
var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:8080')
const fs = require('fs');
var json2xml = require('json2xml');
var topicnr = 0;

//senML_exi
const EXI4JSON = require('exificient.js');

const array = ['light', 'proxmity', 'temperatur','security', 'smoke and gas', 'humidity'];


function random() {
  return  Math.floor(Math.random() * 100).toString();
}


//For json2xml uncomment:
 client.on('connect',()=>{
   setInterval(()=>{
    topic = array[topicnr];
    nummer = random();
    var message = `{"Data":{"SOM":{"Tab":[{"Values":{"SensorID": "${topic}" ,"value": "${nummer}"}}]}}}`;
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
   message = uint8Array.toString();
   console.log(message);
   ++topicnr;
   if (topicnr==6){
    topicnr=0;
    }
    client.publish(topic,message)
     },5000)
   })
*/


