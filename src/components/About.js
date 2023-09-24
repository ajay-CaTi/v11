import React, { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor() {
    super();
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("parent CMD");
  }

  render() {
    console.log("Parent render ");
    return (
      <div>
        <h1>About</h1>
        <hr />
        <UserClass name={"Akshay sir"} />
        <UserClass name={"Ajay"} />
      </div>
    );
  }
}

export default About;
