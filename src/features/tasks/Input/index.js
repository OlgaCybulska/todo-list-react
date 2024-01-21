import styled from "styled-components";

export default styled.input`
  flex-basis: 1000px;
  border-radius: 0%;
  margin-right: 20px;
  padding: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint}px) {
    flex: 1 2 500px;
    margin-right: 0px;
    margin-bottom: 10px;
  }
`;
