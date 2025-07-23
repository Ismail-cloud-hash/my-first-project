import { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaCode, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import img1 from "../assets/Star.jpg";
import img2 from "../assets/about-photo.jpg";
import img3 from "../assets/hero.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  return (
      <div className="pt-20 min-h-screen bg-white text-black dark:bg-black dark:text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-pink-600 mb-8">About Me</h1>

        {/* Image Carousel */}
        <Swiper
          spaceBetween={30}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay]}
          className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mx-auto mb-8 shadow-lg"
        >
          {[img1, img2, img3].map((img, idx) => (
            <SwiperSlide key={idx}>
              <img src={img} alt={`Profile ${idx + 1}`} className="object-cover w-full h-full" />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Center paragraph with animation */}
        <motion.p
          className="text-center max-w-4xl mx-auto mb-12 text-lg md:text-xl text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          I'm a <span className="text-pink-500 font-semibold">passionate developer</span> who loves building modern, responsive apps with beautiful UI and robust backend. Whether it's developing APIs, designing elegant interfaces, or collaborating on teams — I'm always excited to <span className="text-pink-500 font-semibold">innovate, grow, and deliver impact</span>.
        </motion.p>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-6">
          {[
            { key: "skills", label: "Skills", icon: <FaCode /> },
            { key: "experience", label: "Experience", icon: <FaBriefcase /> },
            { key: "education", label: "Education", icon: <FaGraduationCap /> },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all shadow-sm border ${
                activeTab === tab.key
                  ? "bg-pink-900 text-pink-400"
                  : "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300 hover:text-white"
              }`}
              data-tooltip-id="tab-tip"
              data-tooltip-content={`View ${tab.label}`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>
        <Tooltip id="tab-tip" />

        {/* Tab Content */}
        <div className="max-w-3xl mx-auto mt-6 space-y-4 text-gray-700 dark:text-gray-300 text-lg">
          {activeTab === "skills" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p><span className="text-pink-600 font-semibold">Frontend Development: </span>  HTML, CSS, JavaScript, SCSS, Bootstrap, React.js, Tailwind CSS, Responsive Web Design, Basic animations using JavaScript and CSS.</p>
              <p><span className="text-pink-600 font-semibold">Backend Development:</span>  Python (OOP), Java (OOP), C#, PHP, Node.js – with experience in desktop and console application development.</p>
              <p><span className="text-pink-600 font-semibold">UI/UX Design:</span> Figma, Adobe XD, Canva – proficient in wireframing, prototyping, and creating user-centered interface designs.</p>

              <p><span className="text-pink-600 font-semibold">Tools & Platforms:</span> Git & GitHub, Visual Studio Code, Android Studio, NetBeans, Postman.</p>

              <p><span className="text-pink-600 font-semibold">Soft Skills:</span>  Strong problem-solving abilities, excellent teamwork, time management, and communication skills. Fluent in English, Sinhala, and Tamil.</p>
            </motion.div>
          )}

          {activeTab === "experience" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p><span className="text-pink-600 font-semibold"> Student Management System</span> — Java Developed a desktop-based system for managing student records using Java OOP concepts. Features include add/update/delete student profiles and course enrollment.  </p>

              <p><span className="text-pink-600 font-semibold">Shipment Management System </span> — Python Console App EXPERIENCE Built for GreenTech Logistics with FIFO and
              LIFO structures. Managed real-time order flow and dispatching processes.  </p>

              <p><span className="text-pink-600 font-semibold"> Learnova E-Learning UI/UX Prototype </span> — Figma PROJECT Designed an intuitive and responsive interface for an
              online learning platform. Focused on user flow, visual hierarchy, and mobile-first design.  </p>

              <p><span className="text-pink-600 font-semibold"> Gym Management System  </span> — C# Created a Windows Forms Application for tracking memberships, attendance, and
              payments. Integrated basic reporting and role-based access. </p>

              <p><span className="text-pink-600 font-semibold">  Benz Car Website </span> — HTML, CSS, JavaScript Developed a fully responsive car showcase site with animations, gallery,
              and modal effects. Features video backgrounds and interactive navigation.  </p>

              <p><span className="text-pink-600 font-semibold"> Portfolio Website</span> — MERN Stack Full-stack project with React, Node.js, Express, MongoDB. Includes contact form, project portfolio, and GitHub integration. </p>
                            
            </motion.div>
          )}

          {activeTab === "education" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p><span className="text-pink-600 font-semibold"> 2020 - ORDINARY LEVEL:</span> In CRESENT SCHOOL INTERNATIONAL </p>

              <p><span className="text-pink-600 font-semibold"> 2022 - DIPLOMA IN INFORMATION TECHNOLOGY</span> Pearson BTEC Completed </p>

              <p><span className="text-pink-600 font-semibold"> English Language Course</span> Intermediate Level
            British Council – Completed </p>

              <p><span className="text-pink-600 font-semibold">Higher National Diploma:</span> Pearson BTEC</p>
              <p><span className="text-pink-600 font-semibold">Top-up Degree:</span> UK University via Achievers Campus</p>
              <p><span className="text-pink-600 font-semibold">Projects Completed:</span> <CountUp end={5} duration={2} />+</p>
              <p><span className="text-pink-600 font-semibold">Clients Served:</span> <CountUp end={2} duration={2} />+</p>
            </motion.div>

            
          )}

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
      </div>
    </div>
  );
}
