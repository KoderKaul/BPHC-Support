const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const checkAuth = require('../middleware/check-auth');
const mongoSanitize = require('express-mongo-sanitize');
router.use(mongoSanitize());


const Problem = require("../models/problem");

router.post('/', checkAuth,(req, res, next) => {

    const problem = new Problem(
        {
            _id: new mongoose.Types.ObjectId(),
            problemTitle: req.body.problemTitle,
            problemCategory: req.body.problemCategory,
            problemDesc: req.body.problemDesc,
            studentEmail: req.body.studentEmail,
            studentName: req.body.studentName,
            studentId: req.body.studentId,
            studentRoomNo: req.body.studentRoomNo,
            studentBhawan: req.body.studentBhawan
        }

    );

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









router.delete('/', (req, res,next) => {

});

router.get('/user',checkAuth, (req, res,next) => {
  
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
  
    const bhawan = req.body.bhawan;
  
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




router.patch('/', (req, res, next) => {



});




module.exports = router;