import { StyledLayout } from "./Layout.styled";

const Layout = (props) => {
  return <StyledLayout>{props.children}</StyledLayout>;
};

export default Layout;
