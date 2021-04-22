const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt_token = require("jsonwebtoken");
const { check } = require('express-validator');
const sanitizer = require('sanitize')();

const Student = require("../models/student");
const Admin = require("../models/admin");
const Courier = require("../models/courier");
const Dashboard = require("../models/dashboard");
const Notice = require("../models/notice");
const Problem = require("../models/problem");

const checkAuth = require('../middleware/check-auth');

router.post('/loggedin', (req,res,next) => {

    Dashboard.find()
    .exec()
    .then(doc=>{

        var loggedIn = doc[0].loggedIn;
        const dashboard = new Dashboard();
        dashboard["loggedIn"]=loggedIn+1;

        Dashboard.updateOne({loggedIn: loggedIn},{$set: dashboard})
        .exec()
        .then(result =>{
            res.status(200).json(result);
          })
          .catch(err => {
            console.log(err);
          }
          );
    })
    .catch(err => {
        console.log(err);
    }
    );

});


router.post('/loggedout', (req,res,next) => {

    Dashboard.find().exec().then(doc=>{
        var loggedIn = doc[0].loggedIn;
        const dashboards = new Dashboard();
        dashboards["loggedIn"]=loggedIn-1;

        Dashboard.updateOne({loggedIn: loggedIn},{$set: dashboards}).exec().then(result =>{res.status(200).json(result);}).catch(err => {console.log(err);});}).catch(err => {console.log(err);});});

router.post('/signedup', (req,res,next) => {

    Dashboard.find()
    .exec()
    .then(doc=>{
        console.log(doc);
        var signedUp = doc[0].signedUp;
        var dashboard = new Dashboard();
        dashboard["signedUp"]=signedUp+1;

        Dashboard.updateOne({signedUp: signedUp},{$set: dashboard})
        .exec()
        .then(result =>{
            res.status(200).json(result);
          })
          .catch(err => {
            console.log(err);
          }
          );
    })
    .catch(err => {
        console.log(err);
    }
    );

});

router.get('/sidebar',(req,res,next)=>{
    Dashboard.find()
    .exec()
    .then(doc=>{
        res.status(200).json(doc);
    })
    .catch(err => {
        console.log(err);
      }
      );
});


router.get('/getdashboard/:bhawan', (req,res,next)=>{
    
    const bhawan = sanitizer.value(req.params.bhawan,String);

    var num ={};
    var today = new Date();
    var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

    Problem.find({studentBhawan: bhawan, problemDate: {"$gte": ISODate(lastWeek)}})
    .exec()
    .then(result=>{
        num["problem"]=result.length;

        Notice.find({bhawan: bhawan, noticeDate: {"$gte": ISODate(lastWeek)}})
        .exec()
        .then(result1=>{
            num["notice"] = result1.length;

            Courier.find({bhawan: bhawan, courierDate: {"$gte": ISODate(lastWeek)}})
            .exec()
            .then(result2=>{
                num["courier"] = result2.length;
                res.status(200).json(num);
            })
            .catch(err => {
                console.log(err);
            }
            );

        })
        .catch(err => {
            console.log(err);
        }
        );


    })
    .catch(err => {
        console.log(err);
      }
      );
    
});







module.exports = router