import data from "../../data.json";
import { StyledDetailPage } from "./DetailPage.styled";
import DetailView from "./DetailView";

const DetailPage = () => {
  const painting = data[0];
  const { name, description, source } = painting;
  const { name: artistName, image: artistImage } = painting.artist;
  const { thumbnail, thumbwidth, thumbheight } = painting.images;
  const { small: heroSmall, large: heroLarge } = painting.images.hero;

  return (
    <StyledDetailPage>
      <DetailView
        thumbnail={thumbnail}
        thumbRatio={thumbwidth / thumbheight}
        artistImage={artistImage}
        name={name}
        artistName={artistName}
      />
      <div>description</div>
    </StyledDetailPage>
  );
};

export default DetailPage;
