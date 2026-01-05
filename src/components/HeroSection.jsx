import resume from "../assets/resume.pdf";
import image from "../assets/hridoy.png";
import { FaFacebook, FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-14 px-6 pt-28 max-w-7xl mx-auto"
    >
      {/* Left Content */}
      <div className="text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Hi, I’m <span className="text-blue-600">AbuSaid</span>
        </h2>

        <h3 className="text-2xl md:text-3xl mt-4 text-gray-700 font-medium">
          Frontend Developer
        </h3>

        <p className="mt-6 max-w-xl text-gray-600 leading-relaxed">
          I build modern, fast, and user-friendly web applications using React,
          TailwindCSS, and clean UI principles with a strong focus on performance
          and user experience.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
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
        </div>

        {/* Social Links */}
        <div className="flex gap-6 mt-8 text-2xl justify-center md:justify-start">
          <a href="https://www.linkedin.com/in/abu-said-mohammad-readwanul/" className="hover:text-blue-600 transition"><FaLinkedin/></a>
          <a href="https://github.com/readwanul390" className="hover:text-blue-600 transition"><FaGithub /></a>
          <a href="https://www.facebook.com/readwan.547" className="hover:text-blue-600 transition"><FaFacebook /></a>
          <a href="https://www.instagram.com/sayedreadwanhridoy" className="hover:text-blue-600 transition"><FaInstagramSquare /></a>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative flex items-center justify-center">
        {/* Glow background */}
        <div className="absolute w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 blur-3xl opacity-30" />

        {/* Image wrapper */}
        <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full p-1 bg-gradient-to-tr from-blue-500 to-purple-500 shadow-xl">
          <img
            src={image}
            alt="AbuSaid"
            className="w-full h-full object-cover rounded-full bg-white"
          />
        </div>
      </div>
    </section>
  );
}
