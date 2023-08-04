import React from "react";
import { styled } from "styled-components";

/************** STYLES ********************/

const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: left;
`;

const Div = styled.div`
  padding: 2rem;
  width: 30rem;
  max-height: 20rem;
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
`;

const ImgContainer = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: hsl(260, 8%, 14%);
  border-radius: 50%;
  display: grid;
  place-items: center;
  position: relative;
  bottom: 4rem;
`;

const Img = styled.img`
  width: 3rem;
`;

const H3 = styled.h3`
  margin-top: -2.5rem;
`;

const Decoration = styled.div`
  width: 10rem;
  height: 1rem;
  background-color: hsl(180, 66%, 49%);
  position: relative;
  top: 8rem;
`;

/************** COMPONENT ********************/

const StatisticsBottom = () => {
  return (
    <Container>
      <Div>
        <ImgContainer>
          <Img
            src="/assets/images/icon-brand-recognition.svg"
            alt="brand-recognition"
          />
        </ImgContainer>
        <H3>Brand Recognition</H3>
        <p>
          Boost your brand recognition with each click. Generic links don’t mean
          a thing. Branded links help instil confidence in your content.
        </p>
      </Div>
      <Decoration />
      <Div>
        <ImgContainer>
          <Img
            src="/assets/images/icon-detailed-records.svg"
            alt="detailed-records"
          />
        </ImgContainer>
        <H3>Detailed Records</H3>
        <p>
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
        </p>
      </Div>
      <Decoration />
      <Div>
        <ImgContainer>
          <Img
            src="/assets/images/icon-fully-customizable.svg"
            alt="fully-customizable"
          />
        </ImgContainer>
        <H3>Fully Customizable</H3>
        <p>
          Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement.
        </p>
      </Div>
    </Container>
  );
};

export default StatisticsBottom;
