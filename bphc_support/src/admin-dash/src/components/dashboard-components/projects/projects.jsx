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

const Projects = () => {
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
              <th className="border-0">Feedbacks Recieved</th>
              <th className="border-0">Notices</th>
              <th className="border-0">Complaints Recieved</th>
              <th className="border-0">Bhawan</th>
            </tr>
          </thead>
          <tbody>
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
                    <h5 className="mb-0 font-16 font-medium">Karan Kaul</h5>
                    <span>karankaul@gmail.com</span>
                  </div>
                </div>
              </td>
              <td>1</td>

              <td>9</td>
              <td className="blue-grey-text  text-darken-4 font-medium">4</td>

              <td>Malaviya</td>
            </tr>
            <tr>
              <td>
                <div className="d-flex no-block align-items-center">
                  <div className="mr-2">
                    <img
                      src={img2}
                      alt="user"
                      className="rounded-circle"
                      width="45"
                    />
                  </div>
                  <div className="">
                    <h5 className="mb-0 font-16 font-medium">Pranay Piyush</h5>
                    <span>pranaypiyush@gmail.com</span>
                  </div>
                </div>
              </td>
              <td>0</td>

              <td>11</td>
              <td className="blue-grey-text  text-darken-4 font-medium">6</td>

              <td>Malaviya</td>
            </tr>
            <tr>
              <td>
                <div className="d-flex no-block align-items-center">
                  <div className="mr-2">
                    <img
                      src={img3}
                      alt="user"
                      className="rounded-circle"
                      width="45"
                    />
                  </div>
                  <div className="">
                    <h5 className="mb-0 font-16 font-medium">
                      Vedansh Srivastava
                    </h5>
                    <span>vedanshsrivastava@gmail.com</span>
                  </div>
                </div>
              </td>
              <td>2</td>

              <td>21</td>
              <td className="blue-grey-text  text-darken-4 font-medium">13</td>
              <td>Malaviya</td>
            </tr>
            <tr>
              <td>
                <div className="d-flex no-block align-items-center">
                  <div className="mr-2">
                    <img
                      src={img4}
                      alt="user"
                      className="rounded-circle"
                      width="45"
                    />
                  </div>
                  <div className="">
                    <h5 className="mb-0 font-16 font-medium">
                      Vatsyayan Binay
                    </h5>
                    <span>vatsu@gmail.com</span>
                  </div>
                </div>
              </td>
              <td>2</td>

              <td>15</td>
              <td className="blue-grey-text  text-darken-4 font-medium">8</td>
              <td>Malaviya</td>
            </tr>
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default Projects;
