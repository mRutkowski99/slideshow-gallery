import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const useSlideshowBtn = (location) => {
  const navigate = useNavigate();
  const [inGallery, setInGallery] = useState(true);

  useEffect(() => setInGallery(location === "/gallery"), [location]);

  const btnText = inGallery ? "start slideshow" : "stop slideshow";

  const toggleSlideshowHandler = () => {
    if (inGallery) navigate("/gallery/0");
    else navigate("/gallery");
  };

  return {
    btnText,
    toggleSlideshowHandler,
  };
};

export default useSlideshowBtn;
