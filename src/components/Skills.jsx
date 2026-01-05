export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 max-w-7xl mx-auto"
    >
      <h2 className="text-4xl font-bold text-center mb-10">
        My <span className="text-blue-600">Skills</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-10">

        {/* Frontend Skills */}
        <div className="p-6 bg-white shadow rounded-xl">
          <h3 className="text-2xl font-bold mb-4 text-blue-600">Frontend</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• HTML</li>
            <li>• CSS</li>
            <li>• JavaScript</li>
            <li>• React.js</li>
            <li>• TailwindCSS</li>
            <li>• Responsive Design</li>
          </ul>
        </div>

        {/* Backend Skills */}
        <div className="p-6 bg-white shadow rounded-xl">
          <h3 className="text-2xl font-bold mb-4 text-blue-600">Backend</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Node.js (Basic)</li>
            <li>• Express.js (Basic)</li>
            <li>• MongoDB (Basic)</li>
            <li>• REST API (Basic)</li>
          </ul>
        </div>

        {/* Tools & Others */}
        <div className="p-6 bg-white shadow rounded-xl">
          <h3 className="text-2xl font-bold mb-4 text-blue-600">Tools</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Git & GitHub</li>
            <li>• VS Code</li>
            <li>• Firebase</li>
            <li>• Figma (Basic)</li>
            <li>• Chrome DevTools</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
