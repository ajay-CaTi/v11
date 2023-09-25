import React, { Component } from "react";
import UserClass from "./UserClass";
import User from "./User";

class About extends Component {
  constructor() {
    super();
    // console.log("Parent constructor");
  }

  componentDidMount() {
    // console.log("parent CMD");
  }

  render() {
    // console.log("Parent render ");
    return (
      <div>
        <h1>About</h1>
        <hr />
        <User />
        {/* <UserClass name={"Akshay sir"} /> */}
      </div>
    );
  }
}

export default About;
