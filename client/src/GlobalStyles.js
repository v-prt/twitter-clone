import styled, { createGlobalStyle } from "styled-components";

export const COLORS = {
  primary: "#9900ff",
  accent: "black",
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  left: 250px;
  width: 650px;
  border: 1px solid lightgrey;
  border-top: none;
`;

export const Loader = styled.div`
  font-size: 2rem;
  opacity: 50%;
  margin: auto;
`;

export const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 30px;
  border: 3px solid white;
  color: white;
  font-size: 1.1rem;
  background: ${COLORS.primary};
  text-align: center;
  transition: 0.3s ease-in-out;
  &:hover {
    background: ${COLORS.accent};
  }
  &:focus {
    // replaces default focus outline
    outline: none;
    border: 3px solid ${COLORS.accent};
  }
  &:disabled {
    cursor: not-allowed;
    background: grey;
    opacity: 50%;
  }
`;

export default createGlobalStyle`
* {
    font-family: "Helvetica", "Arial", sans-serif;
    margin: 0;
    padding: 0;
}
body {
  width: 75%;
  margin: auto;
}
h1, h2, h3 {
  color: ${COLORS.primary};
}
a {
  font-size: 1.1rem;
  text-decoration: none;
  color: ${COLORS.accent};
}
`;
