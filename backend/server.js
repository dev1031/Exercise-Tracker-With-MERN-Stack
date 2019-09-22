const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
//const bodyParser = require('body-parser');
//newer versions of express don't need body-parser so line 13 can changed into express
//var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

require('dotenv').config();

const app = express();
const port = process.env.Process || 5000;

//middleweres
app.use(cors());
app.use(express.json());


mongoose.connect(url,{ useCreateIndex: true ,useNewUrlParser: true ,useUnifiedTopology: true}, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  
});

//telling that the routes are added and using in your application
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users',usersRouter);

app.listen(port,()=>{
    console.log(`Server is listining at port : ${port} `)
})


