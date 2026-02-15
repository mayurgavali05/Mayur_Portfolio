import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaTimes, FaExpand } from 'react-icons/fa';

const GuestLectures = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const events = [
        {
            id: 1,
            image: "/guest-lecture-1.JPG",
            caption: "Guest Lecture on 'Career Paths in Tech' at Tuljaram Chaturchand College, Baramati",
            date: "2024"
        },
        {
            id: 2,
            image: "/guest-lecture-2.JPG",
            caption: "Interactive Session with Computer Science Students",
            date: "2024"
        },
        {
            id: 3,
            image: "/guest-lecture-3.JPG",
            caption: "Interactive Session with Computer Science Students",
            date: "2024"
        }
    ];

    return (
        <section ref={ref} id="community" className="relative py-32 bg-black overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            Community Contribution
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-neon-blue mx-auto rounded-full mb-6 shadow-[0_0_10px_rgba(0,212,255,0.8)]"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Giving back to the community through guest lectures and career guidance sessions.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="group relative cursor-pointer"
                            onClick={() => setSelectedImage(event.image)}
                        >
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group-hover:border-neon-blue/50 transition-all duration-300 shadow-lg group-hover:shadow-[0_0_30px_rgba(0,212,255,0.15)]">
                                <div className="absolute inset-0 bg-gray-900 animate-pulse">
                                    {/* Image Placeholder if not found - styles will handle basic text if img fails to load, but ideally user provides images */}
                                </div>
                                <img
                                    src={event.image}
                                    alt={event.caption}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = `https://placehold.co/800x600/1a1a1a/FFF?text=Image+${event.id}`;
                                    }}
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="p-3 rounded-full bg-neon-blue/20 border border-neon-blue/50 text-neon-blue backdrop-blur-md">
                                        <FaExpand className="text-xl" />
                                    </div>
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent opacity-100">
                                    <p className="text-white font-medium text-sm line-clamp-2 drop-shadow-md">
                                        {event.caption}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 p-3 text-white/50 hover:text-white transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <FaTimes className="text-3xl" />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="relative max-w-5xl max-h-[90vh] rounded-xl overflow-hidden border border-white/10 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage}
                                alt="Enlarged view"
                                className="w-full h-full object-contain"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default GuestLectures;
