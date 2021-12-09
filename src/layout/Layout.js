import Header from "../components/Header";
import { Main } from "./Layout.styled";

const Layout = (props) => {
  return (
    <>
      <Main>{props.children}</Main>
    </>
  );
};

export default Layout;
