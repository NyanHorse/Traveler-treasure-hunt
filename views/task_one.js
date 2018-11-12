import React from "react";
import ReactDOM from "react-dom";
import TaskTwo from "../views/task_two";

class TaskOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      poi: "",
      details: "",
      question: null,
      lat: "",
      lng: ""
    };
  }
  // componentDidMount() {
  //   fetch("http://localhost:3000/api/v1/game/locations")
  //     .then(res => {})
  //     .catch(error => {
  //       this.setState({ error: true });
  //     });
  // }
  getTasks() {
    fetch("/api/v1/game/tasks")
    .then(res => {

    })
    .catch(error => {
      this.setState({ error: true });
    });
  }

  render() {
    let error = null;
    if (this.state.error) {
      error = <h2>error</h2>;
    }
    return (
      <div>
        <h3>this is task one</h3>
        <div id="maphere" />
        <button onClick={}>I'm here</button>
        <div id="task">
          <p>question</p>
          <button className="options">Option 1</button>
          <button className="options">Option 1</button>
          <button className="options">Option 1</button>
        </div>
        {error}
      </div>
    );
  }
}
export default TaskOne;
