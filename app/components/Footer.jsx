"use client";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-gray-300 px-6 pt-12 pb-10 overflow-hidden">
      {/* Background Gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-rose-500 blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 text-center lg:text-left">

        {/* Logo Column */}
        <div className="flex justify-center lg:justify-start">
          <img
            src="/images/VG.png"
            alt="Visconto Group"
            className="h-22 md:h-26 w-auto object-contain"
          />
        </div>

        {/* Brand Info */}
        <div>
          <h2 className="text-lg font-semibold text-white">
            Visconto Group Inc.
          </h2>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-sm mx-auto lg:mx-0">
            Building long-term workforce partnerships with trust, expertise,
            and data-driven hiring.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-base font-semibold mb-4">
            Contact
          </h3>

          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3 justify-center lg:justify-start">
              <FontAwesomeIcon icon={faPhone} className="text-green-500 mt-1" />
              <span>267-753-8488</span>
            </li>

            <li className="flex items-start gap-3 justify-center lg:justify-start">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-yellow-500 mt-1"
              />
              <span>hr@viscontogroup.com</span>
            </li>

            <li className="flex items-start gap-3 justify-center lg:justify-start">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-blue-500 mt-1"
              />
              <span>308 Flint Rd, Langhorne, PA 19047, United States</span>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white text-base font-semibold mb-4">
            Follow Us
          </h3>

          <div className="flex justify-center lg:justify-start gap-6">
            {/* LinkedIn */}
            <motion.a
              whileHover={{ scale: 1.15 }}
              className="cursor-pointer"
              href="https://www.linkedin.com/company/the-visconto-group-inc./"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visconto Group on LinkedIn"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="lg"
                className="text-blue-500 hover:text-blue-600 transition"
              />
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              whileHover={{ scale: 1.15 }}
              className="cursor-pointer"
              href="https://wa.me/8126513033?text=Hello%20Visconto%20Group%20Team%2C%0A%0AI'm%20interested%20in%20connecting%20with%20you%20regarding%20recruitment%20opportunities%20and%20services.%0A%0APlease%20let%20me%20know%20a%20convenient%20time%20to%20discuss.%0A%0AThank%20you."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Visconto Group on WhatsApp"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                size="lg"
                className="text-green-500 hover:text-green-600 transition"
              />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 max-w-7xl mx-auto mt-12 border-t border-gray-700 pt-5 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Visconto Group Inc. All rights reserved.
      </div>

      {/* Back to Top */}
      <a
        href="#top"
        className="fixed bottom-4 right-4 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition"
        aria-label="Back to top"
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </a>
    </footer>
  );
}
