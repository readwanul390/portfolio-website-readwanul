export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-6 max-w-7xl mx-auto scroll-mt-24"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Work <span className="text-blue-600">Experience</span>
      </h2>

      <div className="flex justify-center">
        <div className="w-full md:w-2/3 lg:w-1/2">
          <div className="relative p-8 bg-white shadow-xl rounded-2xl border border-gray-100">

            {/* Timeline Dot */}
            <div className="absolute -left-4 top-10 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              23
            </div>

            <h3 className="text-2xl font-bold text-gray-800">
              Volunteer — NCPC 2023
            </h3>

            <p className="text-gray-700 mt-1 font-medium">
              Jahangirnagar University
            </p>

            <p className="text-sm text-gray-500 mb-4">
              9 March, 2023
            </p>

            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li>
                • Volunteered at the <strong>National Collegiate Programming Contest (NCPC)</strong>, assisting in event coordination and participant management.
              </li>
              <li>
                • Supported judges, contestants, and technical teams to ensure smooth contest operations.
              </li>
              <li>
                • Gained hands-on experience in teamwork, communication, and large-scale event management.
              </li>
              <li>
                • Contributed to maintaining a professional and organized competition environment.
              </li>
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
}
