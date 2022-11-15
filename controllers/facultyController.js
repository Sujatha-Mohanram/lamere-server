const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Faculty } = require('../models/faculty');
//localhost:3000/faculty/
router.get('/',(req,res) => {
    Faculty.find( (err, docs)=>{
        if(!err){ res.send(docs);    }
        else { console.log('Error in Retrieving Faculty : '+JSON.stringify(err,undefined,2));   }
    });
});

router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id :${req.params.id}');

    Faculty.findById(req.params.id, (err,doc)=> {
        if(!err){ res.send(doc);    }
        else { console.log('Error in Retrieving Faculty : '+JSON.stringify(err,undefined,2));   }
    });
});

router.post('/', (req,res)=> {
    var fac = new Faculty({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        schoolid: req.body.schoolid,
        email: req.body.email,
        password: req.body.password,
        datecreated: req.body.datecreated,
        avtar: req.body.avtar
    });
    fac.save((err,doc)=>{
        if(!err){ res.send(doc);}
        else{ console.log('Error in saving the faculty'+ JSON.stringify(err,undefined,2));}
    })
});

router.put('/:id', (req,res) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id :${req.params.id}');

    var fac = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        schoolid: req.body.schoolid,
        email: req.body.email,
        password: req.body.password,
        datecreated: req.body.datecreated,
        avtar: req.body.avtar
    };

    Faculty.findByIdAndUpdate(req.params.id,{$set: fac}, {new: true},(err,doc)=>{
        if(!err){ res.send(doc);}
        else{ console.log('Error in saving the faculty'+ JSON.stringify(err,undefined,2));}  
    });

});

router.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id)){ 
        console.log(req.params.id);
    return res.status(400).send('No record with given id :${req.params.id}');
    }

    Faculty.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){ res.send(doc);}
        else{ console.log('Error in delteting the faculty'+ JSON.stringify(err,undefined,2));}  
    });
});


module.exports = router;