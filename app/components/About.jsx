"use client";
import { useEffect, useRef } from "react";
import { motion, animate, useMotionValue } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faClock, faShieldAlt, faHandshake } from "@fortawesome/free-solid-svg-icons";

const logos = [
  { name: "/images/Fortune.png" },
  { name: "/images/AstraZeneca.png" },
  { name: "/images/Marriott.png" },
  { name: "/images/FannieMae.png" },
  { name: "/images/L&T.png" },
  { name: "/images/Berkadia.png" },
  { name: "/images/Reddit.png" },
  { name: "/images/EigenX.png" },
  { name: "/images/KaiserPermanente.png" },
  { name: "/images/Ivanti_Neurons.png" },
  { name: "/images/JMT.png" },
  { name: "/images/NewRez.png" },
  { name: "/images/Penn_Medicine.png" },
  { name: "/images/SG.png" },
  { name: "/images/BWE.png" },
  { name: "/images/IBX.png" },
  { name: "/images/Cigna.png" },
  { name: "/images/BKV.png" },
  { name: "/images/Scrum_Alliance.png" },
  { name: "/images/SMBC.png" },
  { name: "/images/TradeStation.png" },
  { name: "/images/EverBank.png" },
  { name: "/images/MG.png" },
  { name: "/images/NYS_Attorney_General.png" },
  { name: "/images/Tradeweb.png" },
  { name: "/images/Starwood_Capital_Group.png" },
  { name: "/images/Guild_Mortgage.png" },
  { name: "/images/GDIT.png" },
  { name: "/images/Walleye_Capital.png" },
  { name: "/images/Aramark.png" },
  { name: "/images/Corebridge_Financial.png" },
  { name: "/images/Amalgamated_Life.png" },
  { name: "/images/Thermo_Fisher_Scientific.png" },
  { name: "/images/Citi.png" },
  { name: "/images/American_Express.png" },
  { name: "/images/TXO_Partners.png" },
  { name: "/images/Smarsh.png" },
  { name: "/images/SAP.png" },
  { name: "/images/Osaic.png" },
  { name: "/images/PJM.png" },
  { name: "/images/Centene.png" },
  { name: "/images/United_Airlines.png" },
  { name: "/images/Tailored_Brands.png" },
  { name: "/images/NYStateHealth.png" },
  { name: "/images/IDCS.png" },
  { name: "/images/Susquehanna.png" },
  { name: "/images/Syntria.png" },
  { name: "/images/Voloridge_health.png" },
  { name: "/images/Titan_Wealth.png" },
  { name: "/images/EPRI.png" },
  { name: "/images/Convey_Health.png" },
  { name: "/images/Federal_Reserve.png" },
];

const half = Math.ceil(logos.length / 2);
const firstRowLogos = logos.slice(0, half);
const secondRowLogos = logos.slice(half);


export default function About() {
  const x = useMotionValue(0);
  const x2 = useMotionValue(0);
  const animationRef = useRef({
    top: null,
    bottom: null,
  });

  useEffect(() => {
    animationRef.current.top = animate(
      x,
      ["0%", "-50%"],
      {
        duration: 60,
        ease: "linear",
        repeat: Infinity,
      }
    );

    animationRef.current.bottom = animate(
      x2,
      ["-50%", "0%"],
      {
        duration: 60,
        ease: "linear",
        repeat: Infinity,
      }
    );

    return () => {
      animationRef.current.top?.stop();
      animationRef.current.bottom?.stop();
    };
  }, [x, x2]);



  return (
    <section id="about" className="scroll-mt-35 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          About <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-rose-500">Visconto Group Inc.</span>
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
          Visconto Group Inc. is a full-service staffing and workforce solutions company built on one belief — <strong>hiring should empower growth, not slow it down.</strong> We partner with organizations of every size to provide high-quality staffing solutions that align with business outcomes.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid md:grid-cols-2 gap-20 max-w-[70rem] mx-auto mt-16"
      >
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="p-8 rounded-2xl bg-white/70 dark:bg-black/40 backdrop-blur border group shadow hover:shadow-xl transition-shadow"
        // className="p-8 bg-white dark:bg-gray-800 shadow-lg rounded-2xl border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-rose-500">Our Approach</span>
          </h3>
          {/* <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Our Approach</h3> */}
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Our team blends human expertise with data-driven recruiting, helping clients reduce hiring time,
            improve retention, and scale operations efficiently. What sets us apart isn’t just our reach —
            it’s our commitment to fit, attention to detail, and long-term success. <strong>We don’t fill positions. We build partnerships.</strong>
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="p-8 rounded-2xl bg-white/70 dark:bg-black/40 backdrop-blur border group shadow hover:shadow-xl transition-shadow"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-rose-500">Our Values</span>
          </h3>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <FontAwesomeIcon icon={faShieldAlt} className="text-blue-600 mt-1" />
              <span><strong>Integrity First</strong> – Every hire is transparent, honest, and fair.</span>
            </li>
            <li className="flex items-start gap-3">
              <FontAwesomeIcon icon={faUsers} className="text-green-600 mt-1" />
              <span><strong>Client Success</strong> – Your business goals define our priorities.</span>
            </li>
            <li className="flex items-start gap-3">
              <FontAwesomeIcon icon={faHandshake} className="text-purple-600 mt-1" />
              <span><strong>Respect for Talent</strong> – Candidates are people, not profiles.</span>
            </li>
            <li className="flex items-start gap-3">
              <FontAwesomeIcon icon={faClock} className="text-yellow-500 mt-1" />
              <span><strong>Continuous Improvement</strong> – We evolve with markets, skills, and technology.</span>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      {/* TALENT MESSAGE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-12 max-w-4xl mx-auto text-center" id="talent">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-rose-500">A Word About Our Talent</span>
        </h2>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          We invest in candidate relationships — offering guidance, transparent communication, and ongoing support. When candidates feel valued, clients see the results.
        </p>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=hr@omnireachtech.com&su=Recruitment%20Inquiry&body=Hello%20Visconto%20Group%20Team%2C%0D%0A%0D%0AI%20would%20like%20to%20connect%20with%20you%20regarding%20recruitment%20opportunities%20and%20services.%0D%0A%0D%0APlease%20let%20me%20know%20a%20convenient%20time%20to%20discuss.%0D%0A%0D%0AThank%20you%2C%0D%0A%5BYour%20Name%5D"
          target="_blank"
          className="inline-block mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-rose-500 text-white font-semibold shadow-lg hover:opacity-90 transition">
          Talk to a Recruitment Strategist
        </a>
      </motion.div>

      {/* FOOTER CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-12 text-center mb-10"
        id="contact"
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-rose-500">
            Let’s Build Something Great.
          </span>
        </h2>

        <p className="max-w-4xl mx-auto text-slate-600 dark:text-slate-300">
          Whether you need one specialist or a full team, Visconto Group Inc. delivers talent that drives impact.
        </p>
      </motion.div>

      {/* LOGO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mt-4"
      >
        <div
          className="relative w-full overflow-hidden mb-10"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          }}
        >
          <motion.div
            className="flex w-max items-center"
            style={{ x }}
            onMouseEnter={() => animationRef.current.top.pause()}
            onMouseLeave={() => animationRef.current.top.play()}
          >
            {[...firstRowLogos, ...firstRowLogos].map((logo, index) => (
              <div key={index} className="mx-6 md:mx-10 flex-shrink-0">
                <img
                  src={logo.name}
                  alt="client logo"
                  className={`opacity-70 hover:opacity-100 transition 
                  ${logo.name.includes("Marriott")
                  ? "h-16 md:h-20 scale-125 md:scale-150"
                  : logo.name.includes("EigenX")
                  ? "h-16 md:h-20 scale-75 md:scale-80"
                  : logo.name.includes("SG")
                  ? "h-16 md:h-20 scale-75 md:scale-85"
                  : logo.name.includes("Scrum_Alliance")
                  ? "h-16 md:h-20 scale-75 md:scale-80"
                  : logo.name.includes("SMBC")
                  ? "h-16 md:h-20 scale-75 md:scale-80"
                  : logo.name.includes("NYS_Attorney_General")
                  ? "h-16 md:h-20 scale-75 md:scale-80"
                  : logo.name.includes("Amalgamated_Life")
                  ? "h-16 md:h-20 scale-75 md:scale-80"
                  : logo.name.includes("TXO_Partners")
                  ? "h-16 md:h-20 scale-75 md:scale-80"
                  : "h-10 md:h-12"
                    }`}
                />
              </div>
            ))}
          </motion.div>
        </div>
        <div
          className="relative w-full overflow-hidden mb-10"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          }}
        >
          <motion.div
            className="flex w-max items-center"
            style={{ x: x2 }}
            onMouseEnter={() => animationRef.current.bottom.pause()}
            onMouseLeave={() => animationRef.current.bottom.play()}
          >
            {[...secondRowLogos, ...secondRowLogos].map((logo, index) => (
              <div key={index} className="mx-6 md:mx-10 flex-shrink-0">
                <img
                  src={logo.name}
                  alt="client logo"
                  className={`opacity-70 hover:opacity-100 transition 
                    ${logo.name.includes("Syntria")
                    ? "h-16 md:h-20 scale-125 md:scale-80"
                    : logo.name.includes("Thermo_Fisher_Scientific")
                    ? "h-16 md:h-20 scale-75 md:scale-85"
                    : logo.name.includes("NYStateHealth")
                    ? "h-16 md:h-20 scale-75 md:scale-115"
                    : logo.name.includes("Convey_Health")
                    ? "h-16 md:h-20 scale-75 md:scale-90"
                    : logo.name.includes("Susquehanna")
                    ? "h-16 md:h-20 scale-75 md:scale-100"
                    : logo.name.includes("NYS_Attorney_General")
                    ? "h-16 md:h-20 scale-75 md:scale-80"
                    : logo.name.includes("GDIT")
                    ? "h-16 md:h-20 scale-75 md:scale-100"
                    : logo.name.includes("Amalgamated_Life")
                    ? "h-16 md:h-20 scale-75 md:scale-80"
                    : "h-10 md:h-12"
                    }`}
                />
              </div>
            ))}
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
}
