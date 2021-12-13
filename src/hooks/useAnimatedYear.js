import { useEffect, useState } from "react";

const wait = (sec) => {
  return new Promise((resolve) => setTimeout(resolve, sec * 1000));
};

const useAnimatedYear = (yearNum) => {
  const yearCharsArr = yearNum.toString().split("");
  const [index, setIndex] = useState(0);
  const [year, setYear] = useState("");

  useEffect(() => {
    if (index > 3) return;

    const interval = setTimeout(() => {
      setYear((prev) => (prev += yearCharsArr[index]));
      setIndex((prev) => prev + 1);
    }, 600);

    return () => clearTimeout(interval);
  }, [index, year, yearCharsArr]);

  return year;
};

export default useAnimatedYear;
