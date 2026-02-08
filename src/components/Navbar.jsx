import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaBars } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setOpen(false);
  };

  return (
    <motion.nav
      className="fixed w-full bg-white/80 backdrop-blur-xl shadow-lg z-50 border-b border-gray-100"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          AbuSaid
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-2 font-medium">
          {links.map((link, index) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <a
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`relative px-4 py-2 rounded-xl transition-all duration-300 block ${
                  activeLink === link.href
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link.name}
                {/* Active indicator */}
                {activeLink === link.href && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                    layoutId="activeLink"
                    transition={{ duration: 0.3 }}
                  />
                )}
                {/* Hover background */}
                <motion.div
                  className="absolute inset-0 bg-blue-50 rounded-xl -z-10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-gray-700 hover:text-blue-600 transition-colors duration-300 p-2"
          whileTap={{ scale: 0.9 }}
        >
          {open ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-xl shadow-2xl border-t border-gray-100 overflow-hidden"
          >
            <ul className="p-6 space-y-2">
              {links.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className={`block px-5 py-3 rounded-xl text-lg font-medium transition-all duration-300 ${
                      activeLink === link.href
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                        : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    }`}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}