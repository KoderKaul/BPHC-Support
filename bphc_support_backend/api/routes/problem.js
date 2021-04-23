const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const checkAuth = require('../middleware/check-auth');
const { check } = require('express-validator');
const sanitizer = require('sanitize')();


const Problem = require("../models/problem");

router.post('/', checkAuth,(req, res, next) => {

    const problem = new Problem();

    problem["problemTitle"]="";
    problem["problemCategory"]="";
    problem["problemDesc"]="";
    problem["studentEmail"]="";
    problem["studentName"]="";
    problem["studentId"]="";
    problem["studentRoomNo"]="";
    problem["studentBhawan"]="";
    problem["problemStatus"]="";

    problem["_id"]=new mongoose.Types.ObjectId();
    problem["problemDate"]=new Date();

    for(var attr in req.body)
    {
      problem[attr]=req.body[attr];
    }

    problem.save()
    .then(result =>{
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    });

    res.status(201).json({
        message: "handling post requests",
        createdproblemt: problem
    });
    
    


});

// changed userData to params
router.get('/user/:email', checkAuth, (req, res,next) => {
  
  const email = sanitizer.value(req.params.email,String);

  //console.log(req.params);

  Problem.find({studentEmail: email})
  .exec()
  .then(doc =>{
    res.status(200).json(doc);
  }
  )
  .catch(err => {
    console.log(err);
  }
  );

});

// changed body to params
router.get('/admin/:bhawan', checkAuth, (req, res,next) => {
  
  const bhawan = sanitizer.value(req.params.bhawan,String);
  
    Problem.find({studentBhawan: bhawan})
    .exec()
    .then(doc =>{
      res.status(200).json(doc);
    }
    )
    .catch(err => {
      console.log(err);
    }
    );
  
  });

  router.get('/', (req, res,next) => {
    
    Problem.find()
    .exec()
    .then(doc =>{
      res.status(200).json(doc);
    }
    )
    .catch(err => {
      console.log(err);
    }
    );

});

router.patch('/:id', checkAuth, (req, res, next) => {

  const id = req.params.id;

  const problem = new Problem();

  for(var attr in req.body)
  {
    problem[attr]=req.body[attr];
    //console.log(student[attr]);
  }

  Problem.updateOne({_id: id},{$set: problem})
  .exec()
  .then(result =>{
    res.status(200).json(result);
  })
  .catch(err => {
    console.log(err);
  }
  );

});






module.exports = router;