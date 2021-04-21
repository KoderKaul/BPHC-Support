let chai = require("chai");
var mocha = require("mocha");
let chaiHttp = require("chai-http");
var should = require("chai").should();
let server = require("./app");

const { assert } = require("chai");
const { json } = require("body-parser");
const { token } = require("morgan");

chai.should();

chai.use(chaiHttp);

describe("Testing student routes in API", function () {
  describe("post /signup", function () {
    it("checking the status of student signup", function (done) {
      const task = {
        email: "f20180305@hyderabad.bits-pilani.ac.in",
      };

      chai
        .request(server)
        .post("/student/signup")
        .send(task)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
  describe("post /login", function () {
    it("ichecking the student login status", function (done) {
      const task = {
        email: "f20180305@hyderabad.bits-pilani.ac.in",
      };

      chai
        .request(server)
        .post("/student/login")
        .send(task)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
  describe("GET /", function () {
    it("get student route /", function (done) {
      chai
        .request(server)
        .get("/student/")
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
  describe("get /:email", function () {
    it("Get route of specific student", function (done) {
      const em = "f20180305@hyderabad.bits-pilani.ac.in";
      chai
        .request(server)
        .get("/student/" + em)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
  describe("patch/:email", function () {
    it("patch the specific student route", function (done) {
      const em = "f20180305@hyderabad.bits-pilani.ac.in";
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImYyMDE4MDMwNUBoeWRlcmFiYWQuYml0cy1waWxhbmkuYWMuaW4iLCJpYXQiOjE2MTkwMTY5ODQsImV4cCI6MTYxOTAyNDE4NH0.PdFKAr6aZooDeXXaTVxx82GieH9nIlTkQFbO9s6ZnWs";

      chai
        .request(server)

        .patch("/student/" + em)
        .set("Authorization", token)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});
