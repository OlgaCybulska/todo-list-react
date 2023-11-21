import styled, { css } from "styled-components";

export const List = styled.ul`
  margin: 2px;
  background-color: white;
  padding: 15px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid gray;
  padding: 5px;
  justify-content: space-between;
  margin-bottom: 10px;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  flex-basis: 80%;
  text-align: left;

  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  border: none;
  height: 35px;
  width: 35px;
  transition: background 1s;
  cursor: pointer;

  ${({ $toggleDone }) =>
    $toggleDone &&
    css`
      background-color: hsl(120, 100%, 25%);
      color: hsl(0, 0%, 100%);
      margin-right: 10px;

      &:hover {
        background-color: hsl(120, 100%, 35%);
      }
    `}

  ${({ $remove }) =>
    $remove &&
    css`
      background-color: hsl(348, 83%, 47%);
      margin-left: 10px;
      color: white;

      &:hover {
        background-color: hsl(348, 83%, 70%);
      }
    `}
`;
