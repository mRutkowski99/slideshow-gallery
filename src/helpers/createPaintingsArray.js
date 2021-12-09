import Painting from "../pages/Gallery/Painting";

const createPaintingsArray = (data) => {
  return data.map((painting, idx) => {
    const author = painting.artist.name;
    const aspectRatio =
      painting.images.gallerywidth / painting.images.galleryheight;
    const src = painting.images.gallery;

    return (
      <Painting
        key={idx}
        id={idx}
        column={Math.floor(idx / 4)}
        title={painting.name}
        author={author}
        aspectRatio={aspectRatio}
        src={src}
      />
    );
  });
};

export default createPaintingsArray;
