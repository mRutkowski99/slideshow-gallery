import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  gap: 2rem;

  button {
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    color: #000;
    transition: all 0.2s;

    &:hover {
      transform: scale(1.2);
    }

    &:disabled {
      color: #aaa;

      &:hover {
        transform: none;
      }
    }
  }
`;
