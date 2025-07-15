import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar"; // ✅ correct path path is correct
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20"> {/* to offset fixed navbar height */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
