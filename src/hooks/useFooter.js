import data from "../data.json";
import { useContext } from "react";
import Context from "../store/AppContext";

const useFooter = () => {
  const context = useContext(Context);
  const artist = data[context.pageId].artist.name;
  const title = data[context.pageId].name;

  return {
    artist,
    title,
  };
};

export default useFooter;
