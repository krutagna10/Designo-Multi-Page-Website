import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Locations from "./pages/Locations/Locations.jsx";
import Contact from "./pages/Contact/Contact.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
