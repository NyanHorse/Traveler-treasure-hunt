import React from "react";
import ReactDOM from "react-dom";
import TaskOne from "../views/task_one";
require("./style.css");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      error: false,
      task: false,
      email: "",
      success: false
    };
  }

  updateInput(e) {
    e.preventDefault();
    this.setState({
      input: e.target.value
    });
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/game/players")
      .then(res => res.json())
      .catch(error => {
        this.setState({ error: true });
      });
  }

  addEmail(e) {
    e.preventDefault();
    fetch("http://localhost:3000/api/v1/game/players", {
      method: "POST",
      body: JSON.stringify({ email: this.state.input }),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => {
        this.setState({ task: true, email: this.state.input });
      })
      .catch(error => {
        this.setState({ error: true });
      });
  }

  startTime() {
    fetch("http://localhost:3000/api/v1/game/players", {
      method: "PATCH",
      body: JSON.stringify({
        email: this.state.email
      }),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => this.setState({ success: true }))
      .catch(error => {
        this.setState({ error: true });
      });
  }

  render() {
    let error = null;
    if (this.state.error) {
      error = <h2>error</h2>;
    }

    if (this.state.task) {
      return <TaskOne />;
    } else {
      return (
        <div>
          <h1>Traveler treasure hunt</h1>
          <p>
            Game rules lalala Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Vitae justo eget magna fermentum iaculis. Nunc sed id semper
            risus in hendrerit. Dui sapien eget mi proin. Arcu risus quis varius
            quam. Id faucibus nisl tincidunt eget nullam non. Nisl condimentum
            id venenatis a condimentum. Malesuada pellentesque elit eget gravida
            cum sociis natoque. Adipiscing elit pellentesque habitant morbi
            tristique senectus. Aliquam vestibulum morbi blandit cursus risus.
            Ultrices vitae.
          </p>
          <form>
            <label>
              <input
                type="email"
                onChange={e => this.updateInput(e)}
                placeholder="enter email here"
                required
              />
            </label>
            <div>
              <button
                onClick={e => {
                  this.addEmail(e);
                  this.startTime();
                }}
              >
                start
              </button>
            </div>
          </form>
          <div>{error}</div>
        </div>
      );
    }
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
