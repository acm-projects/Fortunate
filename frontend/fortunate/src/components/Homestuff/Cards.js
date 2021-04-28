import React from "react";
import CardsInfo from "./CardsInfo";
import "./Cards.css";
import ImageOne from "../../images/lessonspic.jpg";
import ImageTwo from "../../images/trade1.jpg";
import ImageThree from "../../images/PortfolioImage.jpg";

function Cards() {
	return (
		<div>
			{/* className="cards" */}
			{/* <h1>How Does Fortunate Work?</h1> */}
			<div className="cards_container">
				<div>
					{" "}
					{/* className="cards_wrapper" */}
					<ul className="cards_items">
						<CardsInfo
							src={ImageOne}
							text="Learn how Market works on our Lessons Page."
							label="Click Here!"
							path="./learn/intro"
						/>
						<CardsInfo
							src={ImageTwo}
							text="Practice your trading skills on the Virtual Market."
							label="Click Here!"
							path="./vmpage"
						/>
						<CardsInfo
							src={ImageThree}
							text="Check out your progress in your Portfolio."
							label="Click Here!"
							path="./portfolio"
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}
export default Cards;
