import React from "react";
import { styled } from "styled-components";
import LinkButton from "./buttons/LinkButton";

/************** STYLES ********************/

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10rem;
`;

const Div = styled.div`
  width: 50%;
`;

const Img = styled.img`
  width: 100%;
  position: relative;
  left: 10rem;
`;

const ImgBox = styled.div`
  overflow: hidden;
`;

const P = styled.p`
  margin-bottom: 4rem;
`;

/************** COMPONENT ********************/

const HeaderSection = () => {
  return (
    <Header>
      <Div>
        <h1>More than just shorter links</h1>
        <P>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </P>
        <LinkButton value={"Get Started"} />
      </Div>
      <ImgBox>
        <Img
          src="/assets/images/illustration-working.svg"
          alt="illustration-working"
        />
      </ImgBox>
    </Header>
  );
};

export default HeaderSection;
