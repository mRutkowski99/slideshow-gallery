import { Column, StyledMasonry } from "./Masonry.styled";

import useWindowWidth from "../../hooks/useWindowWidth";
import createPaintingsArray from "../../helpers/createPaintingsArray";

const paintingsArr = createPaintingsArray();

const masonryVariant = {
  hidden: {
    x: 0,
  },
  visible: {
    x: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const columnVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      staggerChildren: 0.4,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      staggerChildren: 0.4,
      when: "beforeChildren",
    },
  },
};

const Masonry = () => {
  const width = useWindowWidth();

  let columns = 1;
  if (width >= 650) columns = 2;
  if (width >= 1024) columns = 4;

  return (
    <StyledMasonry
      variants={masonryVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {Array.from({ length: columns }, (_, idx) => (
        <Column key={idx} variants={columnVariant}>
          {paintingsArr.filter(
            (painting) => painting.props.column % columns === idx
          )}
        </Column>
      ))}
    </StyledMasonry>
  );
};

export default Masonry;
