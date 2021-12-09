import GlobalStyles from "./GlobalStyles";
import Layout from "./layout/Layout";
import Gallery from "./pages/Gallery/Gallery";
import DetailPage from "./pages/Detail/DetailPage";
import Header from "./components/Header";

import { Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./helpers/ScrollToTop";

function App() {
  return (
    <>
      <GlobalStyles />
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/gallery" />} />
        <Route
          path="/gallery"
          element={
            <Layout>
              <Gallery />
            </Layout>
          }
        />
        <Route path="/gallery/:id" element={<DetailPage />} />
      </Routes>
    </>
  );
}

export default App;
