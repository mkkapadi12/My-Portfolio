import {
  Code,
  Laptop,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  BookOpen,
  Users,
  Database,
  Figma,
} from "lucide-react";
import { RiNextjsLine, RiTailwindCssFill, RiVercelLine } from "react-icons/ri";
import {
  FaAtlassian,
  FaBootstrap,
  FaCode,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa6";
import { FiGithub, FiChrome } from "react-icons/fi";
import {
  SiExpress,
  SiFirebase,
  SiFramework,
  SiGoogleauthenticator,
  SiMapillary,
  SiMongodb,
  SiPostman,
  SiRedux,
  SiSpringsecurity,
} from "react-icons/si";
import {
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaTools,
} from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { DiMysql } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { AiOutlineApi } from "react-icons/ai";
import { TbBrandOauth } from "react-icons/tb";
import { BiCompass } from "react-icons/bi";
import { MdOutlineSecurity } from "react-icons/md";

export const ICONS = {
  CODE: FaCode,
  LAPTOP: Laptop,
  DOWNLOAD: Download,
  GITHUB: Github,
  LINKDIN: Linkedin,
  MAIL: Mail,
  GRADUATIONCAP: GraduationCap,
  BOOKOPEN: BookOpen,
  USERS: Users,
  DATABASE: Database,

  //tools and software
  TOOLS: FaTools,
  VERCEL: RiVercelLine,
  FIGMA: FaFigma,
  GIT: FiGithub,
  POSTMAN: SiPostman,
  CHROME: FiChrome,

  //Frontend Icons
  FRAMEWORK: SiFramework,
  LANGUAGE: GrLanguage,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  JAVASCRIPT: FaJsSquare,
  REACT_JS: FaReact,
  NEXT_JS: RiNextjsLine,
  TAILWINDCSS: RiTailwindCssFill,
  BOOTSTRAP: FaBootstrap,
  REDUX: SiRedux,

  //Backend Icons
  NODE_JS: FaNodeJs,
  EXPRESS_JS: SiExpress,

  //Authentication & Security Icons
  AUTHENTICATION: MdOutlineSecurity,
  JWT: SiGoogleauthenticator,
  OAUTH: TbBrandOauth,
  BCRYPT: SiSpringsecurity,

  //database Icons
  MONGODB: SiMongodb,
  FIREBASE: SiFirebase,
  MYSQL: DiMysql,

  //database tools icons
  MONGODB_ATLAS: FaAtlassian,
  MONGODB_COMPASS: BiCompass,

  //APIs Icons
  API: SiMapillary,
  REST_API: AiOutlineApi,
  JOSN: VscJson,
};
