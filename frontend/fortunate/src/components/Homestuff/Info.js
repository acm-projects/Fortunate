import React from "react";
import styled from "styled-components";
// import { Button } from "./Button";
// <Button to="/homes"> {buttonLabel}</Button>

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
`;

const Container = styled.div`
  // padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left; // center;
  align-items: flex-start;
  line-height: 1.4;
  // padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }
  p {
    margin-bottom: 2rem;
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
  }
  img {
    width: 350px; //100%;
    height: 350px; //100%;
    object-fit: contain;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;

const Info = ({ heading, paragraphOne, paragraphTwo, reverse, image }) => {
  return (
     <Section>
    <Container>
      <Left>
        <h1> {heading}</h1>
       <p> {paragraphOne}</p>
      <h5>  <p> {paragraphTwo}</p> </h5>
      </Left>
      <Right reverse={reverse}>
        <img src={image} alt="logo"/>
      </Right>
    </Container>
      </Section>
  );
};
export default Info;
