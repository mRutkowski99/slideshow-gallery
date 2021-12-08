import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [windowWidth, setWidonWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeHandler = () => {
      setWidonWidth(window.innerWidth);
    };

    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  });

  return windowWidth;
};

export default useWindowWidth;
