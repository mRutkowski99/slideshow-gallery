import StyledLink from "../../components/StyledLink";
import { StyledDescription } from "./Description.styled";

const Description = (props) => {
  return (
    <StyledDescription year={props.year}>
      <p>{props.description}</p>
      <StyledLink href={props.source} target="_blank">
        Go to source
      </StyledLink>
    </StyledDescription>
  );
};

export default Description;
