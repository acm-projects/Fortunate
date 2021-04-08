import React, { Component } from "react";

export class Sell extends Component {
  constructor(props) {
    super(props);

    this.state = { value: "USdollar" };

    // this.currencyHandleChange = this.currencyHandleChange.bind(this);
  }

  currencyHandleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Sell Stocks</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label>
                Sell In :{" "}
                <select
                  value={this.state.value}
                  onChange={this.currencyHandleChange}
                >
                  <option value="USdollar"> US Dollar</option>
                  <option value="rupeer"> Rupees</option>
                  <option value="canadadollar"> Canada Dollar</option>
                </select>
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="amount">
                Quantity: <input type="text" name="amount" placeholder="#number" />
              </label>
            </div>
            <hr class="horizontal-line"></hr>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Sell Stock
          </button>
        </div>
      </div>
    );
  }
}
// export default buy;
