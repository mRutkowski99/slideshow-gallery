import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  border-bottom: solid 1px #aaa;
  max-width: 120rem;
  margin: 0 auto;

  img {
    width: min(40%, 20rem);
    cursor: pointer;
  }
`;
