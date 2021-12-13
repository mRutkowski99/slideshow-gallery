import GlobalStyles from "./GlobalStyles";
import Layout from "./layout/Layout";
import Masonry from "./pages/Gallery/Masonry";
import DetailPage from "./pages/Detail/DetailPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./helpers/ScrollToTop";
import Context, { ContextProvider } from "./store/AppContext";
import { useContext } from "react";

function App() {
  const location = useLocation();
  const context = useContext(Context);

  return (
    <ContextProvider>
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
                </>
              }
            />
          </Routes>
          {!context.inGallery && <Footer />}
        </Layout>
      </AnimatePresence>
    </ContextProvider>
  );
}

export default App;
