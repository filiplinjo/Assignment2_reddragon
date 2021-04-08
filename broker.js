// MQTT broker
var mosca = require('mosca')
var settings = {port: 8080}
var broker = new mosca.Server(settings)

// MongoDB
var MongoClient = require('mongodb').MongoClient
const uri = "mongodb+srv://dbadmin:81234Witg@cluster0.zhaw6.mongodb.net/project1?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
  try {
    await client.connect();

    broker.on('ready', ()=>{
    console.log('Broker is ready!')
    })

    broker.on('published', (packet)=>{
    message = packet.payload.toString()
    console.log(message)

    //MongoClient.connect(uri, (error, client)=>{
    var myCol = client.db("project1").collection("home") // DB name and collection name
    myCol.insertOne({
    message:message
    }, ()=>{
    console.log('Data is saved to MongoDB')
   // client.close()
   // })
    })
   })

} finally {
    // Ensures that the client will close when you finish/error
   // await client.close();
  }
}
run().catch(console.dir);

