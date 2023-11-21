import styled, { css } from "styled-components";

export const SectionHeader = styled.section`
  margin: 2px;
  background-color: white;
  padding: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoint}px) {
    align-self: flex-start;
  }
`;

export const Container = styled.div`
  margin: 2px;
  background-color: white;
  padding: 15px;

  ${({ $grid }) =>
    $grid &&
    css`
      display: grid;
      grid-template-columns: 3fr 1fr 1fr;
      align-items: center;

      @media (max-width: ${({ theme }) => theme.breakpoint}px) {
        grid-template-columns: 1fr;
      }
    `}
`;
