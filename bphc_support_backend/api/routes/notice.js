const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const checkAuth = require("../middleware/check-auth");
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
    fileFilter: fileFilter
  });*/

const Notice = require("../models/notice");

router.post("/", checkAuth, (req, res, next) => {
  const notice = new Notice();

  notice["_id"] = new mongoose.Types.ObjectId();
  notice["noticeDate"] = new Date();

  for (var attr in req.body) {
    notice[attr] = req.body[attr];
  }

  notice
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });

  res.status(201).json({
    message: "handling post requests",
    creatednotice: notice,
  });
});

router.delete("/", (req, res, next) => {});
//We need to change it
router.get("/", (req, res, next) => {
  Notice.find()
    .exec()
    .then((doc) => {
      res.status(200).json(doc);
      console.log(doc);
    })
    .catch((err) => {
      console.log(err);
    });
});
router.get("/user", checkAuth, (req, res, next) => {
  Notice.find()
    .exec()
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => {
      console.log(err);
    });
});

/*router.get('/admin', checkAuth, (req, res,next) => {
  
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



});*/

module.exports = router;
