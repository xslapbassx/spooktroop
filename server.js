const express = require('express');
   const bodyParser = require('body-parser');
   const MongoClient = require('mongodb').MongoClient;

   const app = express();
   const port = 3000;

   app.use(bodyParser.urlencoded({ extended: true }));
   app.use(bodyParser.json());

   // Replace with your MongoDB connection string
   const uri = "mongodb+srv://michaelthomasfrancis:rjt6z0G7VVjzr0SP@cluster0.alu8q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; 
   const client = new MongoClient(uri);

   app.post('/submit-form', async (req, res) => {
       try {
           await client.connect();
           const db = client.db('archive');
           const collection = db.collection('stories');

           const result = await collection.insertOne(req.body);
           res.send('Data inserted successfully!');
       } catch (err) {
           console.error(err);
           res.status(500).send('Error inserting data');
       } finally {
           await client.close();
       }
   });

   app.listen(port, () => {
       console.log(`Server listening on port ${port}`);
   });