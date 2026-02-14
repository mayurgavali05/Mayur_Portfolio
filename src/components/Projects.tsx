import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaExternalLinkAlt, FaReact, FaNodeJs, FaPhp, FaAws, FaYoutube, FaPlay } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiExpress, SiTensorflow } from 'react-icons/si';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const project = {
    title: "Virtual Try-On & E-Commerce Platform",
    subtitle: "(FAB3D)",
    type: "AR-based E-Commerce & Virtual Try-On Platform",
    description: "An advanced AR-based Virtual Try-On and E-Commerce platform that allows users to preview garments digitally before purchase. The system supports realistic fabric visualization, background handling, optimized image rendering, and seamless integration with multiple CMS platforms.",
    features: [
      "AR-based garment virtual try-on experience",
      "Real-time fabric and texture rendering",
      "Background removal and image optimization",
      "Optimized performance for fast load times",
      "Multi-CMS integration (Shopify, OpenCart, WooCommerce)",
      "Scalable backend architecture using Node.js",
      "Secure REST APIs for product and user operations"
    ],
    tech: [
      { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="text-white" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
      { name: "PHP (MVC)", icon: <FaPhp className="text-[#777BB4]" /> },
      { name: "TensorFlow", icon: <SiTensorflow className="text-[#FF6F00]" /> },
      { name: "AWS", icon: <FaAws className="text-[#FF9900]" /> }
    ],
    links: {
      live: "https://fab3d.in/",
      demo: "https://www.youtube.com/shorts/TM6_IBQtbSU"
    },
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1200"
  };

  return (
    <section ref={ref} id="projects" className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-blue-900/10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Featured Project
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing innovation in Augmented Reality and E-Commerce
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card bg-gradient-to-br from-gray-900 via-black to-gray-900 border-neon-blue/30 rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(0,212,255,0.1)] hover:shadow-[0_0_50px_rgba(0,212,255,0.2)] transition-shadow duration-500"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Column: Content */}
            <div className="p-8 sm:p-12 flex flex-col justify-center space-y-8 relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/5 rounded-full blur-[80px] pointer-events-none"></div>

              <div>
                <div className="inline-block px-4 py-1.5 mb-4 bg-neon-blue/10 border border-neon-blue/30 rounded-full">
                  <span className="text-neon-blue text-sm font-semibold tracking-wide uppercase">
                    {project.type}
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <span className="text-2xl text-purple-400 font-medium block mb-6">{project.subtitle}</span>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="space-y-3 mb-8">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neon-blue shadow-[0_0_10px_rgba(0,212,255,0.8)]"></span>
                      <span className="text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mb-10">
                  {project.tech.map((tech, i) => (
                    <div key={i} className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm hover:border-neon-blue/30 hover:bg-white/10 transition-colors duration-300">
                      <span className="text-lg">{tech.icon}</span>
                      <span className="text-sm font-medium text-gray-300">{tech.name}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-neon-blue text-black font-bold rounded-xl hover:bg-neon-blue/90 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all duration-300"
                  >
                    <FaExternalLinkAlt />
                    View Live Project
                  </a>
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 hover:scale-105 hover:border-red-500/50 hover:text-red-400 transition-all duration-300 group"
                  >
                    <FaYoutube className="text-red-500 group-hover:scale-110 transition-transform" />
                    Watch Demo Video
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Visual */}
            <div className="relative h-[400px] lg:h-auto overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60"></div>

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-20 h-20 bg-red-600/90 rounded-full flex items-center justify-center text-white text-3xl shadow-lg hover:scale-110 hover:bg-red-600 transition-all duration-300 pl-1"
                >
                  <FaPlay />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;