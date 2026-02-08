import hridoy from "../assets/hridoy.png";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        About <span className="text-blue-600">Me</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <motion.div
          className="flex justify-center md:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative">
            {/* Animated Glow Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 rounded-xl blur-2xl opacity-30"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Image with border gradient */}
            <div className="relative p-1 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 rounded-xl">
              <img
                src={hridoy}
                alt="AbuSaid"
                className="w-80 h-96 rounded-xl object-cover bg-white"
              />
            </div>
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="md:order-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-gray-700 leading-relaxed text-lg">
              Hi! I'm <span className="font-bold text-blue-600">AbuSaid</span>,
              a passionate frontend developer. My programming journey started
              with curiosity about how websites work. Over time, I fell in love
              with building clean, fast, and interactive user interfaces.
            </p>

            <p className="text-gray-700 leading-relaxed">
              I enjoy working with modern JavaScript frameworks, mostly{" "}
              <span className="font-semibold text-blue-600">React</span>. I
              love designing creative UIs and smooth user experiences that make
              a real difference.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Outside programming, I enjoy hobbies like sports, gaming, music,
              photography, and learning new things every day. I believe in
              continuous growth and building things that matter.
            </p>

            <p className="text-gray-700 leading-relaxed">
              I'm a friendly, hardworking person who loves teamwork and solving
              real-world problems with innovative solutions.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Let's Connect
              <span className="text-xl">→</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}