var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:8080')
const fs = require('fs');
var json2xml = require('json2xml');


function random() {
  return  Math.floor(Math.random() * 100);
}

//Number 1 sensor (light)
/*var topic1 = 'light'
var topic2 = 'proxmity'
var topic3 = 'temperature'
var topic4 = 'security'
var topic5 = 'smoke and gas'
var topic6 = 'humidity'
*/

const obj = {
  light: 'light',
  proximity: 'proximity',
  security: 'security',
  smoke_and_gas: 'smoke and gas',
  humidity: 'humidity'

}

function sensor() {

  Object.values(obj).foreach(val=>{
  var message1 = '{"Data":{"SOM":{"Tab":[{"Values":{"SensorID":$val,"value": '+random()+'}}]}}}';
  var jsonObj = JSON.parse(message1);
  message1 = json2xml(jsonObj);
  console.log(message1);
 setInterval(()=>{
 client.publish(message1)
 console.log('message sent')
 },10000)

 });
}




/*function light() {
  var message1 = '{"Data":{"SOM":{"Tab":[{"Values":{"SensorID":"light","value": '+random()+'}}]}}}';
  var jsonObj = JSON.parse(message1);
  message1 = json2xml(jsonObj);
  console.log(message1);
  return message1;
}


function proxmity() {
  var message1 = '{"Data":{"SOM":{"Tab":[{"Values":{"SensorID":"proxmitiy","value": '+random()+'}}]}}}';
  var jsonObj = JSON.parse(message1);
  message1 = json2xml(jsonObj);
  console.log(message1);
  return message1;
}

function temperature() {
  var message1 = '{"Data":{"SOM":{"Tab":[{"Values":{"SensorID":"Temperature","value": '+random()+'}}]}}}';
  var jsonObj = JSON.parse(message1);
  message1 = json2xml(jsonObj);
  console.log(message1);
  return message1;
}

function security() {
  var message1 = '{"Data":{"SOM":{"Tab":[{"Values":{"SensorID":"security","value": '+random()+'}}]}}}';
  var jsonObj = JSON.parse(message1);
  message1 = json2xml(jsonObj);
  console.log(message1);
  return message1;
}

function Smoke_gas() {
  var message1 = '{"Data":{"SOM":{"Tab":[{"Values":{"SensorID":"Smoke and gas","value": '+random()+'}}]}}}';
  var jsonObj = JSON.parse(message1);
  message1 = json2xml(jsonObj);
  console.log(message1);
  return message1;
}

function Humidity() {
  var message1 = '{"Data":{"SOM":{"Tab":[{"Values":{"Humidity":"Smoke and gas","value": '+random()+'}}]}}}';
  var jsonObj = JSON.parse(message1);
  message1 = json2xml(jsonObj);
  console.log(message1);
  return message1;
}
*/
/*
client.on('connect',()=>{
 
 setInterval(()=>{
 client.publish(topic1, light())
 console.log('message sent', light())
 },10000)
})

client.on('connect',()=>{
 setInterval(()=>{
 client.publish(topic1, light())
 console.log('message sent', light())
 },10000)
})


client.on('connect',()=>{
 setInterval(()=>{
 client.publish(topic2, proxmity())
 console.log('message sent', proxmity())
 },10000)
})


client.on('connect',()=>{
 setInterval(()=>{
 client.publish(topic3, temperature())
 console.log('message sent', temperature())
 },10000)
})


client.on('connect',()=>{
 setInterval(()=>{
 client.publish(topic4, security())
 console.log('message sent', security())
 },10000)
})

client.on('connect',()=>{
 setInterval(()=>{
 client.publish(topic5, Smoke_gas())
 console.log('message sent', Smoke_gas())
 },10000)
})

client.on('connect',()=>{
 setInterval(()=>{
 client.publish(topic6, Humidity())
 console.log('message sent', Humidity())
 },10000)
})
//NB, bør egentlig flytte json2xml konvertinger til broker.js
