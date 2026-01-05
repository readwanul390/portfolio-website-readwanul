import { useParams } from "react-router-dom";
import image from "../assets/image.jpg";
import hero from "../assets/hero.jpg";
import game from "../assets/game.jpg";

const projectData = [
  {
    id: "1",
    name: "Portfolio Website",
    image: image,
    techStack: ["React", "Node.js", "MongoDB", "Express", "TailwindCSS","daisyUI"],
    description:
    "Artify is a web application designed to showcase, explore, and manage artworks. The platform allows artists to upload and manage their own artworks, while users can explore artworks by category, view detailed artwork pages, like their favorite pieces, and visit artist profiles.",
    liveLink: "https://artify-client-side.netlify.app/",
    githubLink: "https://github.com/readwanul390/artify-client-side",
    challenges:
    "Implementing role-based access control, separating public and private routes, and handling user-specific data such as personal galleries and favorites were challenging. Additionally, configuring smooth frontend-backend integration and managing deployment workflows required careful planning.",
  improvements:
    "In the future, the platform can be enhanced by adding editable artist profiles, advanced search and filtering options, performance optimizations, and improved security features. Introducing dark mode, notifications, and recommendation features would further improve user experience."
  },
  {
  id: "2",
  name: "Hero Apps",
  image: hero,
  techStack: ["React", "React-Router", "daisyUI", "TailwindCSS", "HTML", "CSS"],
  description:
    "Hero Apps is a modern web application showcasing a collection of applications developed for users. It allows users to browse, search, sort, and manage installed apps. The application provides a smooth and interactive experience with loading animations, error handling, and easy navigation.",
  liveLink: "https://react-hero-apps.netlify.app/",
  githubLink: "https://github.com/readwanul390/Hero-Apps",
  challenges:
    "Managing dynamic routing and state for browsing, searching, and sorting applications was challenging. Ensuring smooth loading states, proper error handling, and maintaining a clean, responsive UI across different screen sizes required careful component structuring and styling.",
  improvements:
    "Future improvements could include adding user authentication, saving favorite apps, and integrating real-time data from an external API. Enhancing performance, improving accessibility, and introducing advanced filtering and animations would further improve the overall user experience."
 },
  {
    id: "3",
    name: "Game Developer App",
    image: game,
    techStack: [
      "React",
      "React-Router",
      "Framer Motion",
      "Firebase",
      "TailwindCSS",
      "daisyUI"
    ],
    description:
      "Game Developer App is a social platform designed for developers to share posts, like and comment on content, and follow other users. The application focuses on community interaction with smooth animations, secure authentication, and an engaging user interface.",
    liveLink: "https://game-developer-abusaid.netlify.app/",
    githubLink: "https://github.com/readwanul390/Game_Developers",
    challenges:
      "Implementing authentication with Firebase, managing protected routes, and handling real-time updates for posts, likes, and comments were challenging. Ensuring smooth UI animations while keeping the application performant also required careful optimization.",
    improvements:
      "Future improvements could include adding a stories feature, enhancing the notification system with real-time alerts, improving user profiles, and optimizing database queries for better scalability and performance."
  },  
];

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projectData.find((p) => p.id === id);

  if (!project) return <p className="p-6 text-center">Project not found</p>;

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-6">
        {project.name}
      </h2>

      <img
        src={project.image}
        alt={project.name}
        className="w-full h-full object-cover rounded-xl shadow mb-6"
      />

      <p className="text-gray-700 mb-4">{project.description}</p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">Tech Stack</h3>
      <ul className="flex flex-wrap gap-3 mb-4">
        {project.techStack.map((tech, idx) => (
          <li
            key={idx}
            className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm"
          >
            {tech}
          </li>
        ))}
      </ul>

      <h3 className="text-2xl font-semibold mt-4 mb-2">Challenges</h3>
      <p className="text-gray-700 mb-4">{project.challenges}</p>

      <h3 className="text-2xl font-semibold mt-4 mb-2">Future Improvements</h3>
      <p className="text-gray-700 mb-4">{project.improvements}</p>

      <div className="flex gap-4 mt-6">
        <a
          href={project.liveLink}
          target="_blank"
          className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 duration-200"
        >
          Live Project
        </a>

        <a
          href={project.githubLink}
          target="_blank"
          className="bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-900 duration-200"
        >
          GitHub Repo
        </a>
      </div>
    </section>
  );
}
