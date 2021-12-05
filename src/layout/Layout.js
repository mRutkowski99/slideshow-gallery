import Header from "./Header";
import { Main } from "./Layout.styled";

const Layout = (props) => {
  return (
    <>
      <Header />
      <Main>{props.children}</Main>
    </>
  );
};

export default Layout;
