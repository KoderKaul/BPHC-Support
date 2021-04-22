const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


app.use(morgan('dev'));
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

mongoose.connect(
    "mongodb+srv://vatsu:"
    +"vatsu"
    +"@cluster0.u46ll.mongodb.net/"
    +"vatsu"
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
const courierRoutes = require("./api/routes/courier");
const noticeRoutes = require("./api/routes/notice");
const dashboardRoutes = require("./api/routes/dashboard");

app.use('/student',studentRoutes);
app.use('/admin',adminRoutes);
app.use('/problem',problemRoutes);
app.use('/courier',courierRoutes);
app.use('/notice',noticeRoutes);
app.use('/dashboard',dashboardRoutes);












module.exports = app;
