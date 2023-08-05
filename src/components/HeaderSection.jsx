import React from "react";
import { styled } from "styled-components";
import LinkButton from "./buttons/LinkButton";

/************** STYLES ********************/

const StylesContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 6rem;
  @media only screen and (max-width: 800px) {
    flex-direction: column-reverse;
    padding-left: 2rem;
  }

  div {
    width: 50%;
    @media only screen and (max-width: 800px) {
      width: 100%;
      text-align: center;
      padding-right: 2rem;
    }

    h1 {
      font-size: 5rem;
      @media only screen and (max-width: 1100px) {
        font-size: 3rem;
      }
    }

    p {
      margin-bottom: 4rem;
    }
  }
`;

const ImgContainer = styled.div`
  overflow: hidden;
  @media only screen and (max-width: 800px) {
    width: 100%;
  }

  img {
    width: 100%;
    position: relative;
    left: 8rem;
  }
`;

/************** COMPONENT ********************/

const HeaderSection = () => {
  return (
    <StylesContainer>
      <div>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <LinkButton>Get Started</LinkButton>
      </div>
      <ImgContainer>
        <img
          src="/assets/images/illustration-working.svg"
          alt="illustration-working"
        />
      </ImgContainer>
    </StylesContainer>
  );
};

export default HeaderSection;
