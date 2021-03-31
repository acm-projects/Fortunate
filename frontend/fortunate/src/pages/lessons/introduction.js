import React, { Component } from "react";
import "./lessons.css";

class Introduction extends Component {
	render() {
		return (
			<div>
				<h3>Welcome to Fortunate!</h3>
				<p>
					And welcome to the great big world of stock trading! Whether
					you're learning the ropes or here to sharpen your skills,
					we're happy to have you on board!
				</p>
				<p>
					In the following lessons, we hope to give you a solid
					understanding of the basics of trading stocks that you can
					use as a foundation to start building your own
					mock-portfolio here on Fortunate. While we recommend to move
					through the lessons in the order we have here, feel free to
					skip around to whatever interests you most. These pages
					won't be going anywhere anytime soon! And if you ever want a
					refresher on any specific topic or want a more in-depth
					guide on any specific term, be sure to check out our{" "}
					<a href="/dictionary">Dictionary</a>.
				</p>
				<p>So without further ado, let's start at the beginning.</p>

				<div className="buffer" />

				<h3>What is the Stock Market?</h3>
				<p>
					The {def("stock market")} is a public network of people from
					around the world who engage in the buying, selling, and
					trading of stocks. Just link you would go to a farmers
					market to buy and sell food or go to an electronics store to
					buy and sell old tech, the stock market is a place for
					buyers and sellers to connect and do business.
				</p>
				<p>
					Today, the stock market is almost entirely run online. It
					connects hundreds of thousands of companies and individual{" "}
					{def("investors")} who wish to buy and sell {def("stocks")}{" "}
					in a secure and well-regulated environment. Having both a
					large supply and a large demand helps guarantee fair pricing
					and transparent transactions.
				</p>

				<div className="buffer" />

				<h3>How Does the Stock Market Work?</h3>
				<p>
					The stock market is a collection of all the companies that
					list shares for public investors to buy. By selling{" "}
					{def("shares")}, or fractional parts of ownership of that
					company, any company can make additional revenue that they
					can spend just like any other income.
				</p>
				<p>
					Not all companies sell their shares on the stock market.
					Companies that are owned exclusively by individuals or other
					organizations are known as {def("private companies")} while
					those who decide to {def("list")} shares to trade in the
					stock market are known as {def("public companies")}.
				</p>
				<p>
					When a company decides to begin selling its shares to the
					public, it divides itself into an arbitrary number of
					shares, and offers a fraction of those shares to the public
					for a price they think is fair. If a company deciding to "go
					public" decides to divide into 10 million shares and list 3
					million of those shares for $10, then they could expect to
					make $30 million. This process of offering up shares for the
					first time is known as making an{" "}
					{def("initial public offer (ipo)", "initial public offer")}{" "}
					or IPO. A company that has already listed shares can also
					list additional new shares at a later point in time though
					other offerings, or even {def("buyback")} or {def("delist")}{" "}
					its shares reducing the quantity available for purchase.
				</p>
				<p>
					Once shares of a company are being sold publicly, investors
					(like you) can buy those shares on the stock market from the
					company or from other investors in hopes of making a profit.
				</p>

				<div className="buffer" />

				<h3>What is a Stock?</h3>
				<p>
					When you buy into a publicly-traded company, you are buying
					shares of that company. A share is the smallest unit of
					ownership into any particular company. The number of shares
					you own in any particular company represents the ownership
					you have of that company. All of the shares you own in a
					company represent your stock in that company.
				</p>
				<p>
					Stock is a more general term used to describe your ownership
					in one or more companies. One stock might be the number of
					shares you own in company X, while three stocks denote the
					number of shares you own across companies X, Y, and Z.
					Stocks are measured in shares.
				</p>
				<p>
					Even by professionals, the terms stock and shares tend to
					often be used interchangeably because they tend to refer to
					the same thing. The difference a lot of the time comes down
					to semantics but going forward we'll try to use shares when
					talking about making trades and use stocks when talking
					about the market more generally. So that being said…
				</p>

				<div className="buffer" />

				<h3>What Gives a Stock its Price?</h3>
				<p>
					A company's {def("market capitalization")}, or its market
					cap, is a company's total value on the stock market equal to
					the number of shares times the share price. When making
					their initial public offering, it is common practice for a
					company to hire someone else (usually a reputable bank) to
					perform a complex analysis in order to determine the
					company's {def("market value")} and how many shares should
					be listed to the public and for what price. After that, the
					price of the shares is determined exclusively by the supply
					and demand of investors.
				</p>
				<p>
					Although it is used often to describe a company, the market
					cap does not reflect a company's actual worth. Shares can
					often be over- or under-valued on the market and finding a
					company's real worth is a much more complicated task. A
					market cap only reflects how much investors in the market
					are willing to pay for its shares.
				</p>

				<div className="buffer" />

				<h3>How Do You Make a Profit?</h3>
				<p>
					The price of a share is never constant. Due to changing
					demand, share price for any given company as investors gain
					and lose interest in buying its shares. The goal of any
					stock trader is to buy while demand for a certain stock is
					on the rise. If a stock is in demand, it becomes more
					valuable and the share price goes up. Then investors can
					sell their shares they bought at a lower price to other
					investors at the current market price and profit the
					difference. This is where the popular saying "buy low, sell
					high" comes from, or the just as appropriate "buy high, sell
					higher".
				</p>
				<p>
					But just like stock prices can go up, they can just as
					easily fall and investors will often have to sell shares at
					a lower price then what they purchased them at, losing them
					money. This is why buying and selling stocks is a big risk.
					There are no guarantees for what the market price of a share
					will be at a future point in time. The best you can do is
					learn from experience how to read the market to make the
					best educated guess for when the share price is going to go
					up in the future.
				</p>
				<p>
					And that's where we come in. Here on Fortunate, we let you
					buy stocks with fake money, allowing you to gain real
					experience in the market at no risk to your wallet. And if
					you keep following our lessons, you'll learn not just
					everything you need to know to gain the confidence you need
					to start trading, but also the best strategies for trading
					to ensure you're maximizing each chance you take to turn a
					profit.
				</p>

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
