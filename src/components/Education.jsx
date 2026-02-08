import { motion } from "framer-motion";

export default function Education() {
  const educationData = [
    {
      degree: "BSc in Computer Science & Engineering",
      institution: "Jahangirnagar University",
      period: "2022 – Present",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Cantonment Public School & College, Lalmonirhat",
      period: "Year: 2020",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="education" className="py-20 px-6 max-w-7xl mx-auto">
      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        Educational <span className="text-blue-600">Qualification</span>
      </motion.h2>

      <div className="space-y-8 max-w-4xl mx-auto">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="relative group"
          >
            {/* Gradient Glow Background */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
            />

            {/* Card */}
            <div className="relative bg-white p-8 rounded-2xl shadow-xl border-l-4 border-blue-600">
              {/* Degree Title */}
              <motion.h3
                className="text-2xl font-bold text-gray-800"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2 + index * 0.2, duration: 0.5 }}
              >
                {item.degree}
              </motion.h3>

              {/* Institution */}
              <motion.p
                className="text-gray-700 mt-2 text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
              >
                {item.institution}
              </motion.p>

              {/* Period */}
              <motion.p
                className="text-gray-500 mt-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
              >
                {item.period}
              </motion.p>

              {/* Decorative Corner Element */}
              <div
                className={`absolute top-6 right-6 w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-full opacity-10 group-hover:scale-150 group-hover:opacity-20 transition-all duration-300`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}