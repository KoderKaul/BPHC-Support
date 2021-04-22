const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const checkAuth = require('../middleware/check-auth');
const { check } = require('express-validator');


const Courier = require("../models/courier");

router.post('/', checkAuth,(req, res, next) => {

    const courier = new Courier();

    courier["_id"] = new mongoose.Types.ObjectId();
    courier["courierDesc"] = new Date();
    for(var attr in req.body)
    {
      courier[attr]=req.body[attr];
    }

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


//changed body to params
router.get('/user/:email',[check('email').isEmail().normalizeEmail()], checkAuth, (req, res,next) => {
  
  const email = req.params.email;

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

router.get('/', (req, res,next) => {
  
  Courier.find()
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