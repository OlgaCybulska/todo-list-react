import styled from "styled-components";

export const FormTask = styled.form`
  margin-bottom: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoint}px) {
    flex-wrap: wrap;
  }
`;

export const Button = styled.button`
  background-color: hsl(180, 100%, 25%);
  color: white;
  border: none;
  flex-basis: 200px;
  padding: 10px;
  cursor: pointer;
  transition: 1s;
  margin-left: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint}px) {
    transform: scale(1.05);
    flex: 1 1 300px;
    margin: 20px;
  }

  &:hover {
    background-color: hsl(180, 80%, 40%);
    transform: scale(1.1);
    border-radius: 3px;

    @media (max-width: ${({ theme }) => theme.breakpoint}px) {
      transform: scale(1.06);
    }
  }
`;
