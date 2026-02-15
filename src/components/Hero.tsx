import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload, FaRocket, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-navy-900/30 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-blue/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Floating Icons Background (Optional/Subtle) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Add subtle floating tech icons later if needed, kept clean for now */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-left"
        >
          <div className="inline-block px-4 py-2 bg-navy-800/50 border border-neon-blue/30 rounded-full backdrop-blur-md">
            <span className="text-neon-blue text-sm font-semibold tracking-wide uppercase">
              Available for Hire
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight">
              Mayur <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-purple-600">Gavali</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl text-gray-300 font-medium">
              Full Stack Software Engineer <br />
              <span className="text-neon-blue text-lg sm:text-xl font-normal">(MERN / PHP / AWS)</span>
            </h2>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            Node.js • React.js • Express.js • MySQL • MongoDB • PHP (MVC) • AWS
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="/Mayur_Gavali_CV (1).pdf"
              download="Mayur_Gavali_CV.pdf"
              className="flex items-center gap-3 px-8 py-4 bg-neon-blue text-black font-bold rounded-lg hover:bg-neon-blue/90 hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all duration-300 transform hover:-translate-y-1"
            >
              <FaDownload />
              Download Resume
            </a>

            <button
              onClick={() => scrollToSection('projects')}
              className="flex items-center gap-3 px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 hover:border-neon-blue/50 hover:text-neon-blue transition-all duration-300"
            >
              <FaRocket />
              View Projects
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-3 px-8 py-4 bg-navy-800/50 border border-navy-800 text-gray-300 font-semibold rounded-lg hover:bg-navy-800 hover:text-white transition-all duration-300"
            >
              <FaEnvelope />
              Contact Me
            </button>
          </div>

          <div className="flex gap-6 pt-8">
            <a href="https://github.com/mayurgavali05" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-2xl">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/mayur-gavali-20b8a31b8" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-blue transition-colors text-2xl">
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Visuals */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/20 to-purple-500/20 rounded-full blur-[50px] animate-pulse"></div>

            <div className="relative w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] rounded-full p-2 border-2 border-neon-blue/30 shadow-[0_0_50px_rgba(0,212,255,0.2)] bg-black/50 backdrop-blur-sm">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-black relative group">
                <img
                  src="/profile.png"
                  alt="Mayur Gavali"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neon-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Floating Tech Badges around photo */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-0 glass-card p-3 rounded-xl border-neon-blue/30 bg-black/80 shadow-lg"
            >
              <span className="text-2xl">🚀</span>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 left-0 glass-card p-3 rounded-xl border-purple-500/30 bg-black/80 shadow-lg"
            >
              <span className="text-2xl">💻</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
