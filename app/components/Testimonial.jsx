"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faStar, faLaptopCode, faUsersCog, faHandshake, faLifeRing, faChartLine } from "@fortawesome/free-solid-svg-icons";


const testimonials = [
    {
        quote: "They get it done.",
        text: "The Visconto Group delivers results with precision, professionalism, and consistency.",
        icon: faCheckCircle,
        color: "text-green-600",
    },
    {
        quote: "They go above and beyond.",
        text: "A trusted staffing partner known for follow-through, integrity, and industry expertise.",
        icon: faStar,
        color: "text-yellow-500",
    },
    {
        quote: "A polished IT staffing partner.",
        text: "The Visconto Group aligns technology talent with real business needs.",
        icon: faLaptopCode,
        color: "text-indigo-600",
    },
    {
        quote: "Client-focused and solutions-driven.",
        text: "Strategic thinking, transparency, and a commitment to what’s best for the client.",
        icon: faUsersCog,
        color: "text-purple-600",
    },
    {
        quote: "A respected and valued partner.",
        text: "Professional, collaborative, and reliable in every engagement.",
        icon: faHandshake,
        color: "text-blue-600",
    },
    {
        quote: "An invaluable resource.",
        text: "Proactive support, clear communication, and dependable execution.",
        icon: faLifeRing,
        color: "text-rose-500",
    },
    {
        quote: "A strategic staffing partner.",
        text: "The Visconto Group strengthens teams and drives successful IT delivery.",
        icon: faChartLine,
        color: "text-emerald-600",
    },
];

export default function Testimonial() {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 4500);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="testimonial" className="scroll-mt-35 px-6 md:px-20">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-5xl mx-auto text-center mb-15"
            >
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-10">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-rose-500">
                        What Clients Have To Say About Us
                    </span>
                </h2>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="max-w-3xl mx-auto">
                        <div className="relative overflow-hidden rounded-2xl bg-white/70 dark:bg-black/40 backdrop-blur border shadow-lg p-10 min-h-[240px] flex items-center justify-center text-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -30 }}
                                    transition={{ duration: 0.6 }}
                                    className="absolute flex flex-col items-center"
                                >
                                    <div className="mb-4">
                                        <FontAwesomeIcon
                                            icon={testimonials[index].icon}
                                            className={`text-3xl ${testimonials[index].color}`}
                                        />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                                        “
                                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-rose-500">
                                            {testimonials[index].quote}
                                        </span>
                                        ”
                                    </h3>

                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl italic">
                                        {testimonials[index].text}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
