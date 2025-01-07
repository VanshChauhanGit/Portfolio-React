import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "EasyWrite - Blog App",
    description:
      "EasyWrite is a user-friendly blog web app that allows users to easily create, read, update and delete blog posts. It features a clean and modern design, providing a seamless writing and reading experience. ",
    image: "/easywrite.png",
    repositoryLink: "https://github.com/VanshChauhanGit/EasyWrite-Blog-App",
    liveLink: "https://easywrite.netlify.app/",
  },
];

export default function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="w-full py-12 md:py-24 lg:py-8"
    >
      <div className="container px-4 mx-auto md:px-6">
        <div className="mb-8 space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Our Featured Projects
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Check out some of our latest and greatest projects.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative overflow-hidden transition-transform duration-300 ease-in-out bg-white rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2"
            >
              <div
                className="w-full h-64 bg-center bg-cover rounded-tl-lg rounded-tr-lg"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                {/* <img
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="object-cover w-full h-64 p-2 rounded-md"
                style={{ aspectRatio: "2.1/1", objectFit: "cover" }}
                /> */}
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex gap-2 mt-4">
                  <Link
                    to={project.repositoryLink}
                    target="_blank"
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors rounded-md shadow h-9 bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Repository
                  </Link>
                  {project.liveLink ? (
                    <Link
                      to={project.liveLink}
                      target="_blank"
                      className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors border rounded-md shadow-sm h-9 border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      Live
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
