import data from "../data.json";
import { useParams } from "react-router";

const useFooter = () => {
  const params = useParams();
  const artist = data[+params.id].artist.name;
  const title = data[+params.id].name;

  return {
    artist,
    title,
  };
};

export default useFooter;
