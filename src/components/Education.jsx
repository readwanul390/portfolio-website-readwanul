export default function Education() {
  return (
    <section
      id="education"
      className="py-20 px-6 max-w-7xl mx-auto"
    >
      <h2 className="text-4xl font-bold text-center mb-10">
        Educational <span className="text-blue-600">Qualification</span>
      </h2>

      <div className="space-y-6">

        {/* Example Education Card */}
        <div className="p-6 bg-white shadow rounded-xl border-l-4 border-blue-600">
          <h3 className="text-2xl font-bold">BSc in Computer Science & Engineering</h3>
          <p className="text-gray-700 mt-1">Jahangirnagar University</p>
          <p className="text-gray-500">2022 – Present</p>
        </div>

        {/* Another Example */}
        <div className="p-6 bg-white shadow rounded-xl border-l-4 border-blue-600">
          <h3 className="text-2xl font-bold">Higher Secondary Certificate (HSC)</h3>
          <p className="text-gray-700 mt-1">Your College Name</p>
          <p className="text-gray-500">Year: XXXX</p>
        </div>

      </div>
    </section>
  );
}
