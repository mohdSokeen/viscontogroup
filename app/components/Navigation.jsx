"use client";
import { useState } from "react";
import { motion, useAnimation } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-1/2 transform -translate-x-1/2 top-6 z-50 px-4 py-3 rounded-2xl w-[94%] max-w-6xl backdrop-blur-lg bg-white/30 border border-white/10 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 md:h-10 flex items-center overflow-visible">
            <img src="/images/VG.png" alt="Workforce Partners" className="h-full w-auto object-contain scale-125 md:scale-200" />
          </div>

          <div className="hidden sm:block">
            <div className="text-lg font-semibold"> <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-rose-500">Visconto Group Inc.</span></div>
            <div className="text-xs ml-7 opacity-70 italic tracking-wide">Vision • Values • Versatility</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-m font-bold">
          <a href="#home" className="relative group opacity-70 font-bold">
            Home
            <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-indigo-500 to-rose-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>

          <a href="#services" className="relative group opacity-70 font-bold">
            Services
            <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-indigo-500 to-rose-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>

          <a href="#about" className="relative group opacity-70 font-bold">
            About
            <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-indigo-500 to-rose-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>

          <div className="flex justify-center gap-6">
            <motion.a
              whileHover={{ scale: 1.15 }}
              className="cursor-pointer flex items-center justify-center"
              href="https://www.linkedin.com/company/omrtech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" className="text-blue-600" />
            </motion.a>

            {/* <motion.a
              whileHover={{ scale: 1.15 }}
              className="cursor-pointer flex items-center justify-center"
              href="https://x.com/omnireachtech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faXTwitter} size="lg" className="text-black" />
            </motion.a> */}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <button onClick={() => setOpen(s => !s)} className="p-2 rounded">
            <FontAwesomeIcon icon={open ? faTimes : faBars} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="mt-3 md:hidden bg-white/60 p-4 rounded-xl backdrop-blur-md border border-white/10">
          <a className="block py-2 font-bold text-gray-900 hover:text-indigo-600 transition-colors" href="#home">Home</a>
          <a className="block py-2 font-bold text-gray-900 hover:text-indigo-600 transition-colors" href="#services">Services</a>
          <a className="block py-2 font-bold text-gray-900 hover:text-indigo-600 transition-colors" href="#about">About</a>
          <div className="mt-4 flex items-center justify-start gap-4">
            <motion.a
              whileHover={{ scale: 1.15 }}
              className="cursor-pointer flex items-center justify-center"
              href="https://www.linkedin.com/company/omrtech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" className="text-blue-600" />
            </motion.a>

            {/* <motion.a
              whileHover={{ scale: 1.15 }}
              className="cursor-pointer flex items-center justify-center"
              href="https://x.com/omnireachtech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faXTwitter} size="lg" className="text-black" />
            </motion.a> */}
          </div>
        </div>
      )}
    </header>
  );
}
