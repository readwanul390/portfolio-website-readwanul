import { motion } from "framer-motion";

export default function Skills() {
  const skillsData = [
    {
      category: "Frontend",
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "TailwindCSS",
        "Responsive Design",
      ],
    },
    {
      category: "Backend",
      gradient: "from-purple-500 to-pink-500",
      skills: [
        "Node.js (Basic)",
        "Express.js (Basic)",
        "MongoDB (Basic)",
        "REST API (Basic)",
      ],
    },
    {
      category: "Tools",
      gradient: "from-orange-500 to-red-500",
      skills: [
        "Git & GitHub",
        "VS Code",
        "Firebase",
        "Figma (Basic)",
        "Chrome DevTools",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        My <span className="text-blue-600">Skills</span>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {skillsData.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="relative group"
          >
            {/* Gradient Background Glow */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
            />

            {/* Card */}
            <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100 h-full">
              {/* Category Header */}
              <div className="mb-6">
                <h3
                  className={`text-2xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
                >
                  {category.category}
                </h3>
                <div
                  className={`h-1 w-16 bg-gradient-to-r ${category.gradient} rounded-full mt-2`}
                />
              </div>

              {/* Skills List */}
              <ul className="space-y-3">
                {category.skills.map((skill, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                    className="text-gray-700 flex items-center gap-2 group/item"
                  >
                    <span
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient} group-hover/item:scale-150 transition-transform duration-300`}
                    />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}