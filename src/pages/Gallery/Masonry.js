import { Column, StyledMasonry } from "./Masonry.styled";

import data from "../../data.json";
import useWindowWidth from "../../hooks/useWindowWidth";
import createPaintingsArray from "../../helpers/createPaintingsArray";

const paintingsArr = createPaintingsArray(data);

const Masonry = () => {
  const width = useWindowWidth();

  let columns = 1;
  if (width >= 650) columns = 2;
  if (width >= 1024) columns = 4;

  return (
    <StyledMasonry>
      {Array.from({ length: columns }, (_, idx) => (
        <Column key={idx}>
          {paintingsArr.filter(
            (painting) => painting.props.column % columns === idx
          )}
        </Column>
      ))}
    </StyledMasonry>
  );
};

export default Masonry;
