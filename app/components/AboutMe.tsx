import { BookOpen, Code, Laptop, Users } from "lucide-react";
import React from "react";
import { Badge } from "./ui/badge";

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

      <p className="text-gray-400 max-w-4xl mb-12">
        A dedicated LMS Manager and Technical Specialist with expertise in
        managing digital learning environments and implementing technical
        solutions. Passionate about creating efficient systems and solving
        complex problems.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#0c1524] p-6 rounded-lg border border-gray-800">
          <div className="bg-blue-900/30 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
            <Users size={20} className="text-blue-400" />
          </div>
          <h3 className="text-lg font-semibold mb-2">LMS Manager</h3>
          <p className="text-gray-400 text-sm">
            Managing and optimizing learning management systems
          </p>
        </div>

        <div className="bg-[#0c1524] p-6 rounded-lg border border-gray-800">
          <div className="bg-purple-900/30 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
            <Code size={20} className="text-purple-400" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Technical Specialist</h3>
          <p className="text-gray-400 text-sm">
            Implementing technical solutions and troubleshooting
          </p>
        </div>

        <div className="bg-[#0c1524] p-6 rounded-lg border border-gray-800">
          <div className="bg-teal-900/30 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
            <Laptop size={20} className="text-teal-400" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Developer</h3>
          <p className="text-gray-400 text-sm">
            Creating web applications and digital solutions
          </p>
        </div>

        <div className="bg-[#0c1524] p-6 rounded-lg border border-gray-800">
          <div className="bg-pink-900/30 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
            <BookOpen size={20} className="text-pink-400" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Continuous Learner</h3>
          <p className="text-gray-400 text-sm">
            Always exploring new technologies and methodologies
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
