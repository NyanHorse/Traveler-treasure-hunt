import React from "react";
import ReactDOM from "react-dom";
import TaskTwo from "../views/task_two";

class TaskOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      lat: "",
      lng: "",
      loading: false,
      correct: false
    };
  }
  correct() {
    this.setState({ correct: true });
  }

  render() {
    if (this.state.correct) {
      return <TaskTwo />;
    } else {
      return (
        <div>
          <h3>this is task one</h3>
          <div>
            <h1>map here</h1>
            <button id="here">I'm here</button>
          </div>
          <div>
            <p>
              The Sagrada Familia is a large Roman Catholic church designed by
              Antoni Gaudí who worked on it until his death in 1926. Building of
              the Sagrada Família began in 1882, relying solely on private
              donations construction progressed slowly and was interrupted by
              the Spanish Civil War, only to resume intermittent progress in the
              1950s. The expected finish date of 2026–100 years after Gaudí's
              death.
            </p>
            <div id="hidden">
              <div>
                <h2 className="question">
                  How much of the building was finished when Gaudi passed away?
                </h2>
              </div>
              <button className="options">Halfway finished</button>
              <button className="options">About 10 percent</button>
              <button className="options" onClick={() => this.correct()}>
                Less than quarter
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default TaskOne;
