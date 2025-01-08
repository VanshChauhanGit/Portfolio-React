import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "EasyWrite - Blog App",
    description:
      "EasyWrite is a user-friendly blog web app that allows users to easily create, read, update and delete blog posts. It features a clean and modern design, providing a seamless writing and reading experience. ",
    image: "ProjectsImg/easywrite.png",
    repositoryLink: "https://github.com/VanshChauhanGit/EasyWrite-Blog-App",
    liveLink: "https://easywrite.netlify.app/",
  },
  {
    title: "DoQueue - Todo App",
    description:
      "A streamlined to-do list web app designed to enhance productivity and task management. DoQueue allows users to create, organize, and prioritize tasks with an intuitive interface. The app ensures a smooth user experience with features like task status updates and real-time synchronization. Built with modern web technologies and hosted on Netlify for seamless accessibility.",
    image: "ProjectsImg/doqueue.png",
    repositoryLink: "https://github.com/VanshChauhanGit/DoQueue-React-Todo-App",
    liveLink: "https://doqueue.netlify.app/",
  },
  {
    title: "GlobalRates - Realtime Currency Converter App",
    description:
      "A web app that provides real-time currency conversion rates, enabling users to effortlessly convert between multiple currencies. Built with a focus on user-friendly design and accurate financial data, this app ensures seamless functionality for international travelers, businesses, and finance enthusiasts.",
    image: "ProjectsImg/globalrates.png",
    repositoryLink:
      "https://github.com/VanshChauhanGit/GlobalRates-Currency-Converter",
    liveLink: "https://globalrates.netlify.app/",
  },
  {
    title: "Weather's Hub - Real-Time Weather Web App",
    description:
      "A user-friendly web app that provides accurate, real-time weather updates for any location. Weather's Hub is designed with a clean and intuitive interface, making it easy to check current weather conditions and forecasts.",
    image: "ProjectsImg/weathershub.png",
    repositoryLink: "https://github.com/VanshChauhanGit/WeathersHub",
    liveLink: "https://weathershub.netlify.app/",
  },
  {
    title: "PassGen Pro - Password Generator App",
    description:
      "A lightweight and efficient web app for creating strong, random passwords to enhance online security. PassGen Pro empowers users to generate customized passwords based on length, character types, and other preferences, ensuring their digital safety.",
    image: "ProjectsImg/passgenpro.png",
    repositoryLink: "https://github.com/VanshChauhanGit/Pass_Generator",
    liveLink: "https://pass-gen-pro.netlify.app/",
  },
  {
    title: "RedStorePro - E-Commerce Frontend App",
    description:
      "A sleek and visually appealing e-commerce website designed to showcase products and provide an engaging shopping experience. RedStore Pro focuses on delivering a responsive and interactive user interface, making it ideal for modern online stores.",
    image: "ProjectsImg/redstorepro.png",
    repositoryLink: "https://github.com/VanshChauhanGit/RedStorePro",
    liveLink: "https://redstorepro.netlify.app/",
  },
  {
    title: "SimonSays Pro - Classic Memory Game",
    description:
      "A fun and interactive web-based memory game that challenges users to follow and repeat increasingly complex patterns of lights and sounds. SimonSays Pro offers a nostalgic gaming experience with a modern, responsive design.",
    image: "ProjectsImg/simonsayspro.png",
    repositoryLink: "https://github.com/VanshChauhanGit/simon-says-game",
    liveLink: "https://simonsayspro.netlify.app/",
  },
  {
    title: "LeadGen - Landing Page for Headphone Promotion",
    description:
      "A visually stunning and responsive landing page designed to promote headphones with a modern and professional look. LeadGen highlights the product's key features, design, and user experience, making it an ideal choice for showcasing premium audio devices.",
    image: "ProjectsImg/leadgen.png",
    repositoryLink: "https://github.com/VanshChauhanGit/LeadGen",
    liveLink: "",
  },
  {
    title: "LuxeLiving - Home Listing App",
    description:
      "A feature-rich web application that allows users to explore, list, and discover homes effortlessly. LuxeLiving is designed to simplify the home-hunting experience by offering comprehensive property details.",
    image: "ProjectsImg/luxeliving.png",
    repositoryLink: "https://github.com/VanshChauhanGit/LuxeLiving",
    liveLink: "",
  },
  {
    title: "MarketPulse - Realtime Stock Information App",
    description:
      "A powerful web application that provides users with up-to-date stock market data, including live stock prices, percentage changes, and market trends. MarketPulse is ideal for investors and traders seeking quick insights and tracking stock performance in real time.",
    image: "ProjectsImg/marketpulse.png",
    repositoryLink: "https://github.com/VanshChauhanGit/market-pulse",
    liveLink: "",
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
