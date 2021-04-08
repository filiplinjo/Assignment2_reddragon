var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:8080')
var topic = 'light'”
client.on('message', (topic,message)=>{
 message = message.toString()
 console.log(message)
})
client.on('connect',()=>{
 client.subscribe(topic)
})
