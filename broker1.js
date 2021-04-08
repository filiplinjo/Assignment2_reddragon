// MQTT broker
var mosca = require('mosca')
var settings = {port: 8080}
var broker = new mosca.Server(settings)
// MongoDB
var mongc = require('mongodb').MongoClient
var url = "mongodb+srv://filip.h.eikenes@gmail.com:cloud98reddragon@cluster0.zhaw6.mongodb.net/project1?retryWrites=true&w=majority"; // Your connection string
broker.on('ready', ()=>{
 console.log('Broker is ready!')
})

broker.on('published', (packet)=>{
 message = packet.payload.toString()
 console.log(message)
 mongc.connect(url, (error, client)=>{
   var myCol = client.db('project1').collection('home') // DB name and collection name
   myCol.insertOne({
     message: message
   }, ()=>{
     console.log('Data is saved to MongoDB')
 //client.close()
 })
 })
})
