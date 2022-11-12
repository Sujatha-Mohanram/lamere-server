const mongoose = require('mongoose');

var Faculty = mongoose.model('Faculty',{
    firstname: {type:String},
    lastname: {type: String},
    schoolid: {type: Number},
    email: {type: String},
    password: {type: String},
    datecreated: {type: String},
    avtar: {type: String}
});
module.exports = { Faculty };