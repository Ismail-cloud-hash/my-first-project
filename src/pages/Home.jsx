import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaDownload, FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaGithub } from "react-icons/fa";

// Import your images
import img1 from "../assets/7b9f42e7-5970-4e31-8796-e30209502e92.jpg";
import img2 from "../assets/Phtoto-1.jpg";
import img3 from "../assets/about-photo.jpg";
import img4 from "../assets/8b4042e7-ae4c-429c-8a5d-4a753b66f21a.jpg";

export default function Home() {
  const images = [img1, img2, img3, img4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-20 pt-24 pb-20 bg-black">
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
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Ismail <span className="text-pink-500">Yousuf</span>
        </h1>
        <p className="text-gray-300 text-base sm:text-lg mt-2">
          Aspiring Front-End Developer based in Sri Lanka. Passionate about building fast, modern web applications and currently seeking internship opportunities to grow and contribute.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
          <a
            href="mailto:ismailyousufr15@gmail.com"
            className="bg-pink-600 px-6 py-2 rounded hover:bg-pink-700 text-white text-center transition duration-300"
          >
            Hire Me
          </a>

          <a
            href={`${import.meta.env.BASE_URL}Ismail_Yousuf_CV.pdf`}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border border-pink-500 text-pink-500 px-6 py-2 rounded flex items-center justify-center gap-2 transition duration-300 hover:bg-pink-600 hover:text-white transform hover:scale-105 hover:shadow-lg group"
          >
            Download CV
            <FaDownload className="text-lg group-hover:animate-bounce" />
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mt-8 justify-center md:justify-start text-2xl">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-500 transition hover:scale-110">
            <FaInstagram />
          </a>
          <a href="https://web.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-600 transition hover:scale-110">
            <FaFacebookF />
          </a>
          <a href="https://www.linkedin.com/in/ismail-yousuf-170020342" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-400 transition hover:scale-110">
            <FaLinkedinIn />
          </a>
          <a href="https://www.tiktok.com/@_.mr.ismail._" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-white transition hover:scale-110">
            <FaTiktok />
          </a>
          <a href="https://github.com/Ismail-cloud-hash" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-gray-400 transition hover:scale-110">
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Right Image Slider */}
      <div
        className="mt-10 md:mt-0 md:ml-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={images[currentImageIndex]}
          alt="Ismail Yousuf"
          className="w-[300px] sm:w-[400px] h-auto object-contain drop-shadow-xl mx-auto rounded-xl transition-all duration-700 ease-in-out"
        />
      </div>
    </section>
  );
}
