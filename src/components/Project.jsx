import { Link } from "react-router-dom";
import img from "../assets/image.jpg";
import hero from "../assets/hero.jpg";
import game from "../assets/game.jpg";


export default function Projects() {
  const projects = [
    {
      name: "Artify",
      image: img,
      details: "/project-details/1",
    },
    {
      name: "Hero Apps",
      image: hero,
      details: "/project-details/2",
    },
    {
      name: "Game Developer",
      image: game,
      details: "/project-details/3",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-6 max-w-7xl mx-auto"
    >
      <h2 className="text-4xl font-bold text-center mb-10">
        My <span className="text-blue-600">Projects</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-10">

        {projects.map((p, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-xl overflow-hidden"
          >
            <img
              src={p.image}
              alt={p.name}
              className="h-48 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">{p.name}</h3>

              <Link to={p.details}>View More</Link>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
