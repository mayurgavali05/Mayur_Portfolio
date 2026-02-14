import { motion } from 'framer-motion';

const Patent = () => {
    return (
        <section id="patent" className="py-20 relative bg-black overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-neon-blue to-purple-500 bg-clip-text text-transparent">
                            Patent Idea
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto text-center border-neon-blue/20 shadow-neon">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        AI–AR Fabric Behavior & Usage Prediction System
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                        A concept-stage patent for a revolutionary system that predicts fabric shrinkage, color fading, wrinkle behavior,
                        and durability using AI analysis and AR scanning. This unique visual prediction model aims to transform
                        textile quality assurance and consumer purchasing decisions.
                    </p>
                    <div className="inline-block px-6 py-2 rounded-full border border-neon-blue/50 bg-neon-blue/10 text-neon-blue font-semibold tracking-wider">
                        CONCEPT STAGE
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Patent;
