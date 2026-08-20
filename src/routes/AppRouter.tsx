import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Templates from "../pages/Templates";
import Pricing from "../pages/Pricing";
import Builder from "../pages/Builder";

function Layout() {
  const location = useLocation();

  const isBuilderPage = location.pathname.startsWith("/builder");

  return (
    <>
      {!isBuilderPage && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/builder/:templateId" element={<Builder />} />
      </Routes>
    </>
  );
}

function AppRouter() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default AppRouter;