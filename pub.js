var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:8080')
const fs = require('fs');
var json2xml = require('json2xml');


function random() {
  return  Math.floor(Math.random() * 100);
}

//Number 1 sensor (light)
var topic1 = 'light'

function light() {
  var message1 = '{"Data":{"SOM":{"Tab":[{"Values":{"SensorID":"light","value": '+random()+'}}]}}}';
  var jsonObj = JSON.parse(message1);
  message1 = json2xml(jsonObj);
  console.log(message1);
  return message1;
}

client.on('connect',()=>{
 //var messageno1 = light();
 setInterval(()=>{
 client.publish(topic1, light())
 console.log('message sent', light())
 },5000)
})




//NB, bør egentlig flytte json2xml konvertinger til broker.js
