import React, { Component } from "react";
import "./lessons.css";

class Introduction extends Component {
	render() {
		return (
			<div>
				<h3>What is a Stock Exchange?</h3>
				<p>
					Stocks are bought and sold on {def("stock exchanges")} such
					as the New York Stock Exchange and the NASDAQ in the US, or
					dozens of other exchanges operated internationally. These
					exchanges facilitate the buying and selling of stocks and
					other {def("equities")} in accordance with government
					regulations and an exchange's own self-imposed rules
					enforced to protect their investors. The exchanges do not
					own any shares. Instead, they are responsible for tracking
					the flow of orders for each company's stock.
				</p>
				<p>
					Although the terms stock market and stock exchange are
					commonly used interchangeably, a stock exchange usually
					refers to individual organizations like those listed above.
					These stock exchanges, together with all the other exchanges
					from around the world, are what make up the stock market as
					a whole.
				</p>
				<p>
					While there are still some {def("auction exchanges")} like
					the New York Stock Exchange where investors can gather
					physically to verbally communicate on the trading floor when
					making their trades, these kinds of exchanges are being
					phased out by {def("electronic exchanges")} like the NASDAQ
					which take place almost exclusively on a digital platform.
					These exchanges, are faster, more efficient, and have a much
					lower barrier to entry so investors the world over can trade
					using all the most recent information available to them.
				</p>

				<div className="buffer" />

				<h3>How Do You Use a Stock Exchange?</h3>
				<p>
					Typically when everyday investors are trading stocks, they
					don't trade them directly through a stock exchange. Stock
					exchanges only accept orders from individuals or firms who
					are members of that exchange, so instead, investors use a{" "}
					{def("broker")} or brokerage, which for our purposes is a
					company that acts as a middleman between the investors and
					the exchange.
				</p>
				<p>
					An {def("online broker")}, or discount broker, serves as a
					digital tool to carry out your stock exchange orders. They
					can't provide you with any personalized recommendations or
					financial assistance like hiring a more traditional{" "}
					{def("full-service broker")} can, but these brokers do often
					offer useful tools to help their investors research and
					analyze the market to help them make more informed
					decisions. Online brokers are much less expensive than
					hiring a financial advisor and are a good option for those
					willing to take on the risks and rewards of investing upon
					themselves.
				</p>
				<p>
					While you're here, Fortunate will be acting as your online
					broker; so you can order your stocks from us and we will
					pull the data for your stocks from real exchanges to add
					shares to your account. We're happy to be of service!
				</p>

				<div className="buffer" />

				<h3>How Do You Trade Stocks?</h3>
				<p>
					Once you have your brokerage account, buying and selling
					your stocks should be relatively simple. You can look up the
					stocks you'd like to buy using their company name or by
					using their {def("ticker symbol")} which is the short unique
					series of identifying characters assigned to that stock,
					often related to that company's name.
				</p>
				<p>
					When buying and selling stocks, there are some important
					terms to know. When buying shares, the lowest price that a
					seller is willing to take for a share is the {def("ask")}{" "}
					price. When selling shares, the highest price that a buyer
					is willing to pay for a share is the bid price. A trade
					occurs when an investor in the market is willing to buy at
					the ask price or sell at the {def("bid")} price. These two
					prices will never meet. It will always cost a little bit
					more to buy into a stock than it will to sell out of it
					because of the risk of investing, so the ask price will
					always be a little bit above the bid price. The difference
					between the two prices can vary from stock to stock and this
					difference is called the bid-ask {def("spread")}.
				</p>
				<p>
					When stocks have a small or tight spread of a few cents
					between the ask and the bid, it means the stock has a high{" "}
					{def("liquidity")}, which means it is much quicker and
					easier to buy or sell shares of that stock. On the flip
					side, if the spread is fifty cents or more it means the
					stock has a low liquidity and the shares will be much harder
					to trade and you may find yourself buying or selling shares
					for inopportune prices. Heavily traded stocks tend to have a
					much smaller spread and higher liquidity than stocks with
					lower demand.
				</p>
				<p>
					Also, keep in mind online brokers tend to charge a small fee
					when placing orders to purchase shares. Here at Fortunate,
					our fee is zero because all our money is fake anyway but
					keep this in mind when trading on real online brokerages!
				</p>

				<div className="buffer" />
				<a href="/">
					<button
						style={{
							color: "#2d313a",
							backgroundColor: "gold",
							fontWeight: "bold",
							fontSize: "1.3em",
							display: "block",
							marginLeft: "auto",
							marginRight: "auto",
						}}
						className="btn"
						justifySelf="center"
					>
						{"Back Home"}
					</button>
				</a>
				<div className="buffer" />
			</div>
		);
	}
}

// Creates a link to the dictionary definiion of a term
function def(term, text) {
	// Removes "s" or "ies" in term if the word is used as a plural in context
	if (term.substring(term.length - 3, term.length) == "ies") {
		text = term;
		term = term.substring(0, term.length - 3) + "y";
	} else if (term.charAt(term.length - 1) == "s") {
		text = term;
		term = term.substring(0, term.length - 1);
	}

	return <a href={"/dictionary#" + term.toLowerCase()}>{text || term}</a>;
}

export default Introduction;
