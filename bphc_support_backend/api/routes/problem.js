const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const checkAuth = require('../middleware/check-auth');
const sanitizer = require('sanitize')();
const { check } = require('express-validator');


const Problem = require("../models/problem");

router.post('/', checkAuth,(req, res, next) => {

    const problem = new Problem();

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


router.get('/user', [check('email').isEmail().normalizeEmail()], checkAuth, (req, res,next) => {
  
  const email = req.body.email;

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

router.get('/admin', checkAuth, (req, res,next) => {
  
  const bhawan = sanitizer.value(req.body.bhawan,String);
  
    Problem.find({bhawan: bhawan})
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