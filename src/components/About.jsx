import hridoy from "../assets/hridoy.png";
export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 max-w-7xl mx-auto"
    >
      <h2 className="text-4xl font-bold text-center mb-10">
        About <span className="text-blue-600">Me</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Text */}
        <div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hi! I'm <b>AbuSaid</b>, a passionate frontend developer.  
            My programming journey started with curiosity about how websites work.  
            Over time, I fell in love with building clean, fast, and interactive user interfaces.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            I enjoy working with modern JavaScript frameworks, mostly React.  
            I love designing creative UIs and smooth user experiences.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Outside programming, I enjoy hobbies like sports, gaming, music,  
            photography, and learning new things every day.  
            I believe in continuous growth and building things that matter.
          </p>

          <p className="text-gray-700 leading-relaxed">
            I'm a friendly, hardworking person who loves teamwork  
            and solving real-world problems.
          </p>
        </div>

        {/* Optional Image */}
        <div className="flex justify-center">
          <img
            src={hridoy}
            alt="About"
            className="w-80 h-90 rounded-xl shadow-lg object-cover"
          />
        </div>

      </div>
    </section>
  );
}
