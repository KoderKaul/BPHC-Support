const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const checkAuth = require('../middleware/check-auth');


const Courier = require("../models/courier");

router.post('/', checkAuth,(req, res, next) => {

    const courier = new Courier(
        {
            _id: new mongoose.Types.ObjectId(),
            studentEmail: req.body.studentEmail,
            studentName: req.body.studentName,
        }

    );

    courier.save()
    .then(result =>{
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    });

    res.status(201).json({
        message: "handling post requests",
        createdcourier: courier
    });
    
    


});









router.delete('/', (req, res,next) => {

});

router.get('/user',checkAuth, (req, res,next) => {
  
  const email = req.body.email;

  Courier.find({studentEmail: email})
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

/*router.get('/admin', checkAuth, (req, res,next) => {
  
    const bhawan = req.body.bhawan;
  
    Courier.find({bhawan: bhawan})
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



});*/




module.exports = router;