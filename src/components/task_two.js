import React from "react";
import TaskThree from "./task_three.js";
import Map from "./mapbox.js";


class TaskTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      lat: 41.412473,
      lng: 2.174298,
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
            <div className="title"></div>
            <h3>this is task two</h3>
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
            <img src="../src/assets/2.jpg" ></img>
            <div className="paper">
            <p>
              Hospital de Sant Pau was a fully functioning hospital until June
              2009, when the new hospital opened next to it, before undergoing
              restoration for use as a museum and cultural center, which opened
              in 2014. Although the hospital's current buildings date from the
              20th century, the Hospital de la Santa Creu was founded in 1401
              when six small medieval hospitals merged.
            </p></div>
            <div>
              <div>
                <h2 className="question">
                  Who paid for the building of this hospital?
                </h2>
              </div>
              <button className="options" onClick={() => this.wrong()}>
                Spanish government
              </button>
              <button className="options" onClick={() => this.correct()}>
                banker Pau Gil
              </button>
              <button className="options" onClick={() => this.wrong()}>
                donations from citizens
              </button>
            </div>
            <div>{wrongMsg}</div>
          </div>
        );
      }
    } else {
      return <TaskThree />;
    }
  }
}
export default TaskTwo;
