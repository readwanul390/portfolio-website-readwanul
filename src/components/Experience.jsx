import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-6 max-w-7xl mx-auto scroll-mt-24"
    >
      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        Work <span className="text-blue-600">Experience</span>
      </motion.h2>

      <div className="flex justify-center">
        <div className="w-full md:w-2/3 lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="relative group"
          >
            {/* Gradient Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300" />

            {/* Main Card */}
            <div className="relative p-8 bg-white shadow-xl rounded-2xl border border-gray-100">
              {/* Timeline Dot with Animation */}
              <motion.div
                className="absolute -left-4 top-10 w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  delay: 0.4,
                }}
                whileHover={{ scale: 1.2, rotate: 360 }}
              >
                23
              </motion.div>

              {/* Job Title */}
              <motion.h3
                className="text-2xl font-bold text-gray-800"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Volunteer — NCPC 2023
              </motion.h3>

              {/* Institution */}
              <motion.p
                className="text-gray-700 mt-2 font-medium text-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Jahangirnagar University
              </motion.p>

              {/* Date */}
              <motion.p
                className="text-sm text-gray-500 mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                9 March, 2023
              </motion.p>

              {/* Responsibilities List */}
              <ul className="space-y-4 text-gray-700 leading-relaxed">
                {[
                  "Volunteered at the National Collegiate Programming Contest (NCPC), assisting in event coordination and participant management.",
                  "Supported judges, contestants, and technical teams to ensure smooth contest operations.",
                  "Gained hands-on experience in teamwork, communication, and large-scale event management.",
                  "Contributed to maintaining a professional and organized competition environment.",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3 group/item"
                  >
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Decorative Corner Elements */}
              <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-10 group-hover:scale-150 group-hover:opacity-20 transition-all duration-300" />
              <div className="absolute bottom-6 right-6 w-8 h-8 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full opacity-10 group-hover:scale-150 group-hover:opacity-20 transition-all duration-300" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}