import "./styles.css";
import React from "react";
import Football from "./Users";
import ConstructorLCM from "./Constructor";
import TodoList from "./TodoList";
import Demo from "./Demo";

export default class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Football isGoal={true} /> */}
        {/* <ConstructorLCM/>  */}
        {/* <TodoList /> */}
        <Demo />
      </div>
    );
  }
}
