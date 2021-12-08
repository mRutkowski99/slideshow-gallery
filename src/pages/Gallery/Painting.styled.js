import styled from "styled-components";

export const StyledPainting = styled.div`
  width: 100%;
  aspect-ratio: ${(props) => props.aspectRatio};
  background: linear-gradient(#0005, #0005), url(${(props) => props.bgSrc});
  background-position: center;
  background-size: cover;
  color: #fff;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;
