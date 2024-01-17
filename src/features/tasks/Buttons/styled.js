import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  border: none;
  color: teal;
  background: none;
  padding: 10px;
  transition: 1s;
  justify-content: center;
  cursor: pointer;

  &:hover {
    color: hsl(180, 100%, 40%);
  }

  &:disabled {
    color: hsl(180, 60%, 75%);
  }
`;
export const Wrapper = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoint}px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-column-start: 1;
    grid-column-end: 2;
  }
`;
