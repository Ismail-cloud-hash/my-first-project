import { Typewriter } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaGithub,
} from "react-icons/fa";
import ismailImg from "../assets/AIS.png";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-20 py-20 bg-black">
      {/* Left Content */}
      <div className="text-white max-w-xl text-center md:text-left">
        <h3 className="text-pink-400 text-base sm:text-lg mb-4 uppercase tracking-widest">
          <Typewriter
            words={[
              "Welcome to My World",
              "I’m Ismail Yousuf",
              "Front-End Developer",
              "Currently seeking internship opportunities to grow and contribute.",
              "Let’s Build Something Great",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h3>

        <h2 className="text-lg sm:text-xl text-gray-400">Hello, I'm</h2>
        <h1 className="text-4xl sm:text-5xl font-bold mb-3">
          Ismail <span className="text-pink-500">Yousuf</span>
        </h1>
        <p className="text-gray-300 text-base sm:text-lg">
          Aspiring Front-End Developer based in Sri Lanka. Passionate about building fast, modern web applications and currently seeking internship opportunities to grow and contribute.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
          <a
            href="mailto:ismailyousufr15@gmail.com"
            className="bg-pink-600 px-6 py-2 rounded hover:bg-pink-700 text-center"
          >
            Hire Me
          </a>
          <a
            href="/Ismail_Yousuf_CV.pdf"
            download="Ismail_Yousuf_CV.pdf"
            className="border border-pink-600 px-6 py-2 rounded hover:bg-pink-600 text-center"
          >
            Download CV
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mt-8 justify-center md:justify-start text-2xl">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition hover:scale-110 duration-300" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://web.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition hover:scale-110 duration-300" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://www.linkedin.com/in/ismail-yousuf-170020342" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition hover:scale-110 duration-300" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="https://www.tiktok.com/@_.mr.ismail._" target="_blank" rel="noopener noreferrer" className="hover:text-white transition hover:scale-110 duration-300" aria-label="TikTok">
            <FaTiktok />
          </a>
          <a href="https://github.com/Ismail-cloud-hash" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition hover:scale-110 duration-300" aria-label="GitHub">
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="mt-10 md:mt-0 md:ml-10">
        <img
          src={ismailImg}
          alt="Ismail Yousuf"
          className="w-[300px] sm:w-[400px] h-auto object-contain drop-shadow-xl mx-auto"
        />
      </div>
    </section>
  );
}
