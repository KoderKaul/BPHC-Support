import express from "express";
const app = express();
import morgan from "morgan";
import { urlencoded, json } from "body-parser";
import { connect } from "mongoose";


app.use(morgan('dev'));
app.use(urlencoded({extended: true}));
app.use(json());

connect(
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



import studentRoutes from "./api/routes/student";
import adminRoutes from "./api/routes/admin";
import problemRoutes from "./api/routes/problem";

app.use('/student',studentRoutes);
app.use('/admin',adminRoutes);
app.use('/problem',problemRoutes);











export default app;
