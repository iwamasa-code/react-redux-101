import React, { Component } from "react";

//JSX記法
// class App extends Component {
//   render() {
//     return <div>Hello, world!</div>;
//   }
// }

//JS記法
class App extends Component {
  render() {
    return React.createElement("div", null, "Hello, world!!");
  }
}

export default App;
