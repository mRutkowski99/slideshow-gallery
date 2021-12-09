import GlobalStyles from "./GlobalStyles";
import Layout from "./layout/Layout";
import Gallery from "./pages/Gallery/Gallery";
import DetailPage from "./pages/Detail/DetailPage";
import Header from "./components/Header";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <DetailPage />
    </>
  );
}

export default App;
