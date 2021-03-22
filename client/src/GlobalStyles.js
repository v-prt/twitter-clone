import styled, { createGlobalStyle } from "styled-components";

const COLORS = {
  primary: "#9900ff",
  accent: "black",
};

export const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  color: white;
  background: ${COLORS.primary};
  text-align: right;
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
  &:hover {
    color: ${COLORS.primary};
  }
}
`;
