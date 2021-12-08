import GlobalStyles from "./GlobalStyles";
import Layout from "./layout/Layout";
import Gallery from "./pages/Gallery/Gallery";

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Gallery />
      </Layout>
    </>
  );
}

export default App;
