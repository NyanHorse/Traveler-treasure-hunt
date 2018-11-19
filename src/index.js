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
      time: null,
    };
  }

  updateInput(e) {
    this.setState({
      input: e.target.value,
      time: new Date()
    });
  }

  addData(e) {
    let currentTime = new Date().toString();
    this.setState({
      task: true,
      email: this.state.input,
      time: currentTime
    });
     fetch("http://localhost:3000/api/v1/game/players", {
      method: 'POST',
      body: JSON.stringify({ 'email': this.state.email, 'time': this.state.time }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => {
      this.setState({
        error: true
      })
    })    
  }

  render() {
    // let date = new Date();
    // let dateName = "date.getHours() + ":" + date.getMinutes();
    //  console.log(dateName);
    //console.log("Game has started at", this.state.time);

    if (this.state.task) {
      return <TaskOne />;
    } else {
      return (
        <div>
          <h1>Traveler Treasure Hunt</h1>
          <div className="paper">
          <p>
            This treasure hunt is going to take you on a journey around
            Barcelona's most spectacular places! The goal is to visit all places
            and fulfill all tasks in the shortest amount of time. Enter your
            email address and press “start” when you're ready. Once you do so,
            your current location and task will appear. 
            Give me attention or face the wrath of my claws shove bum in owner's face like camera lens or meowwww. Claw at curtains stretch and yawn nibble on tuna ignore human bite human hand sleep in the bathroom sink stare at ceiling light and stick butt in face, and small kitty warm kitty little balls of fur. Jump launch 
          </p></div>
          <div>
            <input
              type="email"
              placeholder=" Enter email here"
              required
              onChange={e => this.updateInput(e)}
            />
          </div>
          <br></br>
          <div>
            <button className="button" onClick={e => this.addData(e)}>START</button>
          </div>
        </div>
      );
    }
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
