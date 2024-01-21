import styled from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;

  &.active {
    font-weight: bold;
    color: teal;
  }
`;
