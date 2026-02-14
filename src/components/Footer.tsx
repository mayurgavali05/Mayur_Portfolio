import { motion } from 'framer-motion';
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-purple-500/20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Mayur Gavali
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer passionate about building scalable applications and solving complex problems.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/mayurgavali"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/50 rounded-lg text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-110"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://linkedin.com/in/mayurgavali"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/50 rounded-lg text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="mailto:mayur.gavali@email.com"
                className="p-3 bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/50 rounded-lg text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-110"
              >
                <FaEnvelope className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-8"
        />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            © {currentYear} Mayur Gavali. Crafted with{' '}
            <FaHeart className="inline text-red-500 animate-pulse" /> and creativity
          </p>

          <button
            onClick={scrollToTop}
            className="group p-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 rounded-full transition-all duration-300 hover:scale-110 shadow-lg shadow-purple-500/50"
          >
            <FaArrowUp className="text-white text-lg group-hover:animate-bounce" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500"></div>
    </footer>
  );
};

export default Footer;
