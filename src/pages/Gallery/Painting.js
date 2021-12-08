import { StyledPainting } from "./Painting.styled";

const Painting = ({ title, author, src, aspectRatio }) => {
  return (
    <StyledPainting bgSrc={src} aspectRatio={aspectRatio}>
      <h2>{title}</h2>
      <h3>{author}</h3>
    </StyledPainting>
  );
};

export default Painting;
