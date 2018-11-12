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
      question: "",
      lat: "",
      lng: "",
      op1: "",
      op2: "",
      op3: ""
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/api/v1/game/locations")
      .then(res => {})
      .catch(error => {
        this.setState({ error: true });
      });
  }
  getTasks() {
    fetch("/api/v1/game/tasks", {
      method: "GET"
    })
      .then(res => res.json())
      .then(json => {
        this.setState({
          poi: json.body.poi,
          details: json.body.details,
          question: json.body.question,
          op1: json.body.answer_one,
          op2: json.body.answer_two,
          op3: json.body.answer_three
        });
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
        <button>I'm here</button>
        <div id="task">
          <p>{this.state.question}</p>
        </div>
        {error}
        <button>{this.state.op1}</button>
        <button>{this.state.op2}</button>
        <button>{this.state.op3}</button>
      </div>
    );
  }
}
export default TaskOne;
