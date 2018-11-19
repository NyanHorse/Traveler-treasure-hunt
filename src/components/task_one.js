import React from "react";
import TaskTwo from "./task_two";
import Map from "./mapbox.js";

class TaskOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      lat: 41.403629,
      lng: 2.174356,
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
            <div className="title">
            <h3>This is task one</h3>
            </div>
            <div>
              <div className="mapp">
                <Map latitude={this.state.lat} longitude={this.state.lng} />
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
            <img src="../src/assets/1.jpg" ></img>
            <div className="paper">
            <p>
              The Sagrada Familia is a large Roman Catholic church designed by
              Antoni Gaudí who worked on it until his death in 1926. Building of
              the Sagrada Família began in 1882, relying solely on private
              donations construction progressed slowly and was interrupted by
              the Spanish Civil War, only to resume intermittent progress in the
              1950s. The expected finish date of 2026–100 years after Gaudí's
              death.
            </p>
            <div>
              <div>
                <h2 className="question">
                  How much of the building was finished when Gaudi passed away?
                </h2>
              </div>
              <button className="options" onClick={() => this.wrong()}>
                Halfway finished
              </button>
              <button className="options" onClick={() => this.wrong()}>
                About 10 percent
              </button>
              <button className="options" onClick={() => this.correct()}>
                Less than quarter
              </button>
            </div>
            <div>{wrongMsg}</div></div>
          </div>
        );
      }
    } else {
      return <TaskTwo />;
    }
  }
}
export default TaskOne;
