import { StyledPainting } from "./Painting.styled";
import { useNavigate } from "react-router";

const Painting = ({ title, author, src, aspectRatio, id }) => {
  const navigate = useNavigate();

  const displayDetailHandler = () => navigate("/gallery/" + id);

  return (
    <StyledPainting
      bgSrc={src}
      aspectRatio={aspectRatio}
      onClick={displayDetailHandler}
    >
      <h2>{title}</h2>
      <h3>{author}</h3>
    </StyledPainting>
  );
};

export default Painting;
