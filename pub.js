var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:8080')
var topic = 'light'
//var message = "{'foo': 'filip', 'lat' : '0.1', 'long': '10'}"
var message ="{'name': 'filip', 'age': '22'}"
const fs = require('fs');

//var data = '{"Data":{"SOM":{"Tab":[{"Values":{"ExpandedValues":null,"ID":"msorgrole"},"ID":"OrgRole"},{"Values":{"ExpandedValues":null,"ID":"msorg"},"ID":"Organization"}]}}}';
//var jsonObj = JSON.parse(data);
//var message = json2xml(jsonObj);

console.log(message);

client.on('connect',()=>{
 setInterval(()=>{
 client.publish(topic,message)
 console.log('message sent',message)
 },5000)
})
