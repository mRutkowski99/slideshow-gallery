import { useNavigate } from "react-router";
import { useContext } from "react";
import Context from "../store/AppContext";

const useSlideshowBtn = () => {
  const navigate = useNavigate();
  const context = useContext(Context);

  const btnText = context.inGallery ? "start slideshow" : "stop slideshow";

  const toggleSlideshowHandler = (event) => {
    event.preventDefault();
    if (context.inGallery) navigate("/gallery/0");
    else navigate("/gallery");
  };

  return {
    btnText,
    toggleSlideshowHandler,
  };
};

export default useSlideshowBtn;
