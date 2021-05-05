var mqtt = require('mqtt');
const xml2js = require('xml2js')
var client = mqtt.connect('mqtt://localhost:8080')
var nr = 0;
const array = ['light', 'proxmity', 'temperatur','security', 'smoke and gas', 'humidity'];
//const EXI4JSON = require('exificient.js');

client.on('connect', ()=>{
  client.subscribe(array[0]);
  client.subscribe(array[1]);
  client.subscribe(array[2]);
  client.subscribe(array[3]);
  client.subscribe(array[4]);
  client.subscribe(array[5]);
})

/*
//for EXI2json
client.on('message', (topic, message)=>{
  const json = message.toString()
  EXI4JSON.parse(json, (err, result) => {
    if(err){
        throw err;
    }
    const json = JSON.stringify(result, null, 4);
    console.log(json);
    ++nr;
    topic=array[nr%5];
  });
})
*/

//uncomment for xmltojson

client.on('message', (topic,message)=>{
  const xml = message.toString()
  xml2js.parseString(xml, (err, result) => {
    if(err){
        throw err;
    }
    const json = JSON.stringify(result, null, 4);
    console.log(json);
    ++nr;
    topic=array[nr%5];
  });
})

