//Creating server
const express = require('express');
const app=express();
const cors = require('cors');

//Importing librabies and js files
require('dotenv').config();
const bodyParser = require('body-parser');
const mongoose=require('mongoose');
const notesRouter = require('./routes/notes');


//Middleweres
app.use(cors());
app.use(bodyParser.json());
app.use('/notes',notesRouter)

//Connecting to database
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true})
const db=mongoose.connection;

//Getting information about database status
db.on('error',(error)=>console.log.error(error)) 
db.once('open',()=>console.log('Connected to Database'));

//Listening to port 
app.listen(5000,()=>console.log('Server Started'));