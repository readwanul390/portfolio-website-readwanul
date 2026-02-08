import { FaEnvelope, FaPaperPlane, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useEffect } from "react";

const Contact = () => {

  // ✅ Initialize EmailJS ONCE
  useEffect(() => {
    emailjs.init("N0CkI0IM58gNxVs24"); // Public Key
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uypnbhm",      // Service ID
        "template_4ash6ok",     // Template ID
        e.target               // Form
      )
      .then(() => {
        Swal.fire("Success 🎉", "Message sent successfully!", "success");
        e.target.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        Swal.fire(
          "Error ❌",
          error.text || "Failed to send message",
          "error"
        );
      });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-3xl text-blue-600" />,
      label: "Email",
      value: "abusaidhridoy5@gmail.com",
      href: "mailto:abusaidhridoy5@gmail.com",
      gradient: "from-blue-500 to-cyan-500",
      hoverColor: "hover:text-blue-600",
    },
    {
      icon: <FaPhoneAlt className="text-3xl text-green-600" />,
      label: "Phone",
      value: "+880 1770396544",
      href: "tel:+8801770396544",
      gradient: "from-green-500 to-emerald-500",
      hoverColor: "hover:text-green-600",
    },
    {
      icon: <FaWhatsapp className="text-3xl text-emerald-600" />,
      label: "WhatsApp",
      value: "Chat on WhatsApp",
      href: "https://wa.me/8801770396544",
      gradient: "from-emerald-500 to-teal-500",
      hoverColor: "hover:text-emerald-600",
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className="bg-gray-50 min-h-screen scroll-mt-24 pt-24 pb-20 flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">

        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact <span className="text-blue-600">Me</span>
        </motion.h2>

        {/* Contact Cards */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-40`}
              />

              <div className="relative flex items-center gap-4 bg-white p-6 rounded-2xl shadow-lg border">
                {item.icon}
                <div>
                  <p className="text-sm text-gray-500">{item.label}</p>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className={`font-medium text-gray-800 ${item.hoverColor}`}
                  >
                    {item.value}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white shadow-2xl rounded-3xl p-8 border">
            <motion.h3
              className="text-2xl font-bold text-center mb-8 text-blue-600"
            >
              Send Me a Message
            </motion.h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input name="from_name" required placeholder="Your Name" className="w-full px-5 py-3 border rounded-xl" />
              <input name="reply_to" type="email" required placeholder="Your Email" className="w-full px-5 py-3 border rounded-xl" />
              <input name="subject" required placeholder="Subject" className="w-full px-5 py-3 border rounded-xl" />
              <textarea name="message" rows="5" required placeholder="Your Message" className="w-full px-5 py-3 border rounded-xl" />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl flex items-center justify-center gap-2"
              >
                <FaPaperPlane /> Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
