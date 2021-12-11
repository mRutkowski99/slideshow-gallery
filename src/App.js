import GlobalStyles from "./GlobalStyles";
import Layout from "./layout/Layout";
import Masonry from "./pages/Gallery/Masonry";
import DetailPage from "./pages/Detail/DetailPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./helpers/ScrollToTop";

function App() {
  return (
    <>
      <GlobalStyles />
      <ScrollToTop />
      <Layout>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/gallery" />} />
          <Route path="/gallery" element={<Masonry />} />
          <Route
            path="/gallery/:id"
            element={
              <>
                <DetailPage />
                <Footer />
              </>
            }
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
