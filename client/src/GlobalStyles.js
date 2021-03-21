import { createGlobalStyle } from "styled-components";

const COLORS = {
  primary: "#9900ff",
  accent: "black",
};

export default createGlobalStyle`
* {
    font-family: "Helvetica", "Arial", sans-serif;
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
