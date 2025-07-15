import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import aboutPhoto from "../assets/about-photo.jpg";

const projectsData = [
  {
    title: "Crypto App",
    type: "web",
    image: aboutPhoto,
    github: "https://github.com/yourprofile",
    live: "https://yourdomain.com/crypto-app",
  },
  {
    title: "MobileHub",
    type: "mobile",
    image: aboutPhoto,
    github: "https://github.com/yourprofile",
    live: "https://yourdomain.com/mobilehub",
  },
  {
    title: "Dashboard UI",
    type: "design",
    image: aboutPhoto,
    github: "",
    live: "",
  },
];

const filters = ["all", "web", "mobile", "design"];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("all");
  const [modalProject, setModalProject] = useState(null);

  const filtered = activeTab === "all"
    ? projectsData
    : projectsData.filter((p) => p.type === activeTab);

  return (
    <div className="bg-black text-white min-h-screen py-16 px-4 md:px-20">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-pink-500 mb-2 text-center"
      >
        My Work
      </motion.h2>
      <p className="text-center text-gray-400 mb-10">
        Browse featured projects below
      </p>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {filters.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1 rounded-full border ${
              activeTab === tab
                ? "bg-pink-600 text-white"
                : "text-white border-white"
            } transition`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {filtered.map((project, idx) => (
          <motion.div
            key={idx}
            onClick={() => setModalProject(project)}
            className="bg-zinc-900 rounded-lg overflow-hidden shadow-md hover:shadow-pink-500 transition cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-400 capitalize">{project.type}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalProject(null)}
          >
            <motion.div
              className="bg-zinc-800 p-6 rounded-lg relative w-full max-w-2xl mx-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalProject(null)}
                className="absolute top-4 right-4 text-white text-xl"
              >
                <FaTimes />
              </button>
              <img
                src={modalProject.image}
                alt={modalProject.title}
                className="w-full h-64 object-cover rounded"
              />
              <h3 className="text-2xl font-bold mt-4">{modalProject.title}</h3>
              <p className="text-gray-400 capitalize">{modalProject.type}</p>
              <div className="flex gap-4 mt-4 text-xl">
                {modalProject.github && (
                  <a
                    href={modalProject.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                  </a>
                )}
                {modalProject.live && (
                  <a href={modalProject.live} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

       {/* Social Links */}
          <div className="mt-12 flex justify-center gap-6 text-3xl">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition hover:scale-125 duration-300" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://web.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition hover:scale-125 duration-300" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.linkedin.com/in/ismail-yousuf-170020342" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition hover:scale-125 duration-300" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.tiktok.com/@_.mr.ismail._" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition hover:scale-125 duration-300" aria-label="TikTok">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="https://github.com/Ismail-cloud-hash" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 dark:hover:text-gray-200 transition hover:scale-125 duration-300" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
          </div>
    </div>
  );
}
