import { Badge } from "./ui/badge";
import Link from "next/link";
import { Button } from "./ui/button";
import profile from "../../public/profile_photo.jpg";
import Image from "next/image";
import { ICONS } from "../assets/icons/icons";

const HeroSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <Badge
          variant="outline"
          className="bg-[#1a2e4c] text-white border-none rounded-full px-4 py-1 mb-6"
        >
          Welcome to my portfolio
        </Badge>

        <h1 className="text-5xl font-bold mb-2">Mayur Kapadi</h1>
        {/* <h2 className="text-4xl font-bold text-gray-500 mb-4"></h2> */}

        <p className="text-xl mb-8">Software Engineer</p>

        <div className="flex flex-wrap gap-4 mb-8">
          <Button className="bg-[#1a2e4c] hover:bg-[#2a3e5c] text-white rounded-full px-6">
            Get in Touch
          </Button>
          <Button className="bg-[#1a2e4c] hover:bg-[#2a3e5c] text-white rounded-full px-6 flex items-center gap-2">
            <ICONS.DOWNLOAD size={18} />
            Download Resume
          </Button>
          <Button className="bg-[#1a2e4c] hover:bg-[#2a3e5c] text-white rounded-full px-6">
            View Projects
          </Button>
        </div>

        <div className="flex gap-6">
          <Link href="#" className="text-gray-400 hover:text-white transition">
            <ICONS.GITHUB size={24} />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white transition">
            <ICONS.LINKDIN size={24} />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white transition">
            <ICONS.MAIL size={24} />
          </Link>
        </div>
      </div>

      <div className="flex justify-center items-center relative">
        <div className="rounded-full overflow-hidden border-4 border-gray-800 w-64 h-64 md:w-80 md:h-80">
          <Image
            width={150}
            height={150}
            src={profile}
            alt="Profile Photo"
            className="object-contain mt-4 mx-auto"
          />
        </div>
        <div className="absolute bottom-5 right-36 bg-[#1a2e4c] p-2 rounded-full">
          <ICONS.GRADUATIONCAP size={24} className="text-yellow-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
