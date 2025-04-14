import { Code, Users, Laptop, BookOpen } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header/Navigation */}

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 md:px-12 lg:px-24">
        <Badge
          variant="outline"
          className="bg-[#1a2e4c] text-white border-none rounded-full px-4 py-1 mb-4"
        >
          Skills & Expertise
        </Badge>

        <h2 className="text-3xl font-bold mb-6">Technical Proficiency</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0c1524] p-6 rounded-lg border border-gray-800">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-900/30 w-8 h-8 rounded-lg flex items-center justify-center">
                <Code size={16} className="text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold">Frontend Development</h3>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-orange-500 rounded-sm"></div>
                <span>HTML</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
                <span>CSS</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-500 rounded-sm"></div>
                <span>JavaScript</span>
              </div>
            </div>
          </div>

          <div className="bg-[#0c1524] p-6 rounded-lg border border-gray-800">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-purple-900/30 w-8 h-8 rounded-lg flex items-center justify-center">
                <Laptop size={16} className="text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold">Backend Development</h3>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-teal-500 rounded-sm"></div>
                <span>Node.js</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-indigo-500 rounded-sm"></div>
                <span>Express.js</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
                <span>MySQL</span>
              </div>
            </div>
          </div>

          <div className="bg-[#0c1524] p-6 rounded-lg border border-gray-800">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-pink-900/30 w-8 h-8 rounded-lg flex items-center justify-center">
                <Laptop size={16} className="text-pink-400" />
              </div>
              <h3 className="text-lg font-semibold">Tools & Software</h3>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-500 rounded-sm"></div>
                <span>Vercel</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
                <span>Git & GitHub</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-teal-500 rounded-sm"></div>
                <span>Development Tools</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6 md:px-12 lg:px-24">
        <Badge
          variant="outline"
          className="bg-[#1a2e4c] text-white border-none rounded-full px-4 py-1 mb-4"
        >
          Work Experience
        </Badge>

        <h2 className="text-3xl font-bold mb-6">Professional Journey</h2>

        <div className="bg-[#0c1524] p-6 rounded-lg border border-gray-800">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center">
              <Laptop size={24} className="text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                {/* LMS Manager & Technical Specialist */}
              </h3>
              <p className="text-gray-400">
                {/* Center Of Distance and Online Education */}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span>March 2024 - Present</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
              <span>0 Months</span>
            </div>
          </div>

          <h4 className="font-semibold mb-4">Key Responsibilities:</h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-start gap-2">
              <div className="w-3 h-3 bg-teal-500 rounded-full mt-1.5"></div>
              {/* <span>Managing and optimizing LMS operations</span> */}
            </div>
            <div className="flex items-start gap-2">
              <div className="w-3 h-3 bg-teal-500 rounded-full mt-1.5"></div>
              {/* <span>Handling student data and exam management</span> */}
            </div>
            <div className="flex items-start gap-2">
              <div className="w-3 h-3 bg-teal-500 rounded-full mt-1.5"></div>
              {/* <span>Technical troubleshooting and issue resolution</span> */}
            </div>
            <div className="flex items-start gap-2">
              <div className="w-3 h-3 bg-teal-500 rounded-full mt-1.5"></div>
              {/* <span>System updates and enhancements</span> */}
            </div>
            <div className="flex items-start gap-2">
              <div className="w-3 h-3 bg-teal-500 rounded-full mt-1.5"></div>
              {/* <span>Ensuring smooth learning experience</span> */}
            </div>
            <div className="flex items-start gap-2">
              <div className="w-3 h-3 bg-teal-500 rounded-full mt-1.5"></div>
              {/* <span>Digital learning environment optimization</span> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
