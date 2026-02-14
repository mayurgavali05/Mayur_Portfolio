import { motion } from 'framer-motion';
import {
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPhp, FaAws, FaLock,
  FaShieldAlt, FaTachometerAlt, FaNetworkWired, FaCode, FaOpencart
} from 'react-icons/fa';
import {
  SiJavascript, SiTailwindcss, SiJquery, SiExpress, SiMongodb,
  SiMysql, SiHostinger, SiJsonwebtokens, SiShopify,
  SiWoocommerce, SiTensorflow, SiAuth0
} from 'react-icons/si';

const skillsData = [
  // Frontend
  { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
  { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "jQuery", icon: <SiJquery className="text-[#0769AD]" /> },

  // Backend
  { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
  { name: "Express.js", icon: <SiExpress className="text-white" /> },
  { name: "PHP (MVC)", icon: <FaPhp className="text-[#777BB4]" /> },
  { name: "REST APIs", icon: <FaCode className="text-blue-400" /> },
  { name: "Microservices", icon: <FaNetworkWired className="text-purple-400" /> },

  // Database
  { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },

  // Cloud
  { name: "AWS", icon: <FaAws className="text-[#FF9900]" /> },
  { name: "Hostinger", icon: <SiHostinger className="text-[#673DE6]" /> },

  // Auth
  { name: "JWT", icon: <SiJsonwebtokens className="text-[#D63AFF]" /> },
  { name: "OAuth", icon: <SiAuth0 className="text-[#EB5424]" /> },
  { name: "RBAC", icon: <FaShieldAlt className="text-green-400" /> },

  // CMS
  { name: "Shopify (Liquid)", icon: <SiShopify className="text-[#96BF48]" /> },
  { name: "OpenCart", icon: <FaOpencart className="text-[#26B4D7]" /> },
  { name: "WooCommerce", icon: <SiWoocommerce className="text-[#96588A]" /> },

  // Specialization
  { name: "TensorFlow", icon: <SiTensorflow className="text-[#FF6F00]" /> },
  { name: "API Integrations", icon: <FaNetworkWired className="text-yellow-400" /> },
  { name: "Performance", icon: <FaTachometerAlt className="text-red-500" /> },
];

const Skills = () => {
  // Split skills into two rows for better visual balance
  const firstRow = skillsData.slice(0, Math.ceil(skillsData.length / 2));
  const secondRow = skillsData.slice(Math.ceil(skillsData.length / 2));

  return (
    <section id="skills" className="relative py-20 bg-black overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-blue-900/10 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6"></div>
        <p className="text-gray-400 text-lg">
          Technologies I work with to build high-performance applications
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {/* First Marquee Row */}
        <div className="relative flex overflow-hidden group">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>

          <div className="flex gap-8 whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
            {/* Render twice for seamless loop */}
            {[...firstRow, ...firstRow].map((skill, index) => (
              <SkillBadge key={`${skill.name}-${index}`} skill={skill} />
            ))}
          </div>
        </div>

        {/* Second Marquee Row - Reverse Direction */}
        <div className="relative flex overflow-hidden group">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>

          <div className="flex gap-8 whitespace-nowrap animate-marquee-reverse group-hover:[animation-play-state:paused]">
            {[...secondRow, ...secondRow].map((skill, index) => (
              <SkillBadge key={`${skill.name}-${index}`} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillBadge = ({ skill }: { skill: { name: string; icon: JSX.Element } }) => (
  <div className="group/badge relative flex items-center gap-4 px-8 py-4 bg-white/5 backdrop-blur-md border border-blue-500/20 rounded-xl hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:scale-105 transition-all duration-300 cursor-default">
    <span className="text-3xl filter drop-shadow-md group-hover/badge:animate-pulse">
      {skill.icon}
    </span>
    <span className="text-white font-medium text-lg tracking-wide group-hover/badge:text-cyan-300 transition-colors">
      {skill.name}
    </span>
  </div>
);

export default Skills;
