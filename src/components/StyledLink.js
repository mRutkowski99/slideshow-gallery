import styled from "styled-components";

const Link = styled.a`
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #999;
  font-size: 1.2rem;
`;

const StyledLink = (props) => (
  <Link href={props.href || "#"} target={props.target || "_self"}>
    {props.children}
  </Link>
);

export default StyledLink;
