"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* MASK – hides content above header */}
      <div className="fixed top-0 left-0 w-full h-[calc(2rem)] bg-white z-40 pointer-events-none" />

      {/* HEADER */}
      {/* OLD header   <header className="fixed left-1/2 -translate-x-1/2 top-6 z-50 px-4 py-3 rounded-2xl w-[94%] max-w-[85rem] backdrop-blur-lg bg-white/30 border border-white/10 shadow-md"> */}
      <header className=" fixed left-1/2 -translate-x-1/2 top-6 z-50  px-4 py-0.5 lg:px-6 lg:py-1  xl:px-8 xl:py-1.5  rounded-xl  w-[94%] max-w-6xl xl:max-w-7xl 2xl:max-w-[90rem] backdrop-blur-lg bg-white/30   border border-white/10 shadow-sm  scale-100 lg:scale-[1.05] xl:scale-[1.1] 2xl:scale-[1.15] origin-top">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 sm:gap-3">
            <div className="h-12 sm:h-8 md:h-10 flex items-center overflow-visible">
              <img
                src="/images/VG.png"
                alt="Workforce Partners"
                className="h-full w-auto object-contain scale-125 md:scale-200"
              />
            </div>

            <div className="sm:block"> {/* hidden */}
              <div className="text-sm sm:text-lg font-semibold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-rose-500">
                  Visconto Group Inc.
                </span>
              </div>
              <div className="text-[10px] sm:text-xs ml-7 sm:ml-7 opacity-70 italic tracking-wide">
                Vision • Values • Versatility
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-m font-bold">
            <a href="#home" className="relative group opacity-70 font-bold">
              Home
              <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-indigo-500 to-rose-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>

            <a href="#services" className="relative group opacity-70 font-bold">
              Services
              <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-indigo-500 to-rose-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>

            <a href="#testimonial" className="relative group opacity-70 font-bold">
              Testimonial
              <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-indigo-500 to-rose-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>

            <a href="#about" className="relative group opacity-70 font-bold">
              About
              <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-indigo-500 to-rose-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>

            <motion.a
              whileHover={{ scale: 1.15 }}
              href="https://www.linkedin.com/company/omrtech/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" className="text-blue-600" />
            </motion.a>
          </nav>

          {/* Mobile */}
          <button onClick={() => setOpen(s => !s)} className="md:hidden p-2">
            <FontAwesomeIcon icon={open ? faTimes : faBars} />
          </button>
        </div>

        {open && (
          <div className="mt-3 md:hidden bg-white/60 p-4 rounded-xl backdrop-blur-md border border-white/10">
            <a className="block py-2 font-bold" href="#home">Home</a>
            <a className="block py-2 font-bold" href="#services">Services</a>
            <a className="block py-2 font-bold" href="#testimonial">Testimonial</a>
            <a className="block py-2 font-bold" href="#about">About</a>
          </div>
        )}
      </header>
    </>
  );
}
