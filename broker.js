// MQTT broker
var mosca = require('mosca')
var settings = {port: 8080}
var broker = new mosca.Server(settings)

//EXI
const EXI4JSON = require('exificient.js');
var tou8 = require('buffer-to-uint8array');

// MongoDB
var MongoClient = require('mongodb').MongoClient
const uri = "mongodb+srv://dbadmin:81234Witg@cluster0.zhaw6.mongodb.net/project1?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


  broker.on('ready', ()=>{
  console.log('Broker is ready!')
  })

async function run() {
  try {
    await client.connect();
    broker.on('published', (packet)=>{
      //Decode for EXI:
      //var a = tou8(packet.payload);        //Converts buffer into uint8Array
      //var jsonObjOut = EXI4JSON.parse(a);  //Converts the uint8Array into jsonObj
      //message = json2xml(jsonObjout);      //Converts jsonObj into xml (stored as xml on database)
      message = packet.payload.toString()
      console.log(message)
      var myCol = client.db("project1").collection("home") // DB name and collection name
      myCol.insertOne({
      message:String(message)
      }, ()=>{
      console.log('Data is saved to MongoDB')
        //client.close()
      })
     })

} finally {
    //Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);

