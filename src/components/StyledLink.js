import styled from "styled-components";

const Link = styled.a`
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #999;
  font-size: 1.2rem;
  transition: all 0.2s;

  &:hover {
    color: #666;
    transform: scale(1.2);
  }
`;

const StyledLink = (props) => (
  <Link
    href={props.href || ""}
    target={props.target || ""}
    onClick={props.onClick}
  >
    {props.children}
  </Link>
);

export default StyledLink;
