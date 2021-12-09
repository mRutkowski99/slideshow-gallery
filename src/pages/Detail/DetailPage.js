import data from "../../data.json";
import { StyledDetailPage } from "./DetailPage.styled";
import DetailView from "./DetailView";
import Description from "./Description";

const DetailPage = () => {
  const painting = data[0];
  const { name, year, description, source } = painting;
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
      <Description description={description} source={source} year={year} />
    </StyledDetailPage>
  );
};

export default DetailPage;
