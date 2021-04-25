var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:8080')
const fs = require('fs');
var json2xml = require('json2xml');
let topicnr = 0;

function random() {
  return  Math.floor(Math.random() * 100);
}

function sensor() {
    ++topicnr;
    var array = ['light', 'proxmity', 'temperatur','security', 'smoke and gas', 'humidity']
    var message = `{"Data":{"SOM":{"Tab":[{"Values":{"SensorID": "${array[topicnr%5]}" ,"value": "${random()}"}}]}}}`;
    var jsonObj = JSON.parse(message);
    message = json2xml(jsonObj);
    console.log(message);
    return message;
 }

   client.on('connect',()=>{
     setInterval(()=>{
     client.publish("light", sensor())
     },5000)
   })






