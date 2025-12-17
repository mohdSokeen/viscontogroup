"use client";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 px-6 md:px-12 relative overflow-hidden">
            {/* Background Animated Gradient */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-rose-500 blur-2xl"
            />

            <div className="relative max-w-6xl mx-auto grid md:grid-cols-3 gap-10 z-10 text-center">
                {/* Logo Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <div className="flex items-center gap-6">
                        <div className="h-8 md:h-10 flex items-center overflow-visible">
                            <img src="/images/VG.png" alt="Workforce Partners" className="h-full w-auto object-contain scale-125 md:scale-230" />
                        </div>
                        <h2 className="text-xl font-bold text-white">Visconto Group Inc.</h2>
                    </div>
                    <p className="mt-2 text-gray-400 leading-relaxed">
                        Building long-term workforce partnerships with trust, expertise, and data-driven hiring.
                    </p>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-white text-lg font-semibold mb-3">Contact</h3>
                    <ul className="space-y-2 pl-30 text-gray-400 text-sm text-justify">
                        <li className="flex items-start gap-2">
                            <FontAwesomeIcon icon={faPhone} className="text-green-500 mt-1" />
                            +1 (000) 000-0000
                        </li>
                        <li className="flex  items-start gap-2">
                            <FontAwesomeIcon icon={faEnvelope} className="text-yellow-500 mt-1" />
                            Hr@viscontogroup.com
                        </li>
                        <li className="flex items-start gap-2">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500 mt-1" />
                            Toronto, Ontario, Canada
                        </li>
                    </ul>
                </motion.div>

                {/* Social Media */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-white text-lg font-semibold mb-3">Follow Us</h3>
                    <div className="flex justify-center gap-6">
                        <motion.a
                            whileHover={{ scale: 1.15 }}
                            className="cursor-pointer flex items-center justify-center"
                            href="https://www.linkedin.com/company/omrtech/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faLinkedin} size="lg" className="text-blue-400" />
                        </motion.a>
                        {/* <motion.a
                            whileHover={{ scale: 1.15 }}
                            className="cursor-pointer flex items-center justify-center"
                            href="https://x.com/omnireachtech"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faXTwitter} size="lg" className="text-black-400" />
                        </motion.a> */}
                    </div>
                </motion.div>
            </div>

            {/* Bottom Bar */}
            <div className="relative max-w-6xl mx-auto border-t border-gray-700 mt-10 pt-4 text-center text-gray-500 text-sm">
                <p>© {new Date().getFullYear()} Visconto Group Inc. All rights reserved.</p>
            </div>

            {/* Back to Top Button */}
            <motion.a
                href="#top"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.15 }}
                className="fixed bottom-5 right-5 bg-blue-600 text-white p-3 rounded-full shadow-lg cursor-pointer"
            >
                <FontAwesomeIcon icon={faArrowUp} />
            </motion.a>
        </footer>
    );
}