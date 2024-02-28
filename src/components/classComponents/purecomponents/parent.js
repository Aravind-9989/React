import { Component } from "react";
import Child from "./child"; // Assuming Child.js is in the same directory

class Purecomponents extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  HandleCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  render() {
    console.log("Parent render");
    return (
      <>
        <h3>Parent componenet</h3>
        <button onClick={this.HandleCount}>click to change the state </button>
        <Child />
      </>
    );
  }
}
export default Purecomponents;
