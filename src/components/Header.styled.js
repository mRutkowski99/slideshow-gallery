import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  border-bottom: solid 1px #aaa;

  & + a {
    width: min(40%, 20rem);

    img {
      width: 100%;
      display: block;
    }
  }
`;
