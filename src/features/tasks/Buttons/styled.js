import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoint}px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
