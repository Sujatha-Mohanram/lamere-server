/*
Student Number : 301152761
Student Name: Sujatha Mohanram
project : 2

*/
const mongoose = require('mongoose');
const  MongoURI= 'mongodb+srv://sujatha:QWERasdf1234@sujatha.q2ejj5c.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(MongoURI,(err)=>{
    if(!err)
    console.log('MongoDB connection succeeded.');
    else
    console.log('Error in DB connection: '+JSON.stringify(err,undefined,2));
});

module.exports = mongoose;
