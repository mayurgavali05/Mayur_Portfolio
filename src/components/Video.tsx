import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaPlay, FaDownload, FaPause } from 'react-icons/fa';

const Video = () => {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isPlaying, setIsPlaying] = useState(false);

  const videos = [
    {
      title: "Guest Lecture Highlights",
      description: "Key moments from my technical session at IIT Bombay",
      thumbnail: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      videoUrl: "/videos/lecture.mp4",
      duration: "45:20",
      downloadUrl: "/videos/lecture.mp4"
    },
    {
      title: "Project Walkthrough",
      description: "Detailed explanation of virtual try-on platform architecture",
      thumbnail: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      videoUrl: "/videos/project-demo.mp4",
      duration: "12:30",
      downloadUrl: "/videos/project-demo.mp4"
    },
    {
      title: "Technical Workshop",
      description: "Building scalable APIs with Node.js and Express",
      thumbnail: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=800",
      videoUrl: "/videos/workshop.mp4",
      duration: "28:15",
      downloadUrl: "/videos/workshop.mp4"
    }
  ];

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleDownload = (url: string, title: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title}.mp4`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section ref={ref} id="videos" className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
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
              Video Showcase
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Watch presentations, demos, and technical discussions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full bg-gradient-to-br from-gray-900 to-black border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 transition-all duration-300"></div>

                <div className="relative aspect-video overflow-hidden cursor-pointer" onClick={handlePlayPause}>
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-6 bg-purple-500/30 hover:bg-purple-500/50 border-2 border-white/50 rounded-full backdrop-blur-sm transition-colors cursor-pointer"
                    >
                      <FaPlay className="text-white text-3xl ml-1" />
                    </motion.div>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-black/60 border border-white/20 rounded text-white text-sm font-semibold backdrop-blur-sm">
                      {video.duration}
                    </span>
                  </div>
                </div>

                <div className="relative p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {video.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {video.description}
                  </p>

                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={handlePlayPause}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      <FaPlay />
                      <span>Watch</span>
                    </button>

                    <button
                      onClick={() => handleDownload(video.downloadUrl, video.title)}
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/20 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                    >
                      <FaDownload />
                    </button>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <div className="relative p-8 bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-2xl backdrop-blur-sm">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Featured Video Player
              </h3>
              <p className="text-gray-400">
                Watch the latest guest lecture presentation
              </p>

              <div className="relative max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden border border-purple-500/30 bg-black">
                <video
                  ref={videoRef}
                  className="w-full h-full"
                  poster={videos[0].thumbnail}
                  controls
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                >
                  <source src={videos[0].videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="flex justify-center gap-4 pt-4">
                <button
                  onClick={handlePlayPause}
                  className="flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  {isPlaying ? <FaPause /> : <FaPlay />}
                  <span>{isPlaying ? 'Pause' : 'Play'}</span>
                </button>

                <button
                  onClick={() => handleDownload(videos[0].downloadUrl, videos[0].title)}
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  <FaDownload />
                  <span>Download</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Video;
