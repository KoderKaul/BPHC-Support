const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');
const jwt = require("jsonwebtoken");
const checkAuth = require('../middleware/check-auth');
/*const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});*/

const Student = require("../models/student");

router.post('/signup', (req, res, next) => {

    Student.find({email: req.body.email})
    .exec()
    .then(docs =>
        {
            if(docs.length==0)
            {
                const student = new Student();


                student["_id"]=new mongoose.Types.ObjectId();
                for(var attr in req.body)
                {
                  student[attr]=req.body[attr];
                }
            
                student.save()
                .then(result =>{
                    console.log(result);
                })
                .catch(err => {
                    console.log(err);
                });
            
                res.status(201).json({
                    message: "handling post requests",
                    createdStudent: student
                });
            } else{
                res.status(404).json(
                    {
                        message: "you are already signed in"
                    }
                );
            }
        })
        .catch(err => {
            console.log(err);
        }
        );
    
    


});


router.post('/login', (req, res, next) => {
  
  const email = req.body.email;

  var token;

  Student.find({email: email})
  .exec()
  .then(doc =>{
    if(doc.length>0)
    {

      token = jwt.sign(
        {
          email: email
        }
        ,process.env.JWT_KEY,
        {
          expiresIn: "30d"
        }
      );

      res.status(200).json(
        {
          message: "Auth success",
          token: token
        }
      );

      var ca = token;
      var base64Url = ca.split('.')[1];
      var buff = new Buffer.from(base64Url, 'base64');
      var decodedValue = JSON.parse(buff.toString('ascii'));
      console.log(decodedValue);

    } else {
      res.status(404).json(
        {
          message: "auth failed"
        }
      );
    }
  })


});






router.delete('/:email', (req, res,next) => {
  
  const email = req.params.email;

  Student.remove({email: email})
  .exec()
  .then(
    res.status(200).json(
      {
        message: "student deleted"
      }
    )
  )
  .catch(err => {
      console.log(err);
  }
  );






});

router.get('/:email', (req, res,next) => {
  
  const email = req.params.email;

  Student.find({email: email})
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
    
    Student.find()
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




router.patch('/:email', (req, res, next) => {

  const email = req.params.email;

  const student = new Student();

  for(var attr in req.body)
  {
    student[attr]=req.body[attr];
  }

  Student.updateOne({email: email},{$set: student})
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