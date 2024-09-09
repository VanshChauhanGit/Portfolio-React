import { motion } from "framer-motion";
import { useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

const Home = () => {
  const constraintsRef = useRef(null);

  return (
    <div className="relative min-h-[90vh] bg-white dark:bg-black overflow-hidden">
      <div className="absolute inset-0" ref={constraintsRef}>
        {/* Bubble 1: HTML */}
        <motion.div
          drag
          dragConstraints={constraintsRef}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
          className="bg-gray-100 dark:bg-gray- w-16 h-16 rounded-full absolute top-24 left-20 flex backdrop-blur-lg justify-center items-center"
          animate={{
            y: [0, 20, 0],
            transition: {
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        >
          <FaHtml5 className="text-orange-500 text-3xl" />
        </motion.div>

        {/* Bubble 2: CSS */}
        <motion.div
          drag
          dragConstraints={constraintsRef}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
          className="bg-gray-100 w-20 h-20 rounded-full absolute top-40 left-60 flex justify-center items-center"
          animate={{
            x: [0, 25, 0],
            transition: {
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        >
          <FaCss3Alt className="text-blue-500 text-3xl" />
        </motion.div>

        {/* Bubble 3: JavaScript */}
        <motion.div
          drag
          dragConstraints={constraintsRef}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
          className="bg-gray-100 w-14 h-14 rounded-full absolute top-28 left-2/4 flex justify-center items-center"
          animate={{
            y: [0, -30, 0],
            transition: {
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        >
          <FaJs className="text-yellow-500 text-3xl" />
        </motion.div>

        {/* Bubble 4: React */}
        <motion.div
          drag
          dragConstraints={constraintsRef}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
          className="bg-gray-100 w-12 h-12 rounded-full absolute top-48 right-48 flex justify-center items-center"
          animate={{
            x: [0, -30, 0],
            transition: {
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        >
          <FaReact className="text-blue-400 text-3xl" />
        </motion.div>

        {/* Bubble 5: Node.js */}
        <motion.div
          drag
          dragConstraints={constraintsRef}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
          className="bg-gray-100 w-18 h-18 rounded-full absolute bottom-52 left-60 flex justify-center items-center"
          animate={{
            y: [0, 15, 0],
            transition: {
              duration: 7,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        >
          <FaNodeJs className="text-green-500 text-3xl" />
        </motion.div>

        {/* Bubble 6: Express */}
        <motion.div
          drag
          dragConstraints={constraintsRef}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
          className="bg-gray-100 w-14 h-14 rounded-full absolute bottom-36 right-1/3 flex justify-center items-center"
          animate={{
            x: [0, 20, 0],
            transition: {
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        >
          <SiExpress className="text-gray-500 text-3xl" />
        </motion.div>

        {/* Bubble 7: MongoDB */}
        <motion.div
          drag
          dragConstraints={constraintsRef}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
          className="bg-gray-100 w-16 h-16 rounded-full absolute bottom-32 left-96 flex justify-center items-center"
          animate={{
            y: [0, -15, 0],
            transition: {
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        >
          <SiMongodb className="text-green-700 text-3xl" />
        </motion.div>

        {/* Bubble 8: Tailwind CSS */}
        <motion.div
          drag
          dragConstraints={constraintsRef}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
          className="bg-gray-100 w-12 h-12 rounded-full absolute top-44 right-96 flex justify-center items-center"
          animate={{
            x: [0, -20, 0],
            transition: {
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        >
          <SiTailwindcss className="text-blue-500 text-3xl" />
        </motion.div>

        {/* Bubble 9: Git */}
        <motion.div
          drag
          dragConstraints={constraintsRef}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
          className="bg-gray-100 w-20 h-20 rounded-full absolute bottom-44 right-24 flex justify-center items-center"
          animate={{
            y: [0, 20, 0],
            transition: {
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        >
          <FaGitAlt className="text-red-500 text-3xl" />
        </motion.div>
      </div>

      {/* Name and Subheading */}
      <div className="relative mt-[40vh] flex flex-col justify-center items-center h-fit w-fit mx-auto text-center">
        <motion.h1
          className="text-6xl md:text-7xl font-bold text-black dark:text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Vansh Chauhan
        </motion.h1>
        <motion.h2
          className="text-3xl md:text-4xl text-gray-500 mt-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          MERN Stack Developer
        </motion.h2>
      </div>
    </div>
  );
};

export default Home;
