import React from "react";
import { Badge } from "./ui/badge";
import { ICONS } from "../assets/icons/icons";

const AboutMe = () => {
  return (
    <section id="about" className="py-16 px-6 md:px-12 lg:px-24">
      <Badge
        variant="outline"
        className="bg-[#1a2e4c] text-white border-none rounded-full px-4 py-1 mb-4"
      >
        About Me
      </Badge>

      <h2 className="text-3xl font-bold mb-6">Professional Overview</h2>

      <p className="text-gray-400 max-w-4xl mb-2">
        A passionate Web Developer and Computer Engineer currently diving deep
        into MERN stack technology. I enjoy building modern web applications and
        constantly expanding my skills to stay ahead in the tech world.
      </p>
      <p className="text-gray-400 max-w-4xl mb-12">
        Dedicated and curious, I’m focused on mastering full-stack development
        with a strong foundation in computer engineering. My goal is to create
        impactful digital solutions and continuously grow as a developer.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#0c1524] p-6 rounded-lg border border-gray-800">
          <div className="bg-blue-900/30 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
            <ICONS.USERS size={20} className="text-blue-400" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Full-Stack Developer</h3>
          <p className="text-gray-400 text-sm">
            Building dynamic and scalable web applications using MongoDB,
            Express.js, React.js, and Node.js.
          </p>
        </div>

        <div className="bg-[#0c1524] p-6 rounded-lg border border-gray-800">
          <div className="bg-purple-900/30 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
            <ICONS.CODE size={20} className="text-purple-400" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Problem Solver</h3>
          <p className="text-gray-400 text-sm">
            Enjoy tackling complex challenges with logical thinking and
            efficient solutions.
          </p>
        </div>

        <div className="bg-[#0c1524] p-6 rounded-lg border border-gray-800">
          <div className="bg-teal-900/30 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
            <ICONS.LAPTOP size={20} className="text-teal-400" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Web Enthusiast</h3>
          <p className="text-gray-400 text-sm">
            Committed to delivering high-quality digital experiences that meet
            user needs.
          </p>
        </div>

        <div className="bg-[#0c1524] p-6 rounded-lg border border-gray-800">
          <div className="bg-pink-900/30 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
            <ICONS.BOOKOPEN size={20} className="text-pink-400" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Continuous Learner</h3>
          <p className="text-gray-400 text-sm">
            Continuously upgrading my skills and exploring new technologies in
            the web development world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
