import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";
import useScrollToTop from "./hooks/useScrollToTop";
import useTitle from "./hooks/useTitle";
import {
  Anfahrt,
  Datenschutz,
  Ehrenbrief,
  Home,
  Impressum,
  Links,
  Zoo,
  Öffnungszeiten,
} from "./pages";

function App() {
  useScrollToTop();
  useTitle();
  return (
    <>
      <Header />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Oeffnungszeiten" element={<Öffnungszeiten />} />
        <Route path="/Zoo" element={<Zoo />} />
        <Route path="/Ehrenbrief" element={<Ehrenbrief />} />
        <Route path="/Anfahrt" element={<Anfahrt />} />
        <Route path="/Links" element={<Links />} />
        <Route path="/Impressum" element={<Impressum />} />
        <Route path="/Datenschutz" element={<Datenschutz />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  });
  return <></>;
}
