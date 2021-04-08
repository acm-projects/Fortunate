import React, { Component } from "react";

export class Buy extends Component {
  constructor(props) {
    super(props);

    this.state = { value: "USdollar" };

    // this.currencyHandleChange = this.currencyHandleChange.bind(this);
  }

  currencyHandleChange = (event) => {
    this.setState({ value: event.target.value });
  };
//line 19 <div className="header">Buy Stocks</div>
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
      <div className="header">Buy Stocks</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label>
                Invest In :{" "}
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
                Amount: <input type="text" name="amount" placeholder="$0.00" />
              </label>
            </div>
            <hr class="horizontal-line"></hr>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Buy Stock
          </button>
        </div>
      </div>
    );
  }
}
// export default buy;
