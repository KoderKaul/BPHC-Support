import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Col, Row } from "reactstrap";
import { Line } from "react-chartjs-2";

//Line chart
let lineData1 = {
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  datasets: [
    {
      label: "Login",
      borderWidth: 1,
      backgroundColor: "rgba(94,114,228,.1)",
      borderColor: "rgb(94,114,228)",
      pointBorderColor: "rgb(94,114,228)",
      pointBackgroundColor: "rgb(94,114,228)",
      data: [0, 12, 6, 11, 12, 9, 18, 24, 37, 54, 44, 36],
    },
    {
      label: "Register",
      borderWidth: 1,
      backgroundColor: "rgba(79,195,247,.1)",
      borderColor: "rgb(79,195,247)",
      pointBorderColor: "rgb(79,195,247)",
      pointBackgroundColor: "rgb(79,195,247)",
      data: [0, 15, 11, 22, 8, 10, 25, 21, 30, 35, 40, 54],
    },
  ],
};
let lineData2 = {
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  datasets: [
    {
      label: "Complaints",
      borderWidth: 1,
      backgroundColor: "rgba(94,114,228,.1)",
      borderColor: "rgb(94,114,228)",
      pointBorderColor: "rgb(94,114,228)",
      pointBackgroundColor: "rgb(94,114,228)",
      data: [7, 12, 6, 11, 12, 9, 18, 13, 22, 4, 16, 9],
    },
  ],
};
let lineData3 = {
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  datasets: [
    {
      label: "Notices",
      borderWidth: 1,
      backgroundColor: "rgba(94,114,228,.1)",
      borderColor: "rgb(94,114,228)",
      pointBorderColor: "rgb(94,114,228)",
      pointBackgroundColor: "rgb(94,114,228)",
      data: [14, 12, 54, 46, 36, 33, 28, 24, 19, 23, 25, 33],
    },
  ],
};
let lineData4 = {
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  datasets: [
    {
      label: "Couriers",
      borderWidth: 1,
      backgroundColor: "rgba(94,114,228,.1)",
      borderColor: "rgb(94,114,228)",
      pointBorderColor: "rgb(94,114,228)",
      pointBackgroundColor: "rgb(94,114,228)",
      data: [17, 12, 26, 10, 5, 9, 18, 13, 22, 4, 16, 9],
    },
  ],
};

const SalesSummary = ({ number }) => {
  return (
    <Card>
      <CardBody>
        <div className="d-flex align-items-center">
          <div>
            <CardTitle>
              {number == 1
                ? "User Traffic"
                : number == 2
                ? "Received Complaints"
                : number == 3
                ? "Notices Posted"
                : "Couriers"}
            </CardTitle>
            <CardSubtitle>summary of the month</CardSubtitle>
          </div>
          <div className="ml-auto d-flex align-items-center">
            <ul className="list-inline font-12 dl mr-3 mb-0">
              {number == 1 ? (
                <div>
                  <li className="border-0 p-0 text-info list-inline-item">
                    <i className="fa fa-circle"></i> Registration
                  </li>
                  <li className="border-0 p-0 text-primary list-inline-item">
                    <i className="fa fa-circle"></i> Login
                  </li>
                </div>
              ) : number == 2 ? (
                <li className="border-0 p-0 text-info list-inline-item">
                  <i className="fa fa-circle"></i>Complaint
                </li>
              ) : number == 3 ? (
                <li className="border-0 p-0 text-info list-inline-item">
                  <i className="fa fa-circle"></i> Notices
                </li>
              ) : (
                <li className="border-0 p-0 text-info list-inline-item">
                  <i className="fa fa-circle"></i> Couriers
                </li>
              )}
            </ul>
          </div>
        </div>
        <Row>
          <Col lg="12">
            <div className="campaign ct-charts">
              <div
                className="chart-wrapper"
                style={{ width: "100%", margin: "0 auto", height: 250 }}
              >
                <Line
                  data={
                    number == 1
                      ? lineData1
                      : number == 2
                      ? lineData2
                      : number == 3
                      ? lineData3
                      : lineData4
                  }
                  options={{
                    maintainAspectRatio: false,
                    legend: {
                      display: false,
                      labels: { fontFamily: "Nunito Sans" },
                    },
                    scales: {
                      yAxes: [
                        {
                          stacked: true,
                          gridLines: { display: false },
                          ticks: { fontFamily: "Nunito Sans" },
                        },
                      ],
                      xAxes: [
                        {
                          gridLines: { display: false },
                          ticks: { fontFamily: "Nunito Sans" },
                        },
                      ],
                    },
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default SalesSummary;
