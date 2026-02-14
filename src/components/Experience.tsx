import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FaBriefcase, FaCalendar, FaRocket, FaChartLine } from 'react-icons/fa';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: "Textronics Design Systems Pvt. Ltd.",
      role: "Software Developer",
      period: "Jan 2024 - Present",
      location: "Pune, India",
      type: "Full-time",
      achievements: [
        "Optimized API response times by 40% through efficient database indexing and query optimization",
        "Integrated Shopify APIs for seamless e-commerce functionality and inventory management",
        "Implemented secure payment gateways using Razorpay and Stripe with PCI compliance",
        "Deployed and managed applications on AWS EC2 with automated CI/CD pipelines",
        "Led development of MERN stack applications serving 10,000+ active users"
      ],
      metrics: [
        { value: 40, label: "Performance Boost", suffix: "%" },
        { value: 10000, label: "Active Users", suffix: "+" }
      ],
      color: "from-purple-500 to-blue-500"
    },
    {
      company: "Deinertech Solution Pvt. Ltd.",
      role: "Backend Developer",
      period: "Jul 2022 - Dec 2023",
      location: "Mumbai, India",
      type: "Full-time",
      achievements: [
        "Developed RESTful APIs using Node.js and Express.js for multiple client projects",
        "Designed and optimized MySQL and MongoDB database schemas for high-performance data retrieval",
        "Implemented JWT-based authentication and authorization systems",
        "Built custom PHP MVC framework applications for enterprise clients",
        "Collaborated with frontend teams to deliver seamless full-stack solutions"
      ],
      metrics: [
        { value: 15, label: "Projects Delivered", suffix: "+" },
        { value: 99, label: "Uptime", suffix: ".9%" }
      ],
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const CountUpAnimation = ({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isInView) return;

      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.floor(end * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }, [isInView, end, duration]);

    return <span>{count}{suffix}</span>;
  };

  return (
    <section ref={ref} id="experience" className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
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
              Professional Journey
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            2.5+ years of delivering high-impact solutions
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 hidden lg:block"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative lg:grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? '' : 'lg:grid-flow-dense'
                }`}
              >
                <div className={`${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:col-start-2'}`}>
                  <div className="group relative p-8 bg-gradient-to-br from-gray-900 to-black border border-purple-500/20 rounded-2xl hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm hover:scale-[1.02]">
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>

                    <div className="relative z-10 space-y-6">
                      <div>
                        <div className="flex items-center gap-2 mb-2 lg:justify-end">
                          <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-400 text-xs font-semibold">
                            {exp.type}
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                          {exp.role}
                        </h3>
                        <p className={`text-xl bg-gradient-to-r ${exp.color} bg-clip-text text-transparent font-semibold mb-3`}>
                          {exp.company}
                        </p>
                        <div className="flex items-center gap-4 text-gray-400 text-sm lg:justify-end">
                          <div className="flex items-center gap-2">
                            <FaCalendar className="text-purple-400" />
                            <span>{exp.period}</span>
                          </div>
                          <span>•</span>
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-300 leading-relaxed">
                            <FaRocket className="text-purple-400 mt-1 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="grid grid-cols-2 gap-4 pt-4">
                        {exp.metrics.map((metric, i) => (
                          <div key={i} className="p-4 bg-black/40 border border-purple-500/20 rounded-xl text-center">
                            <div className="text-3xl font-bold text-purple-400 mb-1">
                              <CountUpAnimation end={metric.value} suffix={metric.suffix} />
                            </div>
                            <div className="text-gray-400 text-sm">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300`}></div>
                  </div>
                </div>

                <div className="hidden lg:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 w-16 h-16">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className={`w-16 h-16 bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <FaBriefcase className="text-white text-2xl" />
                  </motion.div>
                  <div className={`absolute w-16 h-16 bg-gradient-to-r ${exp.color} rounded-full blur-xl opacity-50`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-full backdrop-blur-sm">
            <FaChartLine className="text-2xl text-purple-400" />
            <span className="text-gray-300 text-lg font-semibold">
              Continuously growing and learning new technologies
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
