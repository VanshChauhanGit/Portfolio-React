import React from "react";
import SocialIcons from "./SocialIcons";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-100 dark:bg-black min-h-screen py-16 px-8 md:px-16 lg:px-32"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        {/* Image and Social Icons */}
        <div className="md:w-1/3 mb-8 md:mb-0 flex flex-col items-center justify-start md:justify-evenly">
          <img
            src="/vansh.jpg"
            width={250}
            height={250}
            alt="Vansh Chauhan"
            className="rounded-full mb-6"
            style={{ aspectRatio: "1/1", objectFit: "cover" }}
          />
          <div className="mt-6 md:mt-4">
            <SocialIcons />
          </div>
        </div>

        {/* About Text */}
        <div className="md:w-2/3 md:pl-16">
          <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-4">
            Hi, I'm <span className="font-bold text-black dark:text-white">Vansh Chauhan</span>,
            a passionate MERN Stack Developer with a love for building dynamic
            and responsive web applications. With a deep understanding of both
            front-end and back-end technologies, I enjoy creating seamless user
            experiences using modern tools like React, Tailwind CSS, and
            Node.js. My journey into full-stack development has been driven by a
            constant curiosity and a desire to solve real-world problems with
            clean, efficient code.
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            Whether it's building interactive user interfaces or managing
            databases, I aim to deliver high-quality, scalable solutions. I am
            always excited to learn new technologies and improve my skills to
            keep up with the fast-paced world of web development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
