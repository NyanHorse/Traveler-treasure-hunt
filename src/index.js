import React from "react";
import ReactDOM from "react-dom";
require("./style.css");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      error: false
    };
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
