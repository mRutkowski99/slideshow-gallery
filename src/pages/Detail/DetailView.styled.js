import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledDetailView = styled(motion.section)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: min-content min-content;
  gap: 2rem;

  .painting-container {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    background-image: url(${(props) => props.thumbnail});
    background-position: center;
    background-size: cover;
    width: 100%;
    aspect-ratio: ${(props) => props.ratio};

    @media (min-width: 700px) {
      grid-column: 1 / 5;
    }
  }

  .title-container {
    grid-column: 1 / -2;
    grid-row: 1 / 2;
    justify-self: start;
    align-self: end;
    z-index: 1;
    width: 100%;
    background-color: #fff;
    padding: 2rem;

    @media (min-width: 700px) {
      grid-column: 4 / -1;
      align-self: start;

      & > h4 {
        font-size: 4rem;
      }
    }
  }

  img {
    grid-column: 1 / 2;
    grid-row: 2 / 3;

    @media (min-width: 700px) {
      grid-column: 5 / 6;
      grid-row: 1 / 2;
      align-self: end;
    }
  }
`;
