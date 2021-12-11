import Nav from "./Nav";
import ProgressBar from "./ProgressBar";
import { StyledFooter } from "./Footer.styled";
import useFooter from "../hooks/useFooter";

const Footer = () => {
  const { artist, title } = useFooter();

  return (
    <StyledFooter>
      <ProgressBar />
      <div>
        <div>
          <h4>{title}</h4>
          <h5>{artist}</h5>
        </div>
        <Nav />
      </div>
    </StyledFooter>
  );
};

export default Footer;
