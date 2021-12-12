import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledMasonry = styled(motion.main)`
  padding: 2rem;
  display: flex;
  gap: 4rem;
`;

export const Column = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;
