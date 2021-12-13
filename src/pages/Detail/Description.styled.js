import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledDescription = styled(motion.section)`
  padding: 10rem 0 2rem;
  position: relative;

  &::before {
    content: "${(props) => props.year}";
    position: absolute;
    top: 0;
    right: 0;
    z-index: -10;
    font-size: 12rem;
    color: #dfdfdf;
  }
`;
