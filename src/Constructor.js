import React, { Component } from "react";

export default class ConstructorLCM extends Component {
  constructor() {
    super(); // is use to call parent constructor of component class
    console.log("constructor");
    console.log(Math.random() >= 0.5);
  }
  render() {
    console.log("render");
    return <div>{console.log("render1")}</div>;
  }
}
