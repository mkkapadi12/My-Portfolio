import React from "react";
import { ICONS } from "../assets/icons/icons";
import { Badge } from "./ui/badge";

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-6 md:px-12 lg:px-24">
      <Badge
        variant="outline"
        className="bg-[#1a2e4c] text-white border-none rounded-full px-4 py-1 mb-4"
      >
        Skills & Expertise
      </Badge>

      <h2 className="text-3xl font-bold mb-6">Technical Proficiency</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-[#0c1524] p-6 rounded-lg border border-gray-800">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-blue-900/30 w-8 h-8 rounded-lg flex items-center justify-center">
              <ICONS.CODE size={16} className="text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold">Frontend Development</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="bg-blue-900/30 w-7 h-7 rounded-lg flex items-center justify-center">
                <ICONS.LANGUAGE size={16} className="text-blue-400" />
              </div>
              <span className="font-semibold">Languages & Markup</span>
            </div>
            <div className="space-y-3 ml-2 text-sm">
              <div className="flex items-center gap-2">
                <ICONS.HTML size={16} className="text-orange-500" />
                <span>HTML5</span>
              </div>
              <div className="flex items-center gap-2">
                <ICONS.CSS size={16} className="text-blue-500 rounded-full" />
                <span>CSS3</span>
              </div>
              <div className="flex items-center gap-2">
                <ICONS.JAVASCRIPT size={16} className="text-yellow-500" />
                <span>JavaScript (ES6+)</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-blue-900/30 w-7 h-7 rounded-lg flex items-center justify-center">
                <ICONS.FRAMEWORK size={16} className="text-blue-400" />
              </div>
              <span className="font-semibold">Frameworks & Libraries</span>
            </div>
            <div className="space-y-3 ml-2 text-sm">
              <div className="flex items-center gap-2">
                <ICONS.REACT_JS size={16} className="text-orange-500" />
                <span>React.js</span>
              </div>
              <div className="flex items-center gap-2">
                <ICONS.NEXT_JS size={16} className="text-blue-500" />
                <span>Next.js</span>
              </div>
              <div className="flex items-center gap-2">
                <ICONS.TAILWINDCSS size={16} className="text-green-500" />
                <span>Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-2">
                <ICONS.BOOTSTRAP size={16} className="text-red-500" />
                <span>Bootstrap</span>
              </div>
              <div className="flex items-center gap-2">
                <ICONS.REDUX size={16} className="text-gray-500" />
                <span>Redux</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#0c1524] p-6 rounded-lg border border-gray-800">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-purple-900/30 w-8 h-8 rounded-lg flex items-center justify-center">
              <ICONS.LAPTOP size={16} className="text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold">Backend Development</h3>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="bg-purple-900/30 w-7 h-7 rounded-lg flex items-center justify-center">
                <ICONS.LANGUAGE size={16} className="text-purple-400" />
              </div>
              <span className="font-semibold">Languages</span>
            </div>
            <div className="space-y-3 ml-2 text-sm">
              <div className="flex items-center gap-2">
                <ICONS.JAVASCRIPT size={16} className="text-teal-500" />
                <span>JavaScript</span>
              </div>
              <div className="flex items-center gap-2">
                <ICONS.NODE_JS size={16} className="text-indigo-500" />
                <span>Node.js</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-purple-900/30 w-7 h-7 rounded-lg flex items-center justify-center">
                <ICONS.FRAMEWORK size={16} className="text-purple-400" />
              </div>
              <span className="font-semibold">Frameworks</span>
            </div>
            <div className="space-y-3 ml-2 text-sm">
              <div className="flex items-center gap-2">
                <ICONS.EXPRESS_JS size={16} className="text-blue-500" />
                <span>Express.js</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-purple-900/30 w-7 h-7 rounded-lg flex items-center justify-center">
                <ICONS.AUTHENTICATION size={16} className="text-purple-400" />
              </div>
              <span className="font-semibold">Authentication & Security</span>
            </div>
            <div className="space-y-3 ml-2 text-sm">
              <div className="flex items-center gap-2">
                <ICONS.JWT size={16} className="text-orange-500" />
                <span>JWT</span>
              </div>
              <div className="flex items-center gap-2">
                <ICONS.BCRYPT size={16} className="text-red-500" />
                <span>bcrypt</span>
              </div>
              <div className="flex items-center gap-2">
                <ICONS.OAUTH size={16} className="text-green-500" />
                <span>OAuth</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#0c1524] p-6 rounded-lg border border-gray-800">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-teal-900/30 w-8 h-8 rounded-lg flex items-center justify-center">
              <ICONS.DATABASE size={16} className="text-teal-400" />
            </div>
            <h3 className="text-lg font-semibold">Database Management</h3>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="bg-teal-900/30 w-7 h-7 rounded-lg flex items-center justify-center">
                <ICONS.DATABASE size={16} className="text-teal-400" />
              </div>
              <span className="font-semibold">Databases</span>
            </div>
            <div className="space-y-3 ml-2 text-sm">
              <div className="flex items-center gap-2">
                <ICONS.MONGODB size={16} className="text-teal-500" />
                <span>MongoDB</span>
              </div>
              <div className="flex items-center gap-2">
                <ICONS.FIREBASE size={16} className="text-indigo-500" />
                <span>Firebase</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-teal-900/30 w-7 h-7 rounded-lg flex items-center justify-center">
                <ICONS.TOOLS size={16} className="text-teal-400" />
              </div>
              <span className="font-semibold">Tools</span>
            </div>
            <div className="space-y-3 ml-2 text-sm">
              <div className="flex items-center gap-2">
                <ICONS.MONGODB_ATLAS size={16} className="text-teal-500" />
                <span>MongoDB Atlas</span>
              </div>
              <div className="flex items-center gap-2">
                <ICONS.MONGODB_COMPASS size={16} className="text-blue-500" />
                <span>MongoDB Compass</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-teal-900/30 w-7 h-7 rounded-lg flex items-center justify-center">
                <ICONS.API size={16} className="text-teal-400" />
              </div>
              <span className="font-semibold">API & Integration</span>
            </div>
            <div className="space-y-3 ml-2 text-sm">
              <div className="flex items-center gap-2">
                <ICONS.REST_API size={16} className="text-orange-500" />
                <span>RESTful APIs</span>
              </div>
              <div className="flex items-center gap-2">
                <ICONS.JOSN size={16} className="text-red-500" />
                <span>JSON</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#0c1524] p-6 rounded-lg border border-gray-800">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-pink-900/30 w-8 h-8 rounded-lg flex items-center justify-center">
              <ICONS.TOOLS size={16} className="text-pink-400" />
            </div>
            <h3 className="text-lg font-semibold">Dev Tools & Utilities</h3>
          </div>

          <div className="space-y-3 ml-2 text-sm">
            <div className="flex items-center gap-2">
              <ICONS.GIT size={16} className="text-blue-500"></ICONS.GIT>
              <span>Git & GitHub</span>
            </div>
            <div className="flex items-center gap-2">
              <ICONS.CHROME size={16} className=" text-teal-500" />
              <span>Chrome DevTools</span>
            </div>
            <div className="flex items-center gap-2">
              <ICONS.POSTMAN size={16} className=" text-gray-500 " />
              <span>Postman</span>
            </div>
            <div className="flex items-center gap-2">
              {/* <div className="w-3 h-3 bg-red-500 rounded-full"></div> */}
              <ICONS.FIGMA size={16} className="text-red-400" />
              <span>Figma</span>
            </div>
            <div className="flex items-center gap-2">
              <ICONS.VERCEL size={16} className="text-white" />
              <span>Vercel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
