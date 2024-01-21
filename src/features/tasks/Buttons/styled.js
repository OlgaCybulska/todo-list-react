import styled from "styled-components";

export const Wrapper = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoint}px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-column-start: 1;
    grid-column-end: 2;
  }
`;
