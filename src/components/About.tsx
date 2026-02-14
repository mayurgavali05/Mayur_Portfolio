import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaServer, FaCloud, FaShieldAlt } from 'react-icons/fa';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: <FaServer />,
      title: "Backend Performance",
      description: "Optimized API response times by 40% through efficient database queries and caching strategies"
    },
    {
      icon: <FaShieldAlt />,
      title: "API Security",
      description: "Implemented JWT authentication, rate limiting, and secure payment integrations"
    },
    {
      icon: <FaCloud />,
      title: "Cloud Deployment",
      description: "Expert in AWS deployment, EC2 management, and scalable cloud architecture"
    },
    {
      icon: <FaCode />,
      title: "Full Stack Mastery",
      description: "End-to-end development from React frontends to Node.js backends and database design"
    }
  ];

  return (
    <section ref={ref} id="about" className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
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
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="relative p-8 bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl"></div>
              <p className="text-gray-300 text-lg leading-relaxed relative z-10">
                Full Stack Developer with <span className="text-purple-400 font-semibold">2.5+ years of experience</span> specializing in building robust backend systems and scalable web applications. Expert in <span className="text-blue-400 font-semibold">Node.js, React, MongoDB, MySQL, and AWS</span> cloud infrastructure.
              </p>
            </div>

            <div className="relative p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl backdrop-blur-sm">
              <p className="text-gray-300 text-lg leading-relaxed">
                Proven track record in <span className="text-purple-400 font-semibold">optimizing system performance</span>, implementing secure payment gateways (Razorpay, Stripe), and integrating complex APIs including Shopify. Proficient in PHP MVC architecture and modern DevOps practices.
              </p>
            </div>

            <div className="relative p-8 bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl backdrop-blur-sm">
              <p className="text-gray-300 text-lg leading-relaxed">
                Passionate about <span className="text-blue-400 font-semibold">clean code</span>, <span className="text-purple-400 font-semibold">system architecture</span>, and delivering production-ready solutions that drive business value. Currently seeking opportunities to contribute to innovative projects.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="group relative p-6 bg-black/40 border border-purple-500/20 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:scale-105 cursor-pointer backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 rounded-xl transition-all duration-300"></div>

                <div className="relative z-10 space-y-3">
                  <div className="text-4xl text-purple-400 group-hover:text-purple-300 transition-colors">
                    {highlight.icon}
                  </div>
                  <h3 className="text-white font-semibold text-lg">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>

                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
