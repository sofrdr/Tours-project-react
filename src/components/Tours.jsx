import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tour from "./Tour";
import styled from "styled-components";

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const StyledTitle = styled.h2`
  letter-spacing: 0.1rem;
  font-size: 2.5rem;
  text-transform: capitalize;
  margin-bottom: 0.75rem;
`;

const Underline = styled.div`
  width: 6rem;
  height: 0.25rem;
  background: #49a6e9;
  margin-left: auto;
  margin-right: auto;
`;

const ToursContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    gap: 2rem;
    align-items: start;
  }
  @media screen and (min-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://course-api.com/react-tours-project"
      );
      const data = await response.json();
      setTours(data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      <TitleContainer>
        <StyledTitle>our tours</StyledTitle>
        <Underline />
      </TitleContainer>
      <ToursContainer>
        {tours.map((tour) => {
          const { id, name, info, image, price } = tour;
          return (
            <Tour
              key={id}
              name={name}
              info={info}
              image={image}
              price={price}
            />
          );
        })}
      </ToursContainer>
    </section>
  );
};

export default Tours;
