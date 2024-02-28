import React from "react";

class Child extends React.Component {
  render() {
    console.log("Child render");
    return (
      <div>
        <h3>Child Component</h3>
        <p>This is the child component.</p>
      </div>
    );
  }
}

export default Child;
