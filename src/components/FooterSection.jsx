import React from "react";
import { styled } from "styled-components";

/************** STYLES ********************/

const StylesContainer = styled.footer`
  padding: 3rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  background-color: hsl(260, 8%, 14%);
  @media only screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2rem;
  }

  & > img {
    width: 8rem;
    filter: invert(100%);
  }

  & > div {
    display: flex;
    justify-content: space-around;
    gap: 5rem;
    @media only screen and (max-width: 1100px) {
      gap: 2rem;
    }
    @media only screen and (max-width: 800px) {
      flex-direction: column;
      gap: 0;
    }
  }
`;

const Ul = styled.ul`
  display: flex;
  gap: 2rem;
  img {
    min-width: 1rem;
  }
`;

const Li = styled.li`
  margin-bottom: 1rem;

  & > a {
    color: white;
  }
`;

/************** COMPONENT ********************/

const FooterSection = () => {
  return (
    <StylesContainer>
      <img src="/assets/images/logo.svg" alt="logo" />
      <div>
        <div>
          <ul>
            <Li>
              <a href="">Features</a>
            </Li>
            <li>
              <a href="">Link Shortening</a>
            </li>
            <li>
              <a href="">Branded Links</a>
            </li>
            <li>
              <a href="">Analytics</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <Li>
              <a href="">Resources</a>
            </Li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Developers</a>
            </li>
            <li>
              <a href="">Support</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <Li>
              <a href="">Company</a>
            </Li>
            <li>
              <a href="">Our Team</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <Ul>
            <li>
              <a href="">
                <img
                  src="/assets/images/icon-facebook.svg"
                  alt="icon-facebook"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img src="/assets/images/icon-twitter.svg" alt="icon-twitter" />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src="/assets/images/icon-pinterest.svg"
                  alt="icon-pinterest"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src="/assets/images/icon-instagram.svg"
                  alt="icon-instagram"
                />
              </a>
            </li>
          </Ul>
        </div>
      </div>
    </StylesContainer>
  );
};

export default FooterSection;
