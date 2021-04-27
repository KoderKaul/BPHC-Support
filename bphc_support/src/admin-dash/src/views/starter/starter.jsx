// import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
} from "reactstrap";
import {
  SalesSummary,
  Projects,
  Feeds,
} from "../../components/dashboard-components";
import axios from "axios";
import React, { useEffect, useState } from "react";

import img1 from "../../assets/images/big/img1.jpg";
import img2 from "../../assets/images/big/img2.jpg";
import img3 from "../../assets/images/big/img3.jpg";

const Starter = () => {
  const [admin, setAdmin] = useState([]);
  const [data, setData] = useState([]);
  const [users, setusers] = useState([]);
  const [problem, setProblem] = useState([]);
  const [notice, setNotice] = useState("");
  const [total, setTotal] = useState([0, 0, 0]);
  const [courier, setCourier] = useState([]);
  const setmyData = () => {
    admin.forEach((admin) => {
      axios
        .get(
          "https://bphcsupportapi.herokuapp.com/dashboard/getdashboard/" +
            admin.bhawan
        )
        .then((response) => {
          setTotal((prevtotal) => [
            prevtotal[0] + response.data.problem,
            prevtotal[1] + response.data.notice,
            prevtotal[2] + response.data.courier,
          ]);
          setData((datas) => [...datas, response.data]); // admin.map krke sare admin mil jaenge
        })
        .catch((err) => {
          console.log(err.message);
        });
      axios
        .get(
          "https://bphcsupportapi.herokuapp.com/problem/admin/" + admin.bhawan,
          {
            headers: {
              authorization:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhaWtpYUBoeWRlcmFiYWQuYml0cy1waWxhbmkuYWMuaW4iLCJpYXQiOjE2MTkxOTU4NjAsImV4cCI6MTYyMTc4Nzg2MH0.KCnUwt61hxIuLL0yd-0U--68mkHwq4miP39rd46yK-k",
            },
          }
        )
        .then((response) => {
          //   console.log(response.data);
          setProblem((datas) => [...datas, response.data.length]); // admin.map krke sare admin mil jaenge
        })
        .catch((err) => {
          console.log(err.message);
        });
      axios
        .get(
          "https://bphcsupportapi.herokuapp.com/courier/admin/" + admin.bhawan,
          {
            headers: {
              authorization:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhaWtpYUBoeWRlcmFiYWQuYml0cy1waWxhbmkuYWMuaW4iLCJpYXQiOjE2MTkxOTU4NjAsImV4cCI6MTYyMTc4Nzg2MH0.KCnUwt61hxIuLL0yd-0U--68mkHwq4miP39rd46yK-k",
            },
          }
        )
        .then((response) => {
          setCourier((datas) => [...datas, response.data.length]); // admin.map krke sare admin mil jaenge
        })
        .catch((err) => {
          console.log(err.message);
        });
    });
  };
  const getDashboardData = () => {
    axios
      .get("https://bphcsupportapi.herokuapp.com/dashboard/sidebar")
      .then((response) => {
        setusers(response.data); //.loggedIn i.e active, .signedUp
      });
    axios
      .get("https://bphcsupportapi.herokuapp.com/notice")
      .then((response) => {
        setNotice(response.data.length);
      });
    axios.get("https://bphcsupportapi.herokuapp.com/admin").then((response) => {
      setAdmin(response.data); // admin.map krke sare admin mil jaenge
    });
  };
  useEffect(() => {
    getDashboardData();
  }, []);
  useEffect(() => {
    setmyData();
  }, [admin]);
  return (
    <div>
      <Row>
        <Col sm={6} lg={8}>
          <SalesSummary number="1" />
        </Col>
        <Col sm={6} lg={4}>
          <Feeds users={users} data={data} total={total} />
        </Col>
      </Row>
      <Row>
        <Col sm={4} lg={4}>
          <SalesSummary number="2" />
        </Col>
        <Col sm={4} lg={4}>
          <SalesSummary number="3" />
        </Col>
        <Col sm={4} lg={4}>
          <SalesSummary number="4" />
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <Projects
            admin={admin}
            courier={courier}
            notice={notice}
            problem={problem}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Starter;
