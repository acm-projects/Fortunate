import React, { Component } from "react";
import axios from "axios";

export class Sell extends Component {
  constructor(props) {
    super(props);

    this.state = { type: 'sell', symbol : '', quantity : 0 };

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
    this.setState({
      symbol : event.target.value
    });
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Sell Stocks</div>
        <div className="content">
        <div className="form">
            <div className="form-group">
              <label>
                Ticker: <input type="text" name="ticker" placeholder="Ex: GME" onChange={this.handleTickerChange.bind(this)}/>
              </label>
            </div>
            <div className="form-group">
              <label>
                Amount: <input type="text" name="amount" placeholder="0" onChange={this.handleQuantChange.bind(this)}/>
              </label>
            </div>
            <hr class="horizontal-line"></hr>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={this.tradeStock.bind(this)}>
            Sell Stock
          </button>
        </div>
      </div>
    );
  }
}
// export default buy;
