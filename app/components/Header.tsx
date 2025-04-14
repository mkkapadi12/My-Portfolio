import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-6">
      <div className="text-xl font-semibold">Mayur</div>
      <nav className="hidden md:flex space-x-8">
        <Link href="#about" className="border-b-2 border-white pb-1">
          About
        </Link>
        <Link
          href="#skills"
          className="text-gray-400 hover:text-white transition"
        >
          Skills
        </Link>
        <Link
          href="#experience"
          className="text-gray-400 hover:text-white transition"
        >
          Experience
        </Link>
        <Link
          href="#projects"
          className="text-gray-400 hover:text-white transition"
        >
          Projects
        </Link>
        <Link
          href="#education"
          className="text-gray-400 hover:text-white transition"
        >
          Education
        </Link>
      </nav>
    </header>
  );
};

export default Header;
