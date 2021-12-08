import { Column } from "../../layout/Layout.styled";

import data from "../../data.json";
import useWindowWidth from "../../hooks/useWindowWidth";
import createPaintingsArray from "../../hooks/createPaintingsArray";

const paintingsArr = createPaintingsArray(data);

const Gallery = () => {
  const width = useWindowWidth();

  let columns = 1;
  if (width >= 650) columns = 2;
  if (width >= 1024) columns = 4;

  return Array.from({ length: columns }, (_, idx) => (
    <Column key={idx}>
      {paintingsArr.filter(
        (painting) => painting.props.column % columns === idx
      )}
    </Column>
  ));
};

export default Gallery;
