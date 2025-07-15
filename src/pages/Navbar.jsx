import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaTimes, FaArrowUp } from "react-icons/fa";
import logo from "../assets/YI.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("theme") === "light" ? false : true
  );

  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollY / docHeight) * 100;
      setScrolled(scrollY > 10);
      setShowScrollTop(scrollY > 300);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-pink-500 z-[60] transition-all"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <nav
        className={`fixed w-full top-0 left-0 z-50 px-4 py-4 sm:px-8 flex justify-between items-center
        transition-all duration-300 backdrop-blur-md bg-opacity-80
        ${darkMode ? "bg-black text-white" : "bg-white text-black"}
        ${scrolled ? "shadow-md" : ""}`}
      >
        {/* Logo */}
        <Link to="/" onClick={closeMenu}>
          <motion.img
            src={logo}
            alt="Logo"
            className="h-16 w-auto object-contain"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1.2 }}
            whileHover={{ scale: 1.3, rotate: 3 }}
            whileTap={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-base font-medium">
          {links.map(({ name, path }) => (
            <li key={name}>
              <Link
                to={path}
                className={`transition hover:text-pink-500 relative group ${
                  location.pathname === path ? "text-pink-500 font-semibold" : ""
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Dark/Light Toggle */}
        <button
          onClick={toggleTheme}
          className="hidden md:block text-sm border px-4 py-1 rounded-full hover:bg-pink-500 hover:text-white transition"
        >
          {darkMode ? "Light" : "Dark"} Mode
        </button>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl z-50 relative focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu + Backdrop */}
        <AnimatePresence>
          {menuOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-md z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeMenu}
              />

              <motion.div
                className={`fixed top-0 right-0 w-4/5 sm:w-2/3 h-full z-50 p-8
                ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <ul className="flex flex-col gap-6 mt-10 text-lg font-medium">
                  {links.map(({ name, path }) => (
                    <li key={name}>
                      <Link
                        to={path}
                        onClick={closeMenu}
                        className={`block py-2 ${
                          location.pathname === path
                            ? "text-pink-500 font-semibold"
                            : ""
                        }`}
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={toggleTheme}
                  className="mt-8 border px-4 py-2 rounded hover:bg-pink-500 hover:text-white transition"
                >
                  Toggle {darkMode ? "Light" : "Dark"} Mode
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-pink-500 text-white shadow-lg hover:bg-pink-600 transition"
          onClick={handleScrollTop}
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}
