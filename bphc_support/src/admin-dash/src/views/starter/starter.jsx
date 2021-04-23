import React from "react";
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

import img1 from "../../assets/images/big/img1.jpg";
import img2 from "../../assets/images/big/img2.jpg";
import img3 from "../../assets/images/big/img3.jpg";

const Starter = () => {
  return (
    <div>
      <Row>
        <Col sm={6} lg={8}>
          <SalesSummary />
        </Col>
        <Col sm={6} lg={4}>
          <Feeds />
        </Col>{" "}
        <Row>
          <Col sm={3} lg={4}>
            <SalesSummary />
          </Col>
          <Col sm={3} lg={4}>
            <SalesSummary />
          </Col>
          <Col sm={3} lg={4}>
            <SalesSummary />
          </Col>
        </Row>
      </Row>
      <Row>
        <Col sm={12}>
          <Projects />
        </Col>
      </Row>
    </div>
  );
};

export default Starter;
