import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import img from "../assets/image.jpg";
import hero from "../assets/hero.jpg";
import game from "../assets/game.jpg";

export default function Projects() {
  const projects = [
    {
      name: "Artify",
      image: img,
      details: "/project-details/1",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Hero Apps",
      image: hero,
      details: "/project-details/2",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Game Developer",
      image: game,
      details: "/project-details/3",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        My <span className="text-blue-600">Projects</span>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((p, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -15, transition: { duration: 0.3 } }}
            className="relative group"
          >
            {/* Gradient Glow Background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${p.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300`}
            />

            {/* Card */}
            <div className="relative bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                {/* Gradient Overlay on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${p.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Project Name */}
                <motion.h3
                  className="text-2xl font-bold mb-4 text-gray-800"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
                >
                  {p.name}
                </motion.h3>

                {/* View More Button */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
                >
                  <Link
                    to={p.details}
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${p.gradient} text-white px-5 py-2.5 rounded-xl font-medium shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300`}
                  >
                    View More
                    <span className="text-lg">→</span>
                  </Link>
                </motion.div>
              </div>

              {/* Decorative Corner Element */}
              <div
                className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${p.gradient} rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-300`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}