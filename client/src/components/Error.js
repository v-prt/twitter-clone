import React from "react";
import { FaBomb } from "react-icons/fa";
import styled from "styled-components";
import { Wrapper } from "../GlobalStyles";

export const Error = () => {
  return (
    <Wrapper>
      <FaBomb />
      <Alert>An unknown error has occurred.</Alert>
      <Suggestion>
        Please try refreshing the page or contact support if the problem
        persists.
      </Suggestion>
    </Wrapper>
  );
};

const Alert = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
`;

const Suggestion = styled.p``;
