var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:8080')
const fs = require('fs');
var json2xml = require('json2xml');
var topicnr = 0;

const array = ['light', 'proxmity', 'temperatur','security', 'smoke and gas', 'humidity'];


function random() {
  return  Math.floor(Math.random() * 100);
}

function sensor() {
    var array = ['light', 'proxmity', 'temperatur','security', 'smoke and gas', 'humidity']
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
     setInterval(()=>{
     client.publish(array[topicnr], sensor())
     },5000)
   })





