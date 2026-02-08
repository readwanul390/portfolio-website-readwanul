import resume from "../assets/resume.pdf";
import image from "../assets/hridoy.png";
import {
  FaFacebook,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { motion } from "framer-motion";

const name = "AbuSaid".split("");

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-14 px-6 pt-28 max-w-7xl mx-auto"
    >
      {/* Left Content */}
      <motion.div
        className="text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7 }}
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Hi, I'm{" "}
          <span className="inline-flex">
            {name.map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                animate={{
                  opacity: [0, 1, 1, 0],
                  y: [20, 0, 0, -20],
                  scale: [0.5, 1, 1, 0.5],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: index * 0.3,
                  times: [0, 0.2, 0.8, 1],
                }}
                style={{
                  backgroundImage: `linear-gradient(135deg, 
                    hsl(${(index * 50) % 360}, 100%, 65%), 
                    hsl(${(index * 50 + 90) % 360}, 100%, 75%))`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  display: "inline-block",
                }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        </h2>

        <motion.h3
          className="text-2xl md:text-3xl mt-4 text-gray-700 font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Frontend Developer
        </motion.h3>

        <motion.p
          className="mt-6 max-w-xl text-gray-600 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          I build modern, fast, and user-friendly web applications using React,
          TailwindCSS, and clean UI principles with a strong focus on performance
          and user experience.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href={resume}
            download
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-7 py-3 rounded-xl shadow-md hover:bg-blue-700 hover:scale-105 transition"
          >
            Download Resume
          </a>

          <a
            href="#projects"
            className="inline-flex items-center justify-center px-7 py-3 rounded-xl border border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 transition"
          >
            View Projects
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex gap-6 mt-8 text-2xl justify-center md:justify-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="https://www.linkedin.com/in/abu-said-mohammad-readwanul/"
            target="_blank"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/readwanul390"
            target="_blank"
            className="hover:text-blue-600 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/readwan.547"
            target="_blank"
            className="hover:text-blue-600 transition"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/sayedreadwanhridoy"
            target="_blank"
            className="hover:text-blue-600 transition"
          >
            <FaInstagramSquare />
          </a>
        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="relative flex items-center justify-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {/* Glow */}
        <div className="absolute w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 blur-3xl opacity-30" />

        {/* Image */}
        <motion.div
          className="relative w-56 h-56 md:w-72 md:h-72 rounded-full p-1 "
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src={image}
            alt="AbuSaid"
            className="w-full h-full object-cover rounded-full bg-white"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}