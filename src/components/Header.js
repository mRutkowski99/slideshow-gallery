import logo from "../assets/logo.svg";
import { StyledHeader } from "./Header.styled";
import StyledLink from "./StyledLink";

import { useLocation, useNavigate } from "react-router";
import useSlideshowBtn from "../hooks/useSlideshowBtn";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const toGalleryHandler = () => navigate("/gallery");

  const { btnText, toggleSlideshowHandler } = useSlideshowBtn(
    location.pathname
  );

  return (
    <StyledHeader>
      <img src={logo} alt="Gallery App logo" onClick={toGalleryHandler} />

      <StyledLink onClick={toggleSlideshowHandler}>{btnText}</StyledLink>
    </StyledHeader>
  );
};

export default Header;
