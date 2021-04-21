const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const checkAuth = require('../middleware/check-auth');
const { check } = require('express-validator');


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
    problem["problemDate"]="";

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
  
  const email = req.params.email;

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
  
  const bhawan = req.params.bhawan;
  
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






module.exports = router;