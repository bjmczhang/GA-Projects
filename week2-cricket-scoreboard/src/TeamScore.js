import React from "react";
import "./TeamScore.css";

class TeamScore extends React.Component {
  state = {
    runs: 0,
    wickets: 0,
  };

  // doOneRun = () => {
  //   if (this.state.wickets < 10) {
  //     this.setState({ runs: this.state.runs + 1 });
  //   }
  // };

  // doFourRuns = () => {
  //   if (this.state.wickets < 10) {
  //     this.setState({ runs: this.state.runs + 4 });
  //   }
  // };

  // doSixRuns = () => {
  //   if (this.state.wickets < 10) {
  //     this.setState({ runs: this.state.runs + 6 });
  //   }
  // };

  updateRuns = (runsNum) => {
    this.setState({ runs: this.state.runs + runsNum });
  };

  updateWicket = () => {
    this.setState({ wickets: this.state.wickets + 1 });
  };

  render() {
    let result = this.state.wickets === 10 ? "All out!" : null;

    return (
      <div className="teamCard">
        <div className="teamName">
          <h1>{this.props.teamName}</h1>
        </div>
        <div className="currentNum">
          <h2 className="runs">
            <span>{this.state.runs}</span>Runs
          </h2>
          <h2 className="wickets">
            <span>{this.state.wickets}</span>Wickets
          </h2>
        </div>
        <p className="result">{result}</p>
        <div
          className="btnGroup"
          style={{
            opacity: this.state.wickets === 10 ? "0" : null,
            pointerEvents: this.state.wickets === 10 ? "none" : null,
          }}
        >
          <button className="btn btn-run1" onClick={() => this.updateRuns(1)}>
            1 Run
          </button>
          <button className="btn btn-run4" onClick={() => this.updateRuns(4)}>
            4 Runs
          </button>
          <button className="btn btn-run6" onClick={() => this.updateRuns(6)}>
            6 Runs
          </button>
          <button
            className="btn btn-wicket"
            onClick={() => this.updateWicket()}
          >
            Wicket
          </button>
        </div>
      </div>
    );
  }
}

export default TeamScore;
