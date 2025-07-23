import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaArrowUp,
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelope,
} from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import logo from "../assets/YI.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") !== "light"
  );

  const location = useLocation();

  const links = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaUser /> },
    { name: "Portfolio", path: "/portfolio", icon: <FaFolderOpen /> },
    { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
  ];

  const toggleMenu = () => setMenuOpen((prev) => !prev);
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

    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-pink-500 z-[60] transition-all"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full h-20 z-50 px-4 py-4 sm:px-8 flex justify-between items-center transition-all duration-300
        ${darkMode ? "bg-black text-white" : "bg-white text-black"} ${scrolled ? "shadow-md backdrop-blur-md bg-opacity-80" : ""}`}
      >
        {/* Logo */}
        <Link to="/" onClick={closeMenu}>
          <motion.img
            src={logo}
            alt="Logo"
            className="h-14 sm:h-16 w-auto object-contain"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ duration: 0.4 }}
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-base font-medium">
          {links.map(({ name, path }) => (
            <li key={name}>
              <Link
                to={path}
                className={`relative group transition ${
                  location.pathname === path ? "text-pink-500 font-semibold" : ""
                }`}
              >
                {name}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-pink-500 transition-all scale-x-0 group-hover:scale-x-100 origin-left
                  ${location.pathname === path ? "scale-x-100" : ""}`}
                  style={{ width: "100%" }}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Theme Toggle (Desktop) */}
        <button
          onClick={toggleTheme}
          className="hidden md:flex items-center gap-2 text-sm border px-4 py-1 rounded-full hover:bg-pink-500 hover:text-white transition"
        >
          {darkMode ? <BsSun /> : <BsMoon />} {darkMode ? "Light" : "Dark"}
        </button>

        {/* Hamburger (Animated) */}
        <div className="md:hidden z-[60]">
          <button
            onClick={toggleMenu}
            className="relative w-8 h-8 focus:outline-none group"
          >
            <div
              className={`absolute h-0.5 w-8 bg-current transform transition duration-300 ease-in-out ${
                menuOpen ? "rotate-45 top-3.5" : "top-2"
              }`}
            />
            <div
              className={`absolute h-0.5 w-8 bg-current transition-all duration-300 ease-in-out ${
                menuOpen ? "opacity-0" : "top-4"
              }`}
            />
            <div
              className={`absolute h-0.5 w-8 bg-current transform transition duration-300 ease-in-out ${
                menuOpen ? "-rotate-45 top-3.5" : "top-6"
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeMenu}
              />

              {/* Drawer */}
              <motion.div
                className="fixed top-0 right-0 w-[75%] sm:w-[60%] h-full bg-pink-600 text-white z-50 p-8 rounded-l-3xl shadow-2xl border-l border-white/10"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <ul className="mt-16 space-y-6 text-xl font-medium">
                  {links.map(({ name, path, icon }) => (
                    <li key={name} className="flex items-center gap-4">
                      {icon}
                      <Link
                        to={path}
                        onClick={closeMenu}
                        className={`${
                          location.pathname === path
                            ? "font-bold underline"
                            : ""
                        }`}
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
                  <br />
                <button
                  onClick={toggleTheme}
                  className="mt-8 flex items-center gap-2 px-5 py-2 mx-auto border-2 rounded-full border-white text-white hover:bg-white hover:text-pink-600 transition duration-300"
                >
                  {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
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
