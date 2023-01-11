import React, { useState } from "react";
import styled from "styled-components";

const TourContainer = styled.article`
  background: #ffffff;
  border-radius: 0.25rem;
  margin: 2rem 0;
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s linear;
`;

const StyledImg = styled.img`
  display: block;
  width: 100%;
  height: 20rem;
  object-fit: cover;
  border-radius: 0.25rem 0.25rem 0 0;
`;

const InfoContainer = styled.div`
  padding: 1.5rem 2rem;
`;

const StyledSpan = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  color: #49a6e9;
  background: #ebf7ff;
  padding: 0.5rem 0.75rem;
  border-radius: 0 0.25rem 0 0.25rem;
  font-size: 1rem;
`;

const StyledTitle = styled.h4`
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
  letter-spacing: 0.1rem;
`;

const StyledText = styled.p`
  margin-bottom: 1.25rem;
  color: #617d98;
`;

const StyledShortText = styled.p`
  margin-bottom: 1.25rem;
  color: #617d98;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const DisplayButton = styled.button`
  background: transparent;
  border-color: transparent;
  text-transform: capitalize;
  color: #49a6e9;
  font-size: 1rem;
  cursor: pointer;
  padding-left: 0.25rem;
`;

const InterestButton = styled.button`
  display: block;
  width: 200px;
  margin: 1rem auto 0;
  color: #bb2525;
  letter-spacing: 0.1rem;
  background: transparent;
  border: 1px solid #bb2525;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  text-transform: capitalize;
  font-size: 1rem;
  cursor: pointer;
`;

const Tour = ({ id, name, info, image, price, deleteTour }) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <TourContainer>
      <StyledImg src={image} alt={name} />
      <InfoContainer>
        <StyledSpan>${price}</StyledSpan>
        <StyledTitle>{name}</StyledTitle>
        {info.length > 200 && showAll === false ? (
          <StyledShortText>{info}</StyledShortText>
        ) : (
          <StyledText>{info}</StyledText>
        )}
        <DisplayButton
          onClick={() => {
            setShowAll((prevState) => !prevState);
          }}
        >
          {showAll ? "show less" : "read more"}
        </DisplayButton>
        <InterestButton onClick={() => deleteTour(id)}>
          not interested
        </InterestButton>
      </InfoContainer>
    </TourContainer>
  );
};

export default Tour;
