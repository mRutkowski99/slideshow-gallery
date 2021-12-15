import { useEffect, useState } from "react";
import { useParams } from "react-router";

const useSlideshowDirection = () => {
  const [prevLocation, setPrevLocation] = useState(0);
  const [forward, setForward] = useState(true);
  const params = useParams();

  return {
    forward,
  };
};

export default useSlideshowDirection;
