import { StyledPainting } from "./Painting.styled";
import { useNavigate } from "react-router";

const paitingVariant = {
  hidden: {
    y: -20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const Painting = ({ title, author, src, aspectRatio, id }) => {
  const navigate = useNavigate();

  const displayDetailHandler = () => navigate("/gallery/" + id);

  return (
    <StyledPainting
      bgSrc={src}
      aspectRatio={aspectRatio}
      onClick={displayDetailHandler}
      variants={paitingVariant}
    >
      <h2>{title}</h2>
      <h3>{author}</h3>
    </StyledPainting>
  );
};

export default Painting;
