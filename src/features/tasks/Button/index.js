import styled from "styled-components";

export default styled.button`
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
