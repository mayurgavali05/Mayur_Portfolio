import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaTimes, FaExpand } from 'react-icons/fa';

const Media = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const mediaItems = [
    {
      title: "Guest Lecture at IIT Bombay",
      description: "Presented on Modern Web Development",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2023"
    },
    {
      title: "Technical Workshop",
      description: "Node.js Best Practices Session",
      image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2023"
    },
    {
      title: "Industry Panel Discussion",
      description: "Future of Backend Development",
      image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2024"
    },
    {
      title: "Hackathon Mentor",
      description: "Guiding Students in Full Stack Development",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2024"
    },
    {
      title: "Tech Conference Speaker",
      description: "Scalable Backend Architecture",
      image: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2023"
    },
    {
      title: "University Collaboration",
      description: "Industry Academia Partnership",
      image: "https://images.pexels.com/photos/1181562/pexels-photo-1181562.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2024"
    }
  ];

  return (
    <section ref={ref} id="media" className="relative py-32 bg-black overflow-hidden">
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
              Media & Events
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Sharing knowledge through guest lectures and industry events
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-4 bg-purple-500/20 border border-purple-500/50 rounded-full backdrop-blur-sm">
                    <FaExpand className="text-white text-2xl" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="space-y-2">
                    <span className="inline-block px-2 py-1 bg-purple-500/20 border border-purple-500/30 rounded text-purple-400 text-xs font-semibold">
                      {item.date}
                    </span>
                    <h3 className="text-white font-bold text-lg">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-sm"
            >
              <FaTimes className="text-2xl" />
            </button>

            <div className="relative rounded-2xl overflow-hidden border border-purple-500/30">
              <img
                src={mediaItems[selectedImage].image}
                alt={mediaItems[selectedImage].title}
                className="w-full h-auto"
              />

              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                <span className="inline-block px-3 py-1.5 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-400 text-sm font-semibold mb-3">
                  {mediaItems[selectedImage].date}
                </span>
                <h3 className="text-white font-bold text-2xl mb-2">
                  {mediaItems[selectedImage].title}
                </h3>
                <p className="text-gray-300 text-lg">
                  {mediaItems[selectedImage].description}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Media;
