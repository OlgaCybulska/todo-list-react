import styled from "styled-components";

export const MainContainer = styled.main`
  max-width: 1000px;
  width: 100%;
  margin-top: 5px;
  padding: 40px;
  margin: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint}px) {
    max-width: 500px;
  }
`;
