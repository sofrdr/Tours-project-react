import React from "react";
import styled from "styled-components";

const StyledLoading = styled.h1`
  font-size: 3rem;
  text-align: center;
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
  letter-spacing: 0.1rem;
`;

const Loading = () => {
  return (
    <div>
      <StyledLoading>Loading ...</StyledLoading>
    </div>
  );
};

export default Loading;
