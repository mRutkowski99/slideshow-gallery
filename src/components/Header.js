import logo from "../assets/logo.svg";
import { StyledHeader } from "./Header.styled";
import StyledLink from "./StyledLink";

const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} alt="Gallery App logo" />

      <StyledLink>start slideshow</StyledLink>
    </StyledHeader>
  );
};

export default Header;
