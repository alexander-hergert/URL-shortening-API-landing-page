import React, { useEffect, useRef } from "react";
import { styled } from "styled-components";

/************** STYLES ********************/
const StylesContainer = styled.div`
  transition: all 1s;
  visibility: hidden;
  opacity: 0;
  height: 0;
  position: relative;
  left: -150%;
  height: 0;
  display: flex;
  margin: 1rem 0;
  padding: 1rem 1.5rem;
  border: 1px solid hsl(0, 0%, 75%);
  border-radius: 5px;
  background-color: white;
  justify-content: space-between;
  @media only screen and (max-width: 800px) {
    display: block;
    text-align: center;
  }
  p {
    color: hsl(260, 8%, 14%);
    max-width: 45%;
    word-wrap: break-word;
    @media only screen and (max-width: 800px) {
      max-width: 100%;
    }
  }
  div {
    display: flex;
    gap: 1rem;
    @media only screen and (max-width: 800px) {
      display: block;
      border-top: 1px solid hsl(0, 0%, 75%);
    }
    p {
      color: hsl(180, 66%, 49%);
    }
  }
`;

const CopyButton = styled.button`
  padding: 1rem 1.5rem;
  border-radius: 10px;
  background-color: hsl(180, 66%, 49%);
  color: white;
  border: none;
  width: 8rem;
  @media only screen and (max-width: 800px) {
    width: 100%;
    margin-bottom: 1rem;
  }
  &:hover {
    transition: all 0.25;
    background-color: hsl(180, 66%, 80%);
  }
`;

const CopiedButton = styled.button`
  padding: 1rem 1.5rem;
  border-radius: 10px;
  background-color: hsl(257, 27%, 26%);
  color: white;
  border: none;
  width: 8rem;
  @media only screen and (max-width: 800px) {
    width: 100%;
    margin-bottom: 1rem;
  }
  &:hover {
    transition: all 0.25;
    background-color: hsl(257, 27%, 50%);
  }
`;

const DeleteButton = styled.button`
  padding: 1rem 1.5rem;
  border-radius: 10px;
  background-color: hsl(0, 87%, 67%);
  color: white;
  border: none;
  width: 4rem;
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
  &:hover {
    transition: all 0.25;
    background-color: hsl(0, 87%, 80%);
  }
`;

/************** COMPONENT ********************/
const Url = ({
  item,
  localData,
  setLocalData,
  copiedId,
  setCopiedId,
  isOpen,
}) => {
  const { id, longUrl, shortUrl } = item;
  const containerRef = useRef();

  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(shortUrl);
      setCopiedId(id);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const element = containerRef.current;
    isOpen ? (element.style.opacity = "100%") : (element.style.opacity = "0%");
    isOpen
      ? (element.style.visibility = "visible")
      : (element.style.visibility = "hidden");
    isOpen ? (element.style.height = "100%") : (element.style.height = "0");
    isOpen
      ? (element.style.padding = "1rem 1.5rem")
      : (element.style.padding = "0");
    isOpen ? (element.style.left = "0%") : (element.style.left = "-150%");
  }, [isOpen]);

  const handleDelete = () => {
    const newArray = localData.filter((item) => item.id !== id);
    console.log(newArray);
    try {
      const objectJSON = JSON.stringify(newArray);
      localStorage.setItem("urls", objectJSON);
    } catch (error) {
      console.log(error.message);
    }
    setLocalData(newArray);
  };

  return (
    <StylesContainer ref={containerRef}>
      <p>{longUrl}</p>
      <div>
        <p>{shortUrl}</p>
        {copiedId === id ? (
          <CopiedButton onClick={handleCopy} aria-label="copied" name="copied">
            Copied
          </CopiedButton>
        ) : (
          <CopyButton onClick={handleCopy} aria-label="copy" name="copy">
            Copy
          </CopyButton>
        )}
        <DeleteButton onClick={handleDelete} aria-label="delete" name="delete">
          X
        </DeleteButton>
      </div>
    </StylesContainer>
  );
};

export default Url;
