import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Locations from "./pages/Locations/Locations.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import ScrollToTop from "./utils/ScrollToTop.jsx";
import WebDesign from "./pages/WebDesign/WebDesign.jsx";
import AppDesign from "./pages/AppDesign/AppDesign.jsx";
import GraphicDesign from "./pages/GraphicDesign/GraphicDesign.jsx";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/web-design" element={<WebDesign />} />
        <Route path="/app-design" element={<AppDesign />} />
        <Route path="/graphic-design" element={<GraphicDesign />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
