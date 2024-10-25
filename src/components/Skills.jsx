import { motion } from "framer-motion";

export default function Component() {
  const skills = [
    {
      id: 1,
      name: "HTML",
      icon: <HashIcon className="w-12 h-12 text-primary" />,
    },
    {
      id: 2,
      name: "CSS",
      icon: <CodepenIcon className="w-12 h-12 text-primary" />,
    },
    {
      id: 3,
      name: "JavaScript",
      icon: <CodepenIcon className="w-12 h-12 text-primary" />,
    },
    {
      id: 4,
      name: "React",
      icon: <CodepenIcon className="w-12 h-12 text-primary" />,
    },
    {
      id: 5,
      name: "Tailwind CSS",
      icon: <WindIcon className="w-12 h-12 text-primary" />,
    },
    {
      id: 6,
      name: "Node.js",
      icon: <CodepenIcon className="w-12 h-12 text-primary" />,
    },
    {
      id: 7,
      name: "Express",
      icon: <XIcon className="w-12 h-12 text-primary" />,
    },
    {
      id: 8,
      name: "MongoDB",
      icon: <DatabaseIcon className="w-12 h-12 text-primary" />,
    },
    {
      id: 9,
      name: "Git",
      icon: <GitGraphIcon className="w-12 h-12 text-primary" />,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="w-full bg-white min-h-[90vh] py-6 md:py-24 lg:py-16 bg-muted"
    >
      <div className="container px-4 mx-auto md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <motion.h2
              initial={{ x: -250, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-3xl font-bold tracking-tighter sm:text-5xl"
            >
              My Skills
            </motion.h2>
            <motion.p
              initial={{ x: 220, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
            >
              Here are the technical skills I've developed. I'm proficient in a
              variety of web development technologies, and I'm always eager to
              learn more.
            </motion.p>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="grid grid-cols-2 gap-6 mt-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 animate-fade-in"
        >
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex items-center justify-center p-4 transition-all duration-300 transform bg-gray-100 rounded-lg shadow-sm bg-gray-100l bg-background hover:-translate-y-2 hover:shadow-lg"
            >
              {skill.icon}
              <p className="mt-2 text-sm font-medium text-foreground">
                {skill.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

function CodepenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  );
}

function DatabaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

function GitGraphIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="5" cy="6" r="3" />
      <path d="M5 9v6" />
      <circle cx="5" cy="18" r="3" />
      <path d="M12 3v18" />
      <circle cx="19" cy="6" r="3" />
      <path d="M16 15.7A9 9 0 0 0 19 9" />
    </svg>
  );
}

function HashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="9" y2="9" />
      <line x1="4" x2="20" y1="15" y2="15" />
      <line x1="10" x2="8" y1="3" y2="21" />
      <line x1="16" x2="14" y1="3" y2="21" />
    </svg>
  );
}

function WindIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
