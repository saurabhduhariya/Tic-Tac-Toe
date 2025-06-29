const mongoose = require('mongoose');

require('dotenv').config();

const mongo_url = process.env.MONGO_CONN;

mongoose.connect(mongo_url)
    .then(()=>{
        console.log("Connected to MongoDB");
    }).catch((err)=>{
        console.log("Error connecting to MongoDB");
    })













//lAIO8DaLm0oNyZJz