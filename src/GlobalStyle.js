import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  font-family: "Geologica", sans-serif;
  background-color: hsl(0, 0%, 95%);
}

*, ::after, ::befor {
  box-sizing: inherit;
}

#root {
  max-width: 1000px;
  width: 100%;
  margin-top: 5px;
  padding: 40px;
  background-color: hsl(0, 0%, 95%);
  margin: auto;

}

@media (max-width: 767px) {
  .body {
    max-width: 500px;
  }
}
`;
