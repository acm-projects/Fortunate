import React from "react";
import CardsInfo from "./CardsInfo";
import "./Cards.css";
import ImageOne from "../../images/lessonspic.jpg";
import ImageTwo from "../../images/trade1.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>How Does Fortunate Work?</h1>
      <div className="cards_container">
        <div className="cards_wrapper">
          <ul className="cards_items">
            <CardsInfo
              src={ImageOne}
              text="Lessons to learn how Market works"
              label="picture"
              path="./learn/intro"
            />
            <CardsInfo
              src={ImageTwo}
              text="Practise your trading skills."
              label="picture"
              path="./vmpage"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Cards;
