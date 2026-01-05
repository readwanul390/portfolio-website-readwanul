import { FaEnvelope, FaPaperPlane, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c4ehxpb",
        "template_4ash6ok",
        e.target,
        "tJ9L7r8UrD_GMKcgYYeZO"
      )
      .then(() => {
        Swal.fire("Success", "Message sent successfully!", "success");
        e.target.reset();
      })
      .catch(() => {
        Swal.fire("Error", "Failed to send message", "error");
      });
  };

  return (
    <section
      id="contact"
      className="bg-base-200 min-h-screen scroll-mt-24 pt-24 flex items-center"
    >
      <div className="max-w-6xl mx-auto px-4 w-full">
        <h2 className="text-4xl font-bold text-center mb-12">
          Contact <span className="text-primary">Me</span>
        </h2>

        {/* Contact Info */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email */}
          <div className="flex items-center gap-4 bg-base-100 p-5 rounded-xl shadow">
            <FaEnvelope className="text-3xl text-blue-600" />
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <a
                href="mailto:abusaidhridoy5@gmail.com"
                className="font-medium text-gray-800 hover:text-blue-600"
              >
                abusaidhridoy5@gmail.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 bg-base-100 p-5 rounded-xl shadow">
            <FaPhoneAlt className="text-3xl text-green-600" />
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <a
                href="tel:+8801770396544"
                className="font-medium text-gray-800 hover:text-green-600"
              >
                +880 1770396544
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center gap-4 bg-base-100 p-5 rounded-xl shadow">
            <FaWhatsapp className="text-3xl text-emerald-600" />
            <div>
              <p className="text-sm text-gray-500">WhatsApp</p>
              <a
                href="https://wa.me/8801770396544"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gray-800 hover:text-emerald-600"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto bg-base-100 shadow-xl rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              name="from_name"
              required
              placeholder="Your Name"
              className="input input-bordered w-full"
            />

            <input
              name="reply_to"
              type="email"
              required
              placeholder="Your Email"
              className="input input-bordered w-full"
            />

            <input
              name="subject"
              required
              placeholder="Subject"
              className="input input-bordered w-full"
            />

            <textarea
              name="message"
              rows="4"
              required
              placeholder="Your Message"
              className="textarea textarea-bordered w-full"
            ></textarea>

            <button
              type="submit"
              className="btn btn-primary w-full flex items-center justify-center gap-2"
            >
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
