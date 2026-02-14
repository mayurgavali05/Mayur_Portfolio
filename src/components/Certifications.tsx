import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCertificate, FaGraduationCap, FaAward, FaExternalLinkAlt } from 'react-icons/fa';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      title: "Software Trainee Apprenticeship",
      issuer: "Test Yantra",
      date: "2023",
      description: "Intensive software training program focusing on manual/automation testing and software development life cycle methodologies.",
      icon: <FaAward />,
      color: "from-orange-500 to-red-500",
      credentialUrl: "",
      featured: true
    }
  ];

  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Savitribai Phule Pune University",
      period: "2022 – 2024",
      description: "Specialized in Computer Science",
      grade: "62%"
    },
    {
      degree: "B.Sc. Computer Science",
      institution: "Tuljaram Chaturchand College, Baramati",
      period: "2022",
      description: "Bachelor of Science in Computer Science",
      grade: "65%"
    },
    {
      degree: "HSC – Computer Science",
      institution: "Tuljaram Chaturchand College, Baramati",
      period: "2019",
      description: "Higher Secondary Certificate in Science",
      grade: "60%"
    },
    {
      degree: "SSC",
      institution: "M.E.S. High School, Baramati",
      period: "2017",
      description: "Secondary School Certificate",
      grade: "76%"
    }
  ];

  return (
    <section ref={ref} id="certifications" className="relative py-32 bg-black overflow-hidden">
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
              Certifications & Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </motion.div>

        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-white mb-10 flex items-center gap-3"
          >
            <FaCertificate className="text-purple-400" />
            Professional Certifications
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative ${cert.featured ? 'md:col-span-2' : ''}`}
              >
                <div className="relative h-full p-8 bg-gradient-to-br from-gray-900 to-black border border-purple-500/20 rounded-2xl hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm hover:scale-[1.02]">
                  <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>

                  <div className="relative z-10 flex flex-col sm:flex-row gap-6">
                    <div className={`flex-shrink-0 w-20 h-20 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center text-white text-3xl shadow-lg`}>
                      {cert.icon}
                    </div>

                    <div className="flex-1 space-y-3">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                            {cert.title}
                          </h4>
                          <p className={`text-lg bg-gradient-to-r ${cert.color} bg-clip-text text-transparent font-semibold`}>
                            {cert.issuer}
                          </p>
                        </div>
                        <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-400 text-sm font-semibold">
                          {cert.date}
                        </span>
                      </div>

                      <p className="text-gray-400 leading-relaxed">
                        {cert.description}
                      </p>

                      {/* @ts-ignore */}
                      {cert.image && (
                        <div className="mt-4 rounded-lg overflow-hidden border border-purple-500/20">
                          <img
                            // src={cert.image}
                            alt={cert.title}
                            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}

                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${cert.color} text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-sm`}
                        >
                          <span>View Credential</span>
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
                  </div>

                  {cert.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-purple-500 text-white text-xs font-bold rounded-full shadow-lg">
                        FEATURED
                      </span>
                    </div>
                  )}

                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl font-bold text-white mb-10 flex items-center gap-3"
          >
            <FaGraduationCap className="text-purple-400" />
            Education
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full p-8 bg-gradient-to-br from-gray-900 to-black border border-purple-500/20 rounded-2xl hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-300"></div>

                  <div className="relative z-10 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                          {edu.degree}
                        </h4>
                        <p className="text-lg text-purple-400 font-semibold">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="text-4xl text-purple-400 opacity-20 group-hover:opacity-40 transition-opacity">
                        <FaGraduationCap />
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <span>{edu.period}</span>
                    </div>

                    <p className="text-gray-400 leading-relaxed">
                      {edu.description}
                    </p>

                    <div className="pt-2">
                      <span className="px-3 py-1.5 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-sm font-semibold">
                        {edu.grade}
                      </span>
                    </div>
                  </div>

                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
