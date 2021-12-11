import { StyledNav } from "./Nav.styled";
import { ReactComponent as IconPrev } from "../assets/icon-back-button.svg";
import { ReactComponent as IconNext } from "../assets/icon-next-button.svg";
import iconNext from "../assets/icon-next-button.svg";
import useNav from "../hooks/useNav";

const Nav = () => {
  const {
    btnPrevDisabled,
    btnNextDisabled,
    prevPaintingHandler,
    nextPaintingHandler,
  } = useNav();

  return (
    <StyledNav>
      <button disabled={btnPrevDisabled} onClick={prevPaintingHandler}>
        <IconPrev />
      </button>
      <button disabled={btnNextDisabled} onClick={nextPaintingHandler}>
        <IconNext />
      </button>
    </StyledNav>
  );
};

export default Nav;
