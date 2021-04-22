let chai = require("chai");
var mocha = require("mocha");
let chaiHttp = require("chai-http");
var should = require("chai").should();
let server = require("../app");

const { assert } = require("chai");
const { json } = require("body-parser");
const { token } = require("morgan");

chai.should();

chai.use(chaiHttp);

//********************************/
//*************STUDENT.js******* */
//****************************** */

//signup with non existing email this runs only once because it save the email after hitting
describe("posting the  /signup", function () {
  it("checking the status of student signup", function (done) {
    const task = {
      email: "f20180484@hyderabad.bits-pilani.ac.in",
    };

    chai
      .request(server)
      .post("/student/signup") //post request-2
      .send(task)
      .end((err, res) => {
        res.should.have.status(201);

        done();
      });
  });
});
describe("Testing Student.js API\n", function () {
  //signup with already existing email in student
  describe("posting the  /signup", function () {
    it("signup with already existing email", function (done) {
      const task = {
        email: "f20180305@hyderabad.bits-pilani.ac.in",
      };

      chai
        .request(server)
        .post("/student/signup") //post request -1
        .send(task)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
  //   deleting the existing email
  describe("delete the  /:email", function () {
    it("deleting credentials", function (done) {
      const em = "f20180484@hyderabad.bits-pilani.ac.in";

      chai
        .request(server)
        .delete("/student/" + em) //post request-2
        .end((err, res) => {
          res.should.have.status(200);

          done();
        });
    });
  });

  //login using with existing email
  describe("post /login", function () {
    it("checking the student login status", function (done) {
      const task = {
        email: "f20180305@hyderabad.bits-pilani.ac.in",
      };

      chai
        .request(server)
        .post("/student/login") //post request-3
        .send(task)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
  //login with non existing email
  describe("post /login", function () {
    it("checking the student login status for unregistered student", function (done) {
      const task = {
        email: "f20180441@hyderabad.bits-pilani.ac.in",
      };

      chai
        .request(server)
        .post("/student/login") //post request-4
        .send(task)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
  //hitting get route in "/"
  describe("get /", function () {
    it("gets student list", function (done) {
      chai
        .request(server)
        .get("/student/")
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
  //get route of specific existing email
  describe("get /:email", function () {
    it("Get route of specific student details", function (done) {
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

  //patch of specific existing email with correct token
  describe("patch/:email", function () {
    it("patch the specific student route", function (done) {
      const em = "f20180425@hyderabad.bits-pilani.ac.in";
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1qdWFyYTBAdmltZW8uY29tIiwiaWF0IjoxNjE5MDc5MTA5LCJleHAiOjE2MzYzNTkxMDl9.JvIz0xQexomd6zjm2m5qJCFVb8e051aRge1kzKXGG20";

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
  //patch the existing email with incorrect token
  describe("patch/:email", function () {
    it("patch the specific student route with incorrect token", function (done) {
      const em = "f20180425@hyderabad.bits-pilani.ac.in";
      const token =
        "sInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImYyMDE4MDQyNUBoeWRlcmFiYWQuYml0cy1waWxhbmkuYWMuaW4iLCJpYXQiOjE2MTkwMjgyMDksImV4cCI6MTYxOTExNDYwOX0.X1hH3QxFuxWYEN3GhOU41hYiseu34L_o-q4yiIRnlvQ";

      chai
        .request(server)

        .patch("/student/" + em)
        .set("Authorization", token)
        .end((err, res) => {
          res.should.have.status(401);
          done();
        });
    });
  });
});

//************************************** */
//************8*NOTICE.JS***********/
//****************************************** */

describe("Testing notice.js API\n", function () {
  // posting th notice with corect token
  describe("****posting the  /", function () {
    it("adding notice", function (done) {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1qdWFyYTBAdmltZW8uY29tIiwiaWF0IjoxNjE5MDc5MTA5LCJleHAiOjE2MzYzNTkxMDl9.JvIz0xQexomd6zjm2m5qJCFVb8e051aRge1kzKXGG20";
      chai
        .request(server)
        .post("/notice/") //post request in problem -1
        .set("Authorization", token)
        .end((err, res) => {
          res.should.have.status(201);
          console.log(res.data);
          done();
        });
    });
  });
  //posting the notice with incorrect token
  describe("posting the  /", function () {
    it("adding notice from unauthorised", function (done) {
      const token =
        "sInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImYyMDE4MDQyNUBoeWRlcmFiYWQuYml0cy1waWxhbmkuYWMuaW4iLCJpYXQiOjE2MTkwMjgyMDksImV4cCI6MTYxOTExNDYwOX0.X1hH3QxFuxWYEN3GhOU41hYiseu34L_o-q4yiIRnlvQ";
      chai
        .request(server)
        .post("/notice/") //post request in problem -1
        .set("Authorization", token)
        .end((err, res) => {
          res.should.have.status(401);
          done();
        });
    });
  });
  //getting route
  describe("get route  /user", function () {
    it("get notices", function (done) {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1qdWFyYTBAdmltZW8uY29tIiwiaWF0IjoxNjE5MDc5MTA5LCJleHAiOjE2MzYzNTkxMDl9.JvIz0xQexomd6zjm2m5qJCFVb8e051aRge1kzKXGG20";
      chai
        .request(server)
        .get("/notice/user") //get request in problem -1
        .set("Authorization", token)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  //get route for '/'
  describe("get route  ", function () {
    it("get all notices", function (done) {
      chai
        .request(server)

        .get("/notice/") //get request in problem

        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});

//****************************** */
//********PROBLEM.JS********* */
//******************************8 */

describe("Testing Problem.js API\n", function () {
  // posting th problem with corect token
  describe("posting the  /", function () {
    it("post problems", function (done) {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1qdWFyYTBAdmltZW8uY29tIiwiaWF0IjoxNjE5MDc5MTA5LCJleHAiOjE2MzYzNTkxMDl9.JvIz0xQexomd6zjm2m5qJCFVb8e051aRge1kzKXGG20";
      chai
        .request(server)
        .post("/problem/") //post request in problem -1
        .set("Authorization", token)
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });
  });
  //posting the problem with incorrect token
  describe("posting the  /", function () {
    it("posting problems from unregistered account", function (done) {
      const token =
        "ciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QxQHRlc3QuY29tIiwiaWF0IjoxNjE2NDgyMzM5LCJleHAiOjE2MTkwNzQzMzl9.h7f_56PXaBhNJ0FYn4_7zkJI3FIE8qUa1HwhH3ttQIo";
      chai
        .request(server)
        .post("/problem/") //post request in problem -1
        .set("Authorization", token)
        .end((err, res) => {
          res.should.have.status(401);
          done();
        });
    });
  });
  //getting route with existing email with correct token
  describe("get route  /user/:email", function () {
    it("checking the status of problems", function (done) {
      const email1 = "f20180305@hyderabad.bits-pilani.ac.in";
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1qdWFyYTBAdmltZW8uY29tIiwiaWF0IjoxNjE5MDc5MTA5LCJleHAiOjE2MzYzNTkxMDl9.JvIz0xQexomd6zjm2m5qJCFVb8e051aRge1kzKXGG20";
      chai
        .request(server)
        .get("/problem/user/" + email1) //get request in problem -1
        .set("Authorization", token)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
  //get request with non existing email with incorrect token
  describe("get route  /user/:email", function () {
    it("unregistered user problem list", function (done) {
      const email1 = "f20180000@hyderabad.bits-pilani.ac.in";
      const token =
        "yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QxQHRlc3QuY29tIiwiaWF0IjoxNjE2NDgyMzM5LCJleHAiOjE2MTkwNzQzMzl9.h7f_56PXaBhNJ0FYn4_7zkJI3FIE8qUa1HwhH3ttQIo";
      chai
        .request(server)
        .get("/problem/user/" + email1) //get request in problem -1
        .set("Authorization", token)
        .end((err, res) => {
          res.should.have.status(401);
          done();
        });
    });
  });
  //getting request with existing bhawan
  describe("get route  /user/:bhawan", function () {
    it("get problem list for a bhawan", function (done) {
      const bhawan1 = "ram";
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1qdWFyYTBAdmltZW8uY29tIiwiaWF0IjoxNjE5MDc5MTA5LCJleHAiOjE2MzYzNTkxMDl9.JvIz0xQexomd6zjm2m5qJCFVb8e051aRge1kzKXGG20";
      chai
        .request(server)
        .get("/problem/user/" + bhawan1) //get request in problem -1
        .set("Authorization", token)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
  //doubt here with incorrect bhawan it is not giving error
  describe("get route  /user/:bhawan", function () {
    it("problem list from non existing bhawans", function (done) {
      const bhawan1 = "r";
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXCJ9.eyJlbWFpbCI6ImYyMDE4MDQyNUBoeWRlcmFiYWQuYml0cy1waWxhbmkuYWMuaW4iLCJpYXQiOjE2MTkwMjgyMDksImV4cCI6MTYxOTExNDYwOX0.X1hH3QxFuxWYEN3GhOU41hYiseu34L_o-q4yiIRnlvQ";
      chai
        .request(server)

        .get("/problem/user/" + bhawan1) //get request in problem -1
        .set("Authorization", token)
        .end((err, res) => {
          res.should.have.status(401);
          done();
        });
    });
  });
  //get route for '/'
  describe("get route  ", function () {
    it("checking the status of problems", function (done) {
      chai
        .request(server)

        .get("/problem/") //get request in problem

        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});

//******************** */
//***DASHBOARD******* */
//******************** */

describe("Testing Dashboard.js API\n", function () {
  // posting th dashboard
  describe("posting the  /", function () {
    it("checking the status of dashboard loggedin", function (done) {
      chai
        .request(server)
        .post("/dashboard/loggedin") //post request in problem -1

        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe("posting the  /", function () {
    it("checking the status of dashboard loggedout", function (done) {
      chai
        .request(server)
        .post("/dashboard/loggedout") //post request in problem -1

        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
  describe("posting the  /", function () {
    it("checking the status of dashboard signedup", function (done) {
      chai
        .request(server)
        .post("/dashboard/signedup") //post request in problem -1

        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
  describe("posting the  /", function () {
    it("checking the status of dashboard", function (done) {
      chai
        .request(server)
        .get("/dashboard/sidebar") //post request in problem -1

        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});

//**************** */
//****courier.js ***/
//******************/

describe("Testing Courier.js API\n", function () {
  describe("posting the  /", function () {
    it("adding couriers", function (done) {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1qdWFyYTBAdmltZW8uY29tIiwiaWF0IjoxNjE5MDc5MTA5LCJleHAiOjE2MzYzNTkxMDl9.JvIz0xQexomd6zjm2m5qJCFVb8e051aRge1kzKXGG20";
      chai
        .request(server)
        .post("/courier/") //post request in problem -1
        .set("Authorization", token)
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });
  });
  //get route in courier
  describe("get route  /user/:email", function () {
    it("checking the status of couriers", function (done) {
      const email1 = "f20180305@hyderabad.bits-pilani.ac.in";
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1qdWFyYTBAdmltZW8uY29tIiwiaWF0IjoxNjE5MDc5MTA5LCJleHAiOjE2MzYzNTkxMDl9.JvIz0xQexomd6zjm2m5qJCFVb8e051aRge1kzKXGG20";
      chai
        .request(server)
        .get("/courier/user/" + email1) //get request in problem -1
        .set("Authorization", token)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
  //get route "/ " in courier
  describe("get route  ", function () {
    it("checking the status of couriers", function (done) {
      chai
        .request(server)

        .get("/courier/") //get request in problem

        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});

//**************************************** */
//***********ADMIN .js******************* */
//**************************************** */

describe("Testing Admin.js API\n", function () {
  //signup with already existing email in Admin
  describe("posting the  /signup", function () {
    it("checking the status of already signed up admin", function (done) {
      const task = {
        email: "saikia@hyderabad.bits-pilani.ac.in",
      };

      chai
        .request(server)
        .post("/admin/signup") //post request -1
        .send(task)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
  //signup with non existing email this runs
  describe("posting the  /signup", function () {
    it("checking the status of student signup", function (done) {
      const task = {
        email: "f20180484@hyderabad.bits-pilani.ac.in",
      };

      chai
        .request(server)
        .post("/admin/signup") //post request-2
        .send(task)
        .end((err, res) => {
          res.should.have.status(201);

          done();
        });
    });
  });
  //deleting the existing email
  describe("delete the  /:email", function () {
    it("checking the status of student signup", function (done) {
      const em = "f20180484@hyderabad.bits-pilani.ac.in";

      chai
        .request(server)
        .delete("/admin/" + em) //post request-2
        .end((err, res) => {
          res.should.have.status(200);

          done();
        });
    });
  });

  //login using with existing email
  describe("post /login", function () {
    it("login admin", function (done) {
      const task = {
        email: "saikia@hyderabad.bits-pilani.ac.in",
      };

      chai
        .request(server)
        .post("/admin/login") //post request-3
        .send(task)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
  //login with non existing email
  describe("post /login", function () {
    it("login try with student creds", function (done) {
      const task = {
        email: "f20180441@hyderabad.bits-pilani.ac.in",
      };

      chai
        .request(server)
        .post("/admin/login") //post request-4
        .send(task)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
  //hitting get route in "/"
  describe("get /", function () {
    it("get admin list", function (done) {
      chai
        .request(server)
        .get("/admin/")
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
  //get route of specific existing email
  describe("get /:email", function () {
    it("get specific admin creds", function (done) {
      const em = "saikia@hyderabad.bits-pilani.ac.in";
      chai
        .request(server)
        .get("/admin/" + em)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
  //get route of specific non existing email
  describe("get /:email", function () {
    it("get credentials with invalid email", function (done) {
      const em1 = "f20180401@hyderabad.bits-pilani.ac.in";
      chai
        .request(server)
        .get("/admin/" + em1)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  //patch of specific existing email with correct token
  describe("patch/:email", function () {
    it("patch the specific admin route", function (done) {
      const em = "saikia@hyderabad.bits-pilani.ac.in";
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhaWtpYUBoeWRlcmFiYWQuYml0cy1waWxhbmkuYWMuaW4iLCJpYXQiOjE2MTkwMzI1OTEsImV4cCI6MTYxOTExODk5MX0.D4Ph3C4SdzaEKOaunJA2D54cIzQC1yEuv8J2q_djSNU";

      chai
        .request(server)

        .patch("/admin/" + em)
        .set("Authorization", token)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
  //patch the existing email with incorrect token
  describe("patch/:email", function () {
    it("patch the specific admin route", function (done) {
      const em = "saikia@hyderabad.bits-pilani.ac.in";
      const token =
        "sInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImYyMDE4MDQyNUBoeWRlcmFiYWQuYml0cy1waWxhbmkuYWMuaW4iLCJpYXQiOjE2MTkwMjgyMDksImV4cCI6MTYxOTExNDYwOX0.X1hH3QxFuxWYEN3GhOU41hYiseu34L_o-q4yiIRnlvQ";

      chai
        .request(server)

        .patch("/admin/" + em)
        .set("Authorization", token)
        .end((err, res) => {
          res.should.have.status(401);
          done();
        });
    });
  });
});
