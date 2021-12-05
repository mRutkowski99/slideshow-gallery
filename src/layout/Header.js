import logo from "../assets/shared/logo.svg";
import { StyledHeader, SlideshowLink } from "./Header.styled";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} alt="Gallery App logo" />

      <SlideshowLink>start slideshow</SlideshowLink>
    </StyledHeader>
  );
};

export default Header;
