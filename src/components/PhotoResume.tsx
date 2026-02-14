import { motion } from 'framer-motion';

const PhotoResume = () => {
    return (
        <section id="photo-resume" className="py-20 relative bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            Visual Resume
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-white/20 mx-auto rounded-full"></div>
                </motion.div>

                {/* Resume Preview Placeholder - User should replace the src with actual image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="glass-card p-1 md:p-2 max-w-5xl mx-auto h-[800px] border-neon-blue/30 shadow-[0_0_30px_rgba(0,212,255,0.15)] overflow-hidden rounded-xl bg-gray-900"
                >
                    <iframe
                        src="/Mayur_Gavali_CV (1).pdf#toolbar=0&navpanes=0&scrollbar=0"
                        className="w-full h-full rounded-lg"
                        title="Resume Preview"
                    >
                    </iframe>
                </motion.div>

                <div className="text-center mt-8">
                    <a
                        href="/Mayur_Gavali_CV (1).pdf"
                        download
                        className="inline-flex items-center gap-3 px-8 py-4 bg-neon-blue/10 hover:bg-neon-blue/20 text-neon-blue border border-neon-blue/50 rounded-lg font-semibold transition-all duration-300 hover:shadow-neon hover:scale-105"
                    >
                        Download PDF Version
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PhotoResume;
