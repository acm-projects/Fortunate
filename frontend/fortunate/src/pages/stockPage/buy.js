import React, { Component } from "react";
import axios from "axios";

export class Buy extends React.Component {
  constructor(props) {
    super(props);
    this.state = { type: 'buy', symbol : '', quantity : 0 };

    // this.currencyHandleChange = this.currencyHandleChange.bind(this);
  }

  tradeStock = () => {
    axios.defaults.headers.common[
      "Authorization"
    ] = localStorage.getItem('FBIdToken');
    axios.post('/trade', this.state).then(res => {
      console.log(res.data);
    }).catch(error => {
      console.error(error);
    });
  }

  handleQuantChange = (event) => {
    var q = parseInt(event.target.value);
    this.setState({
      quantity : q
    });
  }

  handleTickerChange = (event) => {
    var ticker = event.target.value;
    if(this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.setState({
        symbol : ticker
      });
      this.props.callbackFromParent(ticker);
    }, 1000);
  }
//line 19 <div className="header">Buy Stocks</div>
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label>
                Symbol:{"  "} <input type="text" name="Ticker" placeholder="Ex: GME" onChange={this.handleTickerChange.bind(this)}/>
              </label>
            </div>
            <div className="form-group">
              <label>
                Amount: <input type="text" name="amount" placeholder="0" onChange={this.handleQuantChange.bind(this)}/>
              </label>
            </div>
            <hr class="horizontal-line"></hr>
          </div>
          <button type="button" className="btn" onClick={this.tradeStock.bind(this)} >
            Buy Stock
          </button>
        </div>
      </div>
    );
  }
}
// export default buy;
