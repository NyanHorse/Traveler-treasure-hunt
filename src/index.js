import React from "react";
import ReactDOM from "react-dom";
import TaskOne from "../src/components/task_one";
require("./style.css");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      error: false,
      task: false,
      email: "",
      success: false,
      time: null
    };
  }

  updateInput(e) {
    this.setState({
      input: e.target.value
    });
  }

  addEmail(e) {
    let currentTime = new Date().toString();
    this.setState({
      task: true,
      email: this.state.input,
      time: currentTime
    });
  }

  render() {
    console.log("Game has started at", this.state.time);
    if (this.state.task) {
      return <TaskOne />;
    } else {
      return (
        <div>
          <h1>Traveler treasure hunt</h1>
          <p>
            This treasure hunt is going to take you on a journey around
            Barcelona's most spectacular places! The goal is to visit all places
            and fulfill all tasks in the shortest amount of time. Ener your
            email address and press “start” when you're ready. Once you do so,
            your current location and task will appear.
          </p>
          <div>
            <input
              type="email"
              placeholder="enter email here"
              required
              onChange={e => this.updateInput(e)}
            />
          </div>
          <div>
            <button onClick={e => this.addEmail(e)}>start</button>
          </div>
        </div>
      );
    }
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
