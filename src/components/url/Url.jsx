import React from "react";
import { styled } from "styled-components";

/************** STYLES ********************/
const StylesContainer = styled.div`
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
`;

/************** COMPONENT ********************/
const Url = ({ item, localData, setLocalData, copiedId, setCopiedId }) => {
  const { id, longUrl, shortUrl } = item;

  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(shortUrl);
      setCopiedId(id);
    } catch (error) {
      console.log(error.message);
    }
  };

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
    <StylesContainer>
      <p>{longUrl}</p>
      <div>
        <p>{shortUrl}</p>
        {copiedId === id ? (
          <CopiedButton onClick={handleCopy}>Copied</CopiedButton>
        ) : (
          <CopyButton onClick={handleCopy}>Copy</CopyButton>
        )}
        <DeleteButton onClick={handleDelete}>X</DeleteButton>
      </div>
    </StylesContainer>
  );
};

export default Url;
