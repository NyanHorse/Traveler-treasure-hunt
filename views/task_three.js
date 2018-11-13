import React from "react";
import ReactDOM from "react-dom";
import Finished from "../views/finished";

class TaskThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      lat: 41.41666,
      lng: 2.18166,
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
            <h3>this is task three</h3>
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
              Bunkers del Carmel were built during the Spanish Civil War in
              1937. When Franco came to power and the Civil War was over, the
              guns were retired, but the bunkers remained. Due rising problems
              of poverty, locals saw the bunkers as forms of housing and
              shelter. In 1950's there were around 3000 inhabitants. The
              neighborhood and many of its residents remained all the way up
              until the 1990s.
            </p>
            <div>
              <div>
                <h2 className="question">
                  Why did Barcelona City Council decide to rehouse bunkers
                  residents in early 90's?
                </h2>
              </div>
              <button className="options" onClick={() => this.wrong()}>
                Because of a tunnel construction accident
              </button>
              <button className="options" onClick={() => this.correct()}>
                Because of Olympic Games
              </button>
              <button className="options" onClick={() => this.wrong()}>
                Because of inhumane living conditions
              </button>
            </div>
            <div>{wrongMsg}</div>
          </div>
        );
      }
    } else {
      return <Finished />;
    }
  }
}
export default TaskThree;
