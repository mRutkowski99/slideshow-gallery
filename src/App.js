import GlobalStyles from "./GlobalStyles";
import Layout from "./layout/Layout";
import Masonry from "./pages/Gallery/Masonry";
import DetailPage from "./pages/Detail/DetailPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./helpers/ScrollToTop";

function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyles />
      <ScrollToTop />
      <AnimatePresence exitBeforeEnter>
        <Layout key={location.key}>
          <Header />
          <Routes location={location}>
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
      </AnimatePresence>
    </>
  );
}

export default App;
