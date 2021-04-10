// import "./styles.css";
import React from "react";
import "./vmpage.scss";
import { Buy, Sell } from "./index";

import { Line } from "react-chartjs-2";
import LineGraph from "./LineGraph";

class Vmpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isbuyActive: true
    };
  }

  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add("right");
  }

  changeState() {
    const { isbuyActive } = this.state;

    if (isbuyActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState((prevState) => ({ isbuyActive: !prevState.isbuyActive }));
  }

  render() {
    const { isbuyActive } = this.state;
    const current = isbuyActive ? "Sell" : "Buy";
    const currentActive = isbuyActive ? "Buy" : "Sell";
    return (
      <div className="vmpage">
      Hello
      <LineGraph />

      <div className="bigcontainer">
        <div className="buy">
          <div className="container" ref={(ref) => (this.container = ref)}>
            {isbuyActive && (
              <Buy containerRef={(ref) => (this.current = ref)} />
            )}
            {!isbuyActive && (
              <Sell containerRef={(ref) => (this.current = ref)} />
            )}
          </div>
          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={(ref) => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
      </div>
    );
  }
}

const RightSide = (props) => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default Vmpage;
