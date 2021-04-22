const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const { check } = require('express-validator');
const sanitizer = require('sanitize')();

const Admin = require("../models/admin");
const checkAuth = require('../middleware/check-auth');

router.post('/signup',[check('email').isEmail().normalizeEmail()], (req, res, next) => {

  const email = sanitizer.value(req.body.email,String);

    Admin.find({email: email})
    .exec()
    .then(docs =>
        {
            if(docs.length==0)
            {
                const admin = new Admin();

                admin["email"]="";
                admin["name"]="";
                admin["bhawan"]="";
                admin["adminImage"]="";
                admin["password"]="";

                admin["_id"]=new mongoose.Types.ObjectId();
                for(var attr in req.body)
                {
                  admin[attr]=req.body[attr];
                }
            
                admin.save()
                .then(result =>{
                    res.status(201).json({
                    message: "handling post requests",
                    createdAdmin: result
                });
                })
                .catch(err => {
                    console.log(err);
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


router.post('/login', [check('email').isEmail().normalizeEmail()],(req, res, next) => {
  
  const email = sanitizer.value(req.body.email,String);

  Admin.find({email: email})
  .exec()
  .then(doc =>{
    if(doc.length>0)
    {

      const token = jwt.sign(
        {
          email: email
        }
        ,"secret",
        {
          expiresIn: "2h"
        }
      );

      res.status(200).json(
        {
          message: "Auth success",
          token: token
        }
      );


    } else {
      res.status(404).json(
        {
          message: "auth failed"
        }
      );
    }
  })
});

router.post('/login/pwd', [check('email').isEmail().normalizeEmail()],(req, res, next) => {
  
  const email = sanitizer.value(req.body.email,String);
  const password = sanitizer.value(req.body.password,String);

  Admin.find({email: email,password: password})
  .exec()
  .then(docs =>{
    if(docs.length>0)
    {

      const tokens = jwt.sign({email: email},"secret",{expiresIn: "2h"});res.status(200).json(
        {message: "Auth success",token: tokens});

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

  Admin.remove({email: email})
  .exec()
  .then(
    res.status(200).json(
      {
        message: "admin deleted"
      }
    )
  )
  .catch(err => {
      console.log(err);
  }
  );






});

router.get('/:email', (req, res,next) => {
  
  const email = sanitizer.value(req.params.email,String);

  Admin.find({email: email})
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
    
    Admin.find()
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




router.patch('/:email', checkAuth, (req, res, next) => {

  const email = req.params.email;

  const admin = new Admin();

  for(var attr in req.body)
  {
    admin[attr]=req.body[attr];
  }

  Admin.updateOne({email: email},{$set: admin})
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