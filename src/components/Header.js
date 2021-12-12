import logo from "../assets/logo.svg";
import { StyledHeader } from "./Header.styled";
import StyledLink from "./StyledLink";

import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import useSlideshowBtn from "../hooks/useSlideshowBtn";

const Header = () => {
  const { btnText, toggleSlideshowHandler } = useSlideshowBtn();

  return (
    <StyledHeader>
      <Link to="gallery">
        <img src={logo} alt="Gallery App logo" />
      </Link>

      <StyledLink onClick={toggleSlideshowHandler}>{btnText}</StyledLink>
    </StyledHeader>
  );
};

export default Header;
