import React from "react";
import ReactDOM from "react-dom";
import GameOver from "../views/game_over";

class Finished extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      lat: 41.41583,
      lng: 2.14861,
      correct: false,
      wrong: false,
      show: false
    };
  }
  correct() {
    this.setState({ correct: true });
  }

  wrong() {
    this.setState({ wrong: true });
  }

  showQuestion() {
    this.setState({ show: true });
  }

  render() {
    let wrongMsg = null;
    if (this.state.wrong) {
      wrongMsg = <h2>Wrong answer, try again!</h2>;
    }
    if (!this.state.correct) {
      if (!this.state.show) {
        return (
          <div>
            <h3>this is task four</h3>
            <div>
              <div className="mapHere">
                <p>
                  On map latitude is {this.state.lat}, longitude is{" "}
                  {this.state.lng}.
                </p>
              </div>
              <button className="here" onClick={() => this.showQuestion()}>
                I'm here
              </button>
            </div>
          </div>
        );
      } else {
        return (
          <div className="task">
            <p>
              Park Güell is named after businessman Eusebi Güell, who's the
              author of the project and English garden city movement, hense the
              originally English name “Park”. The building of park started in
              1900, it's a reflection of Gaudí's artistic plenitude, which
              belongs to his naturalist phase.There are two houses in the
              complex, one was intended to be a show house, other one was Gaui's
              house where he lived with hos family from 1906 to 1926. It is now
              the Gaudi House Museum since 1963.
            </p>
            <div>
              <div>
                <h2 className="question">
                  What was the park initially supposed to be?
                </h2>
              </div>
              <button className="options" onClick={() => this.correct()}>
                Housing site
              </button>
              <button className="options" onClick={() => this.wrong()}>
                Royal garden
              </button>
              <button className="options" onClick={() => this.wrong()}>
                High end hotel complex
              </button>
            </div>
            <div>{wrongMsg}</div>
          </div>
        );
      }
    } else {
      return <GameOver />;
    }
  }
}
export default Finished;
