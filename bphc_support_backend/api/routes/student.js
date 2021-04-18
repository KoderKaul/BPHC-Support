const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const jwt_token = require("jsonwebtoken");
const { check } = require("express-validator");

const Student = require("../models/student");

router.post(
  "/signup",
  [check("email").isEmail().normalizeEmail()],
  (req, res, next) => {
    const email = req.body.email;
    Student.find({ email: email })
      .exec()
      .then((docs) => {
        if (docs.length == 0) {
          const student = new Student();

          student["_id"] = new mongoose.Types.ObjectId();
          for (var attr in req.body) {
            student[attr] = req.body[attr];
          }

          student
            .save()
            .then((result) => {
              console.log(result);
            })
            .catch((err) => {
              console.log(err);
            });

          const token = jwt_token.sign(
            {
              email: email,
            },
            "secret",
            {
              expiresIn: "2h",
            }
          );

          res.status(201).json({
            message: "handling post requests",
            createdStudent: student,
            token: token,
          });
        } else {
          res.status(404).json({
            message: "you are already signed in",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
);

router.post(
  "/login",
  [check("email").isEmail().normalizeEmail()],
  (req, res, next) => {
    const email = req.body.email;

    Student.find({ email: email })
      .exec()
      .then((doc) => {
        if (doc.length > 0) {
          const token = jwt_token.sign(
            {
              email: email,
            },
            "secret",
            {
              expiresIn: "2h",
            }
          );

          res.status(200).json({
            message: "Auth success",
            token: token,
          });
        } else {
          res.status(404).json({
            message: "auth failed",
          });
        }
      });
  }
);
router.delete("/:email", (req, res, next) => {
  const email = req.params.email;

  Student.remove({ email: email })
    .exec()
    .then(
      res.status(200).json({
        message: "student deleted",
      })
    )
    .catch((err) => {
      console.log(err);
    });
});

router.get("/:email", (req, res, next) => {
  const email = req.params.email;

  Student.find({ email: email })
    .exec()
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/", (req, res, next) => {
  Student.find()
    .exec()
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.patch("/:email", (req, res, next) => {
  const email = req.params.email;

  const student = new Student();

  for (var attr in req.body) {
    student[attr] = req.body[attr];
  }

  Student.updateOne({ email: email }, { $set: student })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
