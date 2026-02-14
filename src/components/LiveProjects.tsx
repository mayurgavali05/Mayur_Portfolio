import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const LiveProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const liveProjects = [
    {
      title: "E-Commerce Platform",
      description: "Live production e-commerce site with 5,000+ monthly visitors",
      url: "https://example-store.com",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: ["5K+ Monthly Visitors", "99.9% Uptime", "< 2s Load Time"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Vendor Dashboard",
      description: "Real-time analytics dashboard serving multiple vendors",
      url: "https://vendor-dashboard.com",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: ["50+ Active Vendors", "Real-time Updates", "Advanced Analytics"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Design Archive Portal",
      description: "Cloud-based design asset management system",
      url: "https://design-archive.com",
      image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: ["10K+ Assets", "Cloud Storage", "Team Collaboration"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section ref={ref} id="live-projects" className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjOGI1Y2Y2IiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Live in Production
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real applications serving real users in production environments
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {liveProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full bg-gradient-to-br from-gray-900 to-black border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm hover:scale-[1.02]">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                <div className="relative aspect-video overflow-hidden cursor-pointer" onClick={() => setSelectedProject(index)}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>

                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/20 border border-green-500/50 rounded-full backdrop-blur-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-xs font-bold">LIVE</span>
                    </div>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60">
                    <div className="text-white text-6xl">
                      <FaExternalLinkAlt />
                    </div>
                  </div>
                </div>

                <div className="relative p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-2">
                    {project.stats.map((stat, statIndex) => (
                      <div
                        key={statIndex}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className={`w-1.5 h-1.5 bg-gradient-to-r ${project.color} rounded-full`}></div>
                        <span className="text-gray-300">{stat}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center px-4 py-3 bg-gradient-to-r ${project.color} text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg mt-6`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <FaExternalLinkAlt />
                      <span>View Live Project</span>
                    </div>
                  </a>
                </div>

                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-6xl w-full bg-gray-900 rounded-2xl overflow-hidden border border-purple-500/30"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors backdrop-blur-sm"
            >
              <FaTimes className="text-2xl" />
            </button>

            <div className="aspect-video">
              <iframe
                src={liveProjects[selectedProject].url}
                className="w-full h-full"
                title={liveProjects[selectedProject].title}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default LiveProjects;
