import styled, { css } from "styled-components";

export const StyledSection = styled.section`
  margin: 7px;
  background-color: white;
  padding: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoint}px) {
    align-self: flex-start;
  }
`;

export const Container = styled.div`
  margin: 5px;
  background-color: white;
  padding: 10px;

  ${({ $grid }) =>
    $grid &&
    css`
      display: grid;
      grid-template-columns: 2fr 1fr;
      align-items: center;

      @media (max-width: ${({ theme }) => theme.breakpoint}px) {
        grid-template-columns: 1fr;
      }
    `}
`;
export const SectionHeader = styled.header`
  font-weight: bold;
  font-size: 20px;
`;
