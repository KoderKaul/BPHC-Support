const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const checkAuth = require('../middleware/check-auth');


const Notice = require("../models/notice");

router.post('/', checkAuth,(req, res, next) => {

    const notice = new Notice();

    notice["_id"]=new mongoose.Types.ObjectId();
    notice["noticeDate"]=new Date();
    
    for(var attr in req.body)
    {
      notice[attr]=req.body[attr];
    }


    notice.save()
    .then(result =>{
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    });

    res.status(201).json({
        message: "handling post requests",
        creatednotice: notice
    });
    
    


});


router.get('/user',checkAuth, (req, res,next) => {

  Notice.find()
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
    
  Notice.find()
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