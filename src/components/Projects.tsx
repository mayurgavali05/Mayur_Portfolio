import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaExternalLinkAlt, FaReact, FaNode } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiExpress } from 'react-icons/si';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "AR Virtual Try-On E-commerce Platform",
      description:
        "Enterprise-level AR-based e-commerce solution developed for a fashion company. Built a virtual try-on engine allowing users to upload images, change backgrounds, and preview garments in real-time. Integrated payment gateways, Shopify APIs, and deployed on AWS with scalable backend architecture.",
      tech: [
        { name: "React", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNode /> },
        { name: "MongoDB", icon: <SiMongodb /> }
      ],
      image:
        "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800",
      website: "https://fab3d.in/",
      youtube: "https://www.youtube.com/shorts/TM6_IBQtbSU",
      company: true
    },
    {
      title: "Vendor Management Dashboard",
      description:
        "Full-featured dashboard system built for internal company operations. Includes order tracking, customer management, invoice generation, inventory monitoring, and real-time notifications using REST APIs and secure authentication.",
      tech: [
        { name: "React", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNode /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "Express", icon: <SiExpress /> }
      ],
      image:
        "https://images.pexels.com/photos/7679454/pexels-photo-7679454.jpeg?auto=compress&cs=tinysrgb&w=800",
      website: "https://dashboard-live-site.com",
      youtube: "https://youtube.com/dashboard-demo",
      company: true
    },
    {
      title: "Admin Analytics Dashboard",
      description:
        "Advanced admin panel for managing products, users, payments, and reports. Implemented role-based access control, dynamic reporting, and secure backend architecture designed for high performance and scalability.",
      tech: [
        { name: "React", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNode /> },
        { name: "MongoDB", icon: <SiMongodb /> }
      ],
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      website: "https://admin-dashboard.com",
      youtube: "https://youtube.com/admin-demo",
      company: true
    }
  ];

  return (
    <section ref={ref} id="projects" className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-purple-900/10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Production-ready company projects showcasing real-world scalability
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full bg-gradient-to-br from-gray-900 to-black border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm hover:scale-[1.02]">

                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>

                  {project.company && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full shadow-lg">
                        COMPANY PROJECT
                      </span>
                    </div>
                  )}
                </div>

                <div className="relative p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex items-center gap-2 px-3 py-1.5 bg-black/40 border border-purple-500/20 rounded-lg text-sm"
                      >
                        <span className="text-purple-400">{tech.icon}</span>
                        <span className="text-gray-300 font-medium">{tech.name}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    {project.website && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                      >
                        <FaExternalLinkAlt />
                        <span>Live Website</span>
                      </a>
                    )}

                    {project.youtube && (
                      <a
                        href={project.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                      >
                        <span>▶ Demo Video</span>
                      </a>
                    )}
                  </div>
                </div>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300"></div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;