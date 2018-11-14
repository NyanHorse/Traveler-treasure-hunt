import React from "react";
import ReactDOM from "react-dom";

class GameOver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      time: null
    };
  }
  render() {
    return (
      <div>
        <h1>Congratulations!</h1>
        <h2>You' ve found the treasure chest</h2>
        <img
          src="https://cdn.dribbble.com/users/484196/screenshots/2330260/treasure.gif"
          alt="treasure box"
        />
      </div>
    );
  }
}
export default GameOver;
