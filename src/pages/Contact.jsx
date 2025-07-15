import { useState } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTiktok,
  FaGithub,
} from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(() => {
        toast.success("Message sent successfully!");
        setLoading(false);
        e.target.reset();
      })
      .catch(() => {
        toast.error("Something went wrong. Try again.");
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-6 py-12 md:flex md:items-center md:justify-center gap-12">
      <Toaster />

      {/* Contact Info */}
      <motion.div
        className="space-y-6 max-w-md"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-extrabold text-white">Contact Me</h2>
        <p className="text-gray-300">
          I'm open to freelance projects, collaborations, or just a friendly hello. Drop a message and I’ll get back to you soon!
        </p>
        <div className="space-y-4 text-sm">
          <div className="flex items-center gap-3">
            <span className="bg-yellow-500 text-black rounded-full p-2 text-lg">📞</span>
            +94 74 244 0640
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-yellow-500 text-black rounded-full p-2 text-lg">📍</span>
            100/3/B/1/A,VIJAYAWIMALARATHNA RD,MAHABUTHGAMUWA,ANGODA
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-yellow-500 text-black rounded-full p-2 text-lg">📧</span>
            ismailyousufr15@gmail.com
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-8 text-xl">
          <motion.a
            href="https://www.instagram.com/"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3, rotate: 10 }}
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="https://web.facebook.com/"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3, rotate: 10 }}
          >
            <FaFacebookF />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/ismail-yousuf-170020342"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3, rotate: 10 }}
          >
            <FaLinkedinIn />
          </motion.a>
          <motion.a
            href="https://www.tiktok.com/@_.mr.ismail._"
            aria-label="TikTok"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3, rotate: 10 }}
          >
            <FaTiktok />
          </motion.a>
          <motion.a
            href="https://github.com/Ismail-cloud-hash"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3, rotate: 10 }}
          >
            <FaGithub />
          </motion.a>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        className="mt-12 md:mt-0 bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg w-full max-w-md"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="user_name"
            placeholder="Your name"
            required
            className="w-full bg-transparent border border-gray-500 p-3 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="text"
            name="user_phone"
            placeholder="Phone number"
            className="w-full bg-transparent border border-gray-500 p-3 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your email"
            required
            className="w-full bg-transparent border border-gray-500 p-3 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full bg-transparent border border-gray-500 p-3 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-yellow-400 text-black font-semibold py-3 px-6 w-full rounded hover:bg-yellow-500 transition"
          >
            {loading ? "Sending..." : "Let's Connect"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
