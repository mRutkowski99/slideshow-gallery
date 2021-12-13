import data from "../../data.json";
import { StyledDetailPage } from "./DetailPage.styled";
import DetailView from "./DetailView";
import Description from "./Description";
import { useParams } from "react-router";
import useAnimatedYear from "../../hooks/useAnimatedYear";
import { useContext } from "react";
import Context from "../../store/AppContext";

const DetailPage = () => {
  const params = useParams();
  const context = useContext(Context);

  context.toggleInGallery(false);

  const painting = data[params.id];
  const { name, year, description, source } = painting;
  const { name: artistName, image: artistImage } = painting.artist;
  const { thumbnail, thumbwidth, thumbheight } = painting.images;
  const { small: heroSmall, large: heroLarge } = painting.images.hero;

  const animatedYear = useAnimatedYear(year);

  const pageVariant = {
    hidden: {
      x: context.slideshowForwardDirection ? "100vw" : "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    exit: {
      x: context.slideshowForwardDirection ? "-100vw" : "100vw",
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <StyledDetailPage
      variants={pageVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <DetailView
        thumbnail={thumbnail}
        thumbRatio={thumbwidth / thumbheight}
        artistImage={artistImage}
        name={name}
        artistName={artistName}
      />
      <Description
        description={description}
        source={source}
        year={animatedYear}
      />
    </StyledDetailPage>
  );
};

export default DetailPage;
