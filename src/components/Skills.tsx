import { motion } from 'framer-motion';
import {
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPhp, FaAws,
  FaShieldAlt, FaNetworkWired, FaCode, FaOpencart, FaGitAlt, FaDocker
} from 'react-icons/fa';
import {
  SiJavascript, SiTailwindcss, SiJquery, SiExpress, SiMongodb,
  SiMysql, SiHostinger, SiJsonwebtokens, SiShopify,
  SiWoocommerce, SiTensorflow, SiAuth0, SiPostman, SiRedis
} from 'react-icons/si';

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
      { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
      { name: "jQuery", icon: <SiJquery className="text-[#0769AD]" /> },
    ]
  },
  {
    title: "Backend Infrastructure",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="text-white" /> },
      { name: "PHP (MVC)", icon: <FaPhp className="text-[#777BB4]" /> },
      { name: "REST APIs", icon: <FaCode className="text-blue-400" /> },
      { name: "Microservices", icon: <FaNetworkWired className="text-purple-400" /> },
    ]
  },
  {
    title: "Database & Cloud",
    skills: [
      { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "AWS", icon: <FaAws className="text-[#FF9900]" /> },
      { name: "Redis", icon: <SiRedis className="text-[#DC382D]" /> },
      { name: "Hostinger", icon: <SiHostinger className="text-[#673DE6]" /> },
    ]
  },
  {
    title: "CMS & E-Commerce",
    skills: [
      { name: "Shopify", icon: <SiShopify className="text-[#96BF48]" /> },
      { name: "WooCommerce", icon: <SiWoocommerce className="text-[#96588A]" /> },
      { name: "OpenCart", icon: <FaOpencart className="text-[#26B4D7]" /> },
    ]
  },
  {
    title: "Tools & Security",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
      { name: "Docker", icon: <FaDocker className="text-[#2496ED]" /> },
      { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
      { name: "JWT", icon: <SiJsonwebtokens className="text-[#D63AFF]" /> },
      { name: "OAuth", icon: <SiAuth0 className="text-[#EB5424]" /> },
    ]
  },
  {
    title: "Specialization",
    skills: [
      { name: "TensorFlow (AR)", icon: <SiTensorflow className="text-[#FF6F00]" /> },
      { name: "Security", icon: <FaShieldAlt className="text-green-400" /> },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-32 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building scalable, high-performance applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl bg-gray-900/40 border-white/5 hover:border-neon-blue/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.1)] group"
            >
              <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4 group-hover:text-neon-blue transition-colors">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300 group/skill"
                  >
                    <span className="text-2xl filter drop-shadow-lg group-hover/skill:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </span>
                    <span className="text-gray-300 text-sm font-medium group-hover/skill:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

