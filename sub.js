var mqtt = require('mqtt');
const xml2js = require('xml2js')
var client = mqtt.connect('mqtt://localhost:8080')
var topic1 = 'light'
var topic2= 'proxmity'

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




