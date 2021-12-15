import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.8);

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    aspect-ratio: ${(props) => props.ratio};
    max-height: 90vh;

    button {
      border: none;
      outline: none;
      font: inherit;
      background-color: transparent;
      color: #fff;
      text-transform: uppercase;
      letter-spacing: 1px;
      padding: 1rem 0;
      cursor: pointer;
    }

    img {
      display: block;
      width: 100%;
      /* max-height: 85vh; */
    }
  }
`;
