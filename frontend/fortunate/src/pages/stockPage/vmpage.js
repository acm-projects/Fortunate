// import "./styles.css";
import React from "react";
import "./vmpage.scss";
import { Buy, Sell } from "./index";

import LineGraph from "./LineGraph";
import axios from "axios";

class Vmpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isbuyActive: true,
      symbol: '',
      chartData: {}
    };
  }

  componentDidMount() {
    //Add .right by default
    //this.rightSide.classList.add("right");

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

  handleSymbol = async (ticker) => {
    
    console.log(ticker);
    this.setState({symbol: ticker});
    let x = [];
		let y = [];
		var res = await axios
			.post('/stock', {symbol: ticker});
    y = res.data.indicators.open;
    res.data.timestamp.forEach(element => {
      x.push(new Date(element * 1000).toLocaleTimeString());
    });
    this.setState({chartData:{
      labels: x,
      datasets:[
          {
          data:y,
          borderColor:[
              (y[0] > y[367]) ? 'rgba(255, 50, 50, 0.9)' : 'rgba(50, 255, 50, 0.9)'
          ]
          }
      ]
    }})
  }
   
  

  render() {
    const { isbuyActive } = this.state;
    const current = isbuyActive ? "Sell" : "Buy";
    const currentActive = isbuyActive ? "Buy" : "Sell";
    return (
      <div className="vmpage">
        <LineGraph chartData={this.state.chartData} symbol={this.state.symbol}/>
        <div className="bigcontainer">
          <div className="buy">
            <div className="container" ref={(ref) => (this.container = ref)}>
              {isbuyActive && (
                <Buy callbackFromParent={this.handleSymbol} containerRef={(ref) => (this.current = ref)} />
              )}
              {!isbuyActive && (
                <Sell callbackFromParent={this.handleSymbol} containerRef={(ref) => (this.current = ref)} />
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
