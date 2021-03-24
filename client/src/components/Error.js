import React from "react";
import { FaBomb } from "react-icons/fa";
import styled from "styled-components";

export const Error = () => {
  return (
    <Alert>
      <Icon>
        <FaBomb />
      </Icon>
      <Message>An unknown error has occurred.</Message>
      <Suggestion>
        Please try refreshing the page or contact support if the problem
        persists.
      </Suggestion>
    </Alert>
  );
};

const Alert = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  align-items: center;
  padding: 50px;
`;

const Icon = styled.div`
  font-size: 4rem;
`;

const Message = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
`;

const Suggestion = styled.p``;
