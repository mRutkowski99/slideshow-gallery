import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  border-bottom: solid 1px #aaa;

  img {
    width: 40%;
  }
`;

export const SlideshowLink = styled.a`
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #999;
  text-align: right;
  font-size: 1.2rem;
`;
