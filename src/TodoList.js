// import {Component} from "react";
import React from "react";

const styles = {
  // color: "red",
  // fontSize: 20,
  // border: "solid 2px purple",
  width: 235,
  margin: 5
};

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputUser: " ",
      inputArray: []
    };
    this.takeInput = this.takeInput.bind(this);
    this.abc = this.abc.bind(this);
  }

  abc() {
    const inpValue = this.state.inputUser.split(",");
    this.setState({
      inputArray: inpValue
    });
  }

  takeInput(e) {
    this.setState({
      inputUser: e.target.value
    });
  }

  render() {
    const items = this.state.inputArray.map((a) => <li>{a}</li>);

    return (
      <div>
        <textarea
          placeholder="place items with commas"
          onChange={this.takeInput}
          value={this.state.inputUser}
          style={styles}
        />
        <br />
        <br />

        <button onClick={this.abc}>add list</button>

        <h1>{items}</h1>
      </div>
    );
  }
}
