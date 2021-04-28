
//Det som mangler:
//1. Fikse EXI helt
//2. Message som inneholder senML har feil format
//3. README fil

var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:8080')
const fs = require('fs');
var json2xml = require('json2xml');
var topicnr = 0;

//senML_exi
const EXI4JSON = require('exificient.js');

const array = ['light', 'proxmity', 'temperatur','security', 'smoke and gas', 'humidity'];


function random() {
  return  Math.floor(Math.random() * 100);
}

//For json2xml uncomment:
/*
function sensor() {
    var message = `{"Data":{"SOM":{"Tab":[{"Values":{"SensorID": "${array[topicnr]}" ,"value": "${random()}"}}]}}}`;
    var jsonObj = JSON.parse(message);
    message = json2xml(jsonObj);
    console.log(message);
    ++topicnr;
    if (topicnr==6){
    topicnr=0;
    }
    return message;
 }

client.on('connect',()=>{
     var message1= sensor()
     setInterval(()=>{
     client.publish(array[topicnr], message1)
     },5000)
   })
*/

function EXI_convert() {
   var message = { "Topic": "${array[topicnr]}", "v": "${random()}"};
   var uint8Array = EXI4JSON.exify(message);
   var message1 = uint8Array.toString();
   ++topicnr;
   if (topicnr==6){
    topicnr=0;
    }
   console.log(message1);
   return message1;
}


client.on('connect',()=>{
     var message1= EXI_convert();
     setInterval(()=>{
     client.publish(array[topicnr], message1)
     },5000)
   })






