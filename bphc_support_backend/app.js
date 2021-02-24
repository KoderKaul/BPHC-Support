const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const mongoSanitize = require('express-mongo-sanitize');


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(mongoSanitize()); 

mongoose.connect(
    "mongodb+srv://vatsu:"
    +process.env.MONGO_ATLAS_PW
    +"@cluster0.u46ll.mongodb.net/"
    +process.env.MONGO_ATLAS_DB
    +"?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true  
    }
);

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
  });



const studentRoutes = require("./api/routes/student");
const adminRoutes = require("./api/routes/admin");
const problemRoutes = require("./api/routes/problem");

app.use('/student',studentRoutes);
app.use('/admin',adminRoutes);
app.use('/problem',problemRoutes);











module.exports = app;
