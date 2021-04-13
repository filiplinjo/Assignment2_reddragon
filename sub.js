var mqtt = require('mqtt');
const xml2js = require('xml2js')
var client = mqtt.connect('mqtt://localhost:8080')
var topic = 'light'

client.on('connect', ()=>{
  client.subscribe(topic);
})

client.on('message', (topic,message)=>{
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



