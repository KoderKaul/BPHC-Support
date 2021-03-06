import React from "react";

import img1 from "../../../assets/images/users/1.jpg";
import img2 from "../../../assets/images/users/2.jpg";
import img3 from "../../../assets/images/users/3.jpg";
import img4 from "../../../assets/images/users/4.jpg";

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Input,
  Table,
} from "reactstrap";

const Projects = ({ admin, courier, notice, problem }) => {
  return (
    /*--------------------------------------------------------------------------------*/
    /* Used In Dashboard-4 [General]                                                  */
    /*--------------------------------------------------------------------------------*/

    <Card>
      <CardBody>
        <div className="d-flex align-items-center">
          <div>
            <CardTitle>Statistics of the Month</CardTitle>
            <CardSubtitle>Overview of Latest Month</CardSubtitle>
          </div>
          <div className="ml-auto d-flex no-block align-items-center">
            <div className="dl">
              <Input type="select" className="custom-select">
                <option value="0">Monthly</option>
                <option value="1">Daily</option>
                <option value="2">Weekly</option>
                <option value="3">Yearly</option>
              </Input>
            </div>
          </div>
        </div>
        <Table className="no-wrap v-middle" responsive>
          <thead>
            <tr className="border-0">
              <th className="border-0">Managers</th>
              <th className="border-0">Couriers</th>
              <th className="border-0">Notices</th>
              <th className="border-0">Complaints</th>
              <th className="border-0">Bhawan</th>
            </tr>
          </thead>
          <tbody>
            {admin.map((admin, index) => {
              return (
                <tr>
                  <td>
                    <div className="d-flex no-block align-items-center">
                      <div className="mr-2">
                        <img
                          src={img1}
                          alt="user"
                          className="rounded-circle"
                          width="45"
                        />
                      </div>
                      <div className="">
                        <h5 className="mb-0 font-16 font-medium">
                          {admin.name}
                        </h5>
                        <span>{admin.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>{courier[index]}</td>

                  <td>{notice}</td>
                  <td className="blue-grey-text  text-darken-4 font-medium">
                    {problem[index]}
                  </td>

                  <td>{admin.bhawan}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default Projects;
