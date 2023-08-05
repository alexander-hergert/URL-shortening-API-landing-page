import React from "react";
import { styled } from "styled-components";

/************** STYLES ********************/

const StylesContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: left;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const Div = styled.div`
  padding: 2rem;
  max-width: 30rem;
  background-color: white;
  margin: auto;
  border-radius: 5px;

  &:first-child {
    position: relative;
    bottom: 3rem;
  }

  &:last-child {
    position: relative;
    top: 3rem;
  }

  @media only screen and (max-width: 800px) {
    text-align: center;

    &:first-child {
      position: relative;
      bottom: 0;
    }

    &:last-child {
      position: relative;
      top: 0;
    }
  }

  div {
    width: 5rem;
    height: 5rem;
    background-color: hsl(260, 8%, 14%);
    border-radius: 50%;
    display: grid;
    place-items: center;
    position: relative;
    bottom: 4rem;
    @media only screen and (max-width: 800px) {
      margin: auto;
    }

    img {
      width: 3rem;
    }
  }

  h3 {
    margin-top: -2.5rem;
  }
`;

const Decoration = styled.div`
  width: 10rem;
  height: 1rem;
  background-color: hsl(180, 66%, 49%);
  position: relative;
  top: 8rem;
  @media only screen and (max-width: 800px) {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1rem;
    height: 5rem;
  }
`;

/************** COMPONENT ********************/

const StatisticsBottom = () => {
  return (
    <StylesContainer>
      <Div>
        <div>
          <img
            src="/assets/images/icon-brand-recognition.svg"
            alt="brand-recognition"
          />
        </div>
        <h3>Brand Recognition</h3>
        <p>
          Boost your brand recognition with each click. Generic links don’t mean
          a thing. Branded links help instil confidence in your content.
        </p>
      </Div>
      <Decoration />
      <Div>
        <div>
          <img
            src="/assets/images/icon-detailed-records.svg"
            alt="detailed-records"
          />
        </div>
        <h3>Detailed Records</h3>
        <p>
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
        </p>
      </Div>
      <Decoration />
      <Div>
        <div>
          <img
            src="/assets/images/icon-fully-customizable.svg"
            alt="fully-customizable"
          />
        </div>
        <h3>Fully Customizable</h3>
        <p>
          Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement.
        </p>
      </Div>
    </StylesContainer>
  );
};

export default StatisticsBottom;
