import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

const Feeds = ({ users, data, total }) => {
  console.log(users);
  return (
    <Card>
      <CardBody>
        <CardTitle>Feeds</CardTitle>
        <div className="feed-widget">
          <ul className="list-style-none feed-body m-0 pb-3">
            <li className="feed-item">
              <div className="feed-icon bg-info">
                <i className="far fa-bell"></i>
              </div>{" "}
              You have {} pending complaints.{" "}
              <span className="ml-auto font-12 text-muted">Just Now</span>
            </li>
            <li className="feed-item">
              <div className="feed-icon bg-success">
                <i className="ti-server"></i>
              </div>{" "}
              {total[1]} problems received last week.
              <span className="ml-auto font-12 text-muted">2 Hours ago</span>
            </li>
            <li className="feed-item">
              <div className="feed-icon bg-warning">
                <i className="ti-shopping-cart"></i>
              </div>
              {/* notice me problem number dal rha hu */}
              {total[0]} new notices posted.
              <span className="ml-auto font-12 text-muted">3 Hours ago</span>
            </li>
            <li className="feed-item">
              <div className="feed-icon bg-danger">
                <i className="ti-user"></i>
              </div>{" "}
              {users[0]?.loggedIn} active users.
              <span className="ml-auto font-12 text-muted">2 Hours ago</span>
            </li>
          </ul>
        </div>
      </CardBody>
    </Card>
  );
};

export default Feeds;
