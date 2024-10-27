import { motion } from "framer-motion";
import { useRef } from "react";
import Spline from "@splinetool/react-spline";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

const bubbleData = [
  {
    icon: <FaHtml5 className="text-3xl text-orange-500" />,
    style:
      "w-16 h-16 bg-gray-100 rounded-full dark:bg-gray- top-16 left-10 md:top-24 md:left-20",
    animation: {
      y: [0, 20, 0],
      duration: 6,
      repeatType: "reverse",
    },
  },
  {
    icon: <FaCss3Alt className="text-3xl text-blue-500" />,
    style:
      "w-20 h-20 bg-gray-100 rounded-full top-36 left-40 md:top-40 md:left-60",
    animation: {
      x: [0, 25, 0],
      duration: 5,
      repeatType: "reverse",
    },
  },
  {
    icon: <FaJs className="text-3xl text-yellow-500" />,
    style:
      "w-14 h-14 bg-gray-100 rounded-full top-20 left-1/3 md:top-28 md:left-2/4",
    animation: {
      y: [0, -30, 0],
      duration: 4,
      repeatType: "reverse",
    },
  },
  {
    icon: <FaReact className="text-3xl text-blue-400" />,
    style:
      "w-12 h-12 bg-gray-100 rounded-full top-52 right-20 md:top-48 md:right-48",
    animation: {
      x: [0, -30, 0],
      duration: 6,
      repeatType: "reverse",
    },
  },
  {
    icon: <FaNodeJs className="text-3xl text-green-500" />,
    style:
      "w-18 h-18 size-14 bg-gray-100 rounded-full bottom-40 left-32 md:bottom-52 md:left-60",
    animation: {
      y: [0, -35, 0],
      x: [0, -20, 0],
      duration: 7,
      repeatType: "reverse",
    },
  },
  {
    icon: <SiExpress className="text-3xl text-gray-500" />,
    style:
      "w-14 h-14 bg-gray-100 rounded-full bottom-32 left-1/4 md:bottom-36 md:right-3/5",
    animation: {
      x: [0, 20, 0],
      duration: 8,
      repeatType: "reverse",
    },
  },
  {
    icon: <SiMongodb className="text-3xl text-green-700" />,
    style:
      "w-16 h-16 bg-gray-100 rounded-full bottom-28 left-1/3 md:bottom-32 md:left-1/2",
    animation: {
      y: [0, 65, 0],
      duration: 6,
      repeatType: "reverse",
    },
  },
  {
    icon: <SiTailwindcss className="text-3xl text-blue-500" />,
    style:
      "w-12 h-12 bg-gray-100 rounded-full top-40 right-1/4 md:top-44 md:right-96",
    animation: {
      x: [0, -20, 0],
      duration: 5,
      repeatType: "reverse",
    },
  },
  {
    icon: <FaGitAlt className="text-3xl text-red-500" />,
    style:
      "w-20 h-20 bg-gray-100 rounded-full bottom-36 right-12 md:bottom-44 md:right-24",
    animation: {
      y: [0, 20, 0],
      duration: 6,
      repeatType: "reverse",
    },
  },
];

const Home = () => {
  const constraintsRef = useRef(null);

  return (
    <div className="relative min-h-[90vh] bg-white dark:bg-black overflow-hidden">
      <div className="absolute inset-0" ref={constraintsRef}>
        {bubbleData.map((bubble, index) => (
          <motion.div
            key={index}
            drag
            dragConstraints={constraintsRef}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
            className={`absolute flex items-center justify-center ${bubble.style}`}
            animate={{
              ...bubble.animation,
              transition: {
                duration: bubble.animation.duration,
                repeat: Infinity,
                repeatType: bubble.animation.repeatType,
              },
            }}
          >
            {bubble.icon}
          </motion.div>
        ))}
        <div className="">
          {/* <Spline scene="https://prod.spline.design/5YBKmAWNXL1LrWBa/scene.splinecode" /> */}
          <Spline scene="https://prod.spline.design/9qblrbvgdM5c0IvK/scene.splinecode" />
        </div>
      </div>

      {/* Name and Subheading */}
      <div className="relative mt-[40vh] flex flex-col justify-center items-center h-fit w-fit mx-auto text-center">
        <motion.h1
          className="text-4xl font-bold text-black md:text-6xl md:dark:text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Vansh Chauhan
        </motion.h1>
        <motion.h2
          className="mt-4 text-xl text-gray-500 md:text-3xl"
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
