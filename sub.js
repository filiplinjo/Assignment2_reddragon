var mqtt = require('mqtt');
const xml2js = require('xml2js')
var client = mqtt.connect('mqtt://localhost:8080')
var topic1 = 'light'
var topic2= 'proxmity'
var topic3 = 'temperature'
var topic4 = 'security'
var topic5 = 'smoke and gas'
var topic6 = 'humidity'

client.on('connect', ()=>{
  client.subscribe(topic1);
})

client.on('message', (topic1,message)=>{
  const xml = message.toString()
  xml2js.parseString(xml, (err, result) => {
    if(err){
        throw err;
    }
    const json = JSON.stringify(result, null, 4);
    console.log(json);
  });
 //console.log(message)
})


client.on('connect', ()=>{
  client.subscribe(topic2);
})

client.on('message', (topic2,message)=>{
  const xml = message.toString()
  xml2js.parseString(xml, (err, result) => {
    if(err){
        throw err;
    }
    const json = JSON.stringify(result, null, 4);
    console.log(json);
  });
 //console.log(message)
})


client.on('connect', ()=>{
  client.subscribe(topic2);
})

client.on('message', (topic2,message)=>{
  const xml = message.toString()
  xml2js.parseString(xml, (err, result) => {
    if(err){
        throw err;
    }
    const json = JSON.stringify(result, null, 4);
    console.log(json);
  });
 //console.log(message)
})


client.on('connect', ()=>{
  client.subscribe(topic3);
})

client.on('message', (topic3,message)=>{
  const xml = message.toString()
  xml2js.parseString(xml, (err, result) => {
    if(err){
        throw err;
    }
    const json = JSON.stringify(result, null, 4);
    console.log(json);
  });
 //console.log(message)
})


client.on('connect', ()=>{
  client.subscribe(topic4);
})

client.on('message', (topic4,message)=>{
  const xml = message.toString()
  xml2js.parseString(xml, (err, result) => {
    if(err){
        throw err;
    }
    const json = JSON.stringify(result, null, 4);
    console.log(json);
  });
 //console.log(message)
})


client.on('connect', ()=>{
  client.subscribe(topic5);
})

client.on('message', (topic5,message)=>{
  const xml = message.toString()
  xml2js.parseString(xml, (err, result) => {
    if(err){
        throw err;
    }
    const json = JSON.stringify(result, null, 4);
    console.log(json);
  });
 //console.log(message)
})



client.on('connect', ()=>{
  client.subscribe(topic6);
})

client.on('message', (topic6,message)=>{
  const xml = message.toString()
  xml2js.parseString(xml, (err, result) => {
    if(err){
        throw err;
    }
    const json = JSON.stringify(result, null, 4);
    console.log(json);
  });
 //console.log(message)
})
