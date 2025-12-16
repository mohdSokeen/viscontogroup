"use client";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUsers, faDollarSign, faShieldAlt, faHandshake, faCircleCheck, faUserTie, faLayerGroup, faPeopleGroup, faMicrochip, faBriefcaseMedical, faCogs, faIndustry, faStore, faSatelliteDish, faLandmark, faRocket, faBuilding, faClipboardCheck } from "@fortawesome/free-solid-svg-icons";

export default function Home() {

  return (
    <section id="home" className="relative overflow-hidden pt-[125px] pb-20">
      {/* Background Blobs */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -left-32 -top-32 w-[70vw] h-[70vw] rounded-full filter blur-3xl opacity-70 animate-blob bg-gradient-to-tr from-indigo-600 via-purple-500 to-rose-500" />
        <div className="absolute -right-32 -bottom-32 w-[55vw] h-[55vw] rounded-full filter blur-3xl opacity-60 animate-blob animation-delay-2000 bg-gradient-to-br from-emerald-300 via-teal-400 to-cyan-500" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* HERO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight">
              Build Stronger Teams. <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-rose-500">Faster Smarter</span>
            </h1>

            <p className="text-lg text-slate-700 dark:text-slate-300 max-w-xl pb-5 text-justify" >
              Visconto Group Inc. helps companies of all sizes hire exceptional talent across technology, healthcare, finance, engineering, and more — without delays, risk, or overhead.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=hr@omnireachtech.com&su=Recruitment%20Inquiry&body=Hello%20Omnireach%20Team%2C%0D%0A%0D%0AI%20would%20like%20to%20connect%20with%20you%20regarding%20recruitment%20opportunities%20and%20services.%0D%0A%0D%0APlease%20let%20me%20know%20a%20convenient%20time%20to%20discuss.%0D%0A%0D%0AThank%20you%2C%0D%0A%5BYour%20Name%5D"
                target="_blank"
                className="px-20 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-rose-500 text-white font-semibold shadow-lg hover:opacity-90 transition">
                Talk to a Recruitment Strategist
              </a>
            </div>
          </motion.div>

          {/* IMAGE CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative flex items-center justify-center pb-5"
          >
            <div className="w-full max-w-md lg:max-w-lg">
              <div className="rounded-3xl p-1 bg-white/30 dark:bg-black/30 backdrop-blur-xl border border-white/10 shadow-2xl">
                <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-white/40 to-white/10 dark:from-[#071018] dark:to-[#09131d]">
                  <div className="p-2 sm:p-2">
                    <div className="relative h-64 sm:h-85 rounded-xl overflow-hidden">

                      {/* Image Tag */}
                      <img
                        src="/images/home.png"
                        alt="Workforce Partners"
                        className="w-full h-full object-cover"
                      />

                      {/* Overlay Text + Gradient */}
                      <div className="absolute bottom-0 left-0 w-full p-6 flex items-end text-white">
                        <div className="bg-gradient-to-t from-black/60 to-transparent p-4 rounded-md">
                          <div className="font-semibold text-lg">Trusted Workforce Partners</div>
                          <div className="text-xs opacity-80">
                            Hire across Tech, Engineering, Healthcare, Finance & more
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* WHY CHOOSE VISCONTO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10" id="why">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Why Clients Choose <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-rose-500">Visconto Group Inc.</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: faClock, title: "Speed to Hire", desc: "Qualified professionals delivered in days — not months." },
              { icon: faUsers, title: "Quality Over Quantity", desc: "Every candidate is pre-screened and skills verified." },
              { icon: faHandshake, title: "Flexible Engagement Models", desc: "Contract, contract-to-hire, or direct hire." },
              { icon: faDollarSign, title: "Cost Efficiency", desc: "Reduce hiring delays and turnover risk." },
              { icon: faShieldAlt, title: "Compliance & Reliability", desc: "We handle payroll, onboarding & labor regulations." },
              { icon: faCircleCheck, title: "People Who Stay", desc: "Happier hires who perform better and stay longer." },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover="hover"
                initial="rest"
                variants={{
                  rest: {
                    y: 0,
                    scale: 1,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                  },
                  hover: {
                    y: -14,
                    scale: 1.04,
                    boxShadow: "0 30px 70px rgba(0,0,0,0.25)",
                  },
                }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative p-7 rounded-2xl bg-white/70 dark:bg-black/40 backdrop-blur border group overflow-hidden"
              // className="p-6 rounded-2xl bg-white/70 dark:bg-black/40 backdrop-blur border group shadow hover:shadow-xl transition-shadow"
              >

                <div className="w-12 h-12 flex mb-2 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-rose-500 text-white shadow-md">
                  <FontAwesomeIcon icon={item.icon} className="text-xl" />
                </div>

                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm opacity-80">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* WHAT WE OFFER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-rose-500">What We Offer</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: faUsers, title: "Contract Staffing", desc: "Scale your workforce instantly with experienced professionals." },
              { icon: faUserTie, title: "Direct Hire & Executive Search", desc: "From senior developers to leaders who fit your culture." },
              { icon: faLayerGroup, title: "Project-Based Delivery", desc: "We assemble and manage teams for key initiatives." },
              { icon: faHandshake, title: "Workforce Consulting", desc: "Hiring strategy, compensation, planning, and retention." },
              { icon: faPeopleGroup, title: "Talent Pool Access", desc: "Priority access to 300,000+ vetted professionals." },
              { icon: faClipboardCheck, title: "Managed Services / RPO", desc: "End-to-end recruitment management with defined SLAs and cost efficiency." },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover="hover"
                initial="rest"
                variants={{
                  rest: {
                    y: 0,
                    scale: 1,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                  },
                  hover: {
                    y: -14,
                    scale: 1.04,
                    boxShadow: "0 30px 70px rgba(0,0,0,0.25)",
                  },
                }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative p-7 rounded-2xl bg-white/70 dark:bg-black/40 backdrop-blur border group overflow-hidden"
              >

                <div className="w-12 h-12 flex mb-2 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-rose-500 text-white shadow-md">
                  <FontAwesomeIcon icon={item.icon} className="text-xl group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-semibold text-xl">{item.title}</h3>
                <p className="text-sm opacity-80">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* INDUSTRIES  WE SERVE*/}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16" id="industries"
        >
          <div className="text-center mb-5">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-rose-500">Industries We Serve</span>
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              We help organizations hire top-tier professionals across multiple high‑growth sectors.
            </p>
          </div>

          {/* INDUSTRY GRID WITH ICONS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto perspective-[1800px">
            {[
              { name: "Technology", icon: faMicrochip },
              { name: "Healthcare", icon: faBriefcaseMedical },
              { name: "Finance", icon: faDollarSign },
              { name: "Engineering", icon: faCogs },
              { name: "Manufacturing", icon: faIndustry },
              { name: "Retail", icon: faStore },
              { name: "Telecom", icon: faSatelliteDish },
              { name: "Public Sector", icon: faLandmark },
              { name: "Startups", icon: faRocket },
              { name: "Enterprise", icon: faBuilding },
            ].map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, rotateY: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{
                  rotateY: -22,
                  scale: 1.03,
                }}
                transition={{
                  type: "spring",
                  stiffness: 700,
                  damping: 20,
                  mass: 0.35,
                }}
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "left center",
                  willChange: "transform",
                }}
                className="relative p-6 rounded-2xl bg-white/70 dark:bg-black/40 backdrop-blur border"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 text-center sm:text-left">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-rose-500 text-white shadow-md flex-shrink-0">
                    <FontAwesomeIcon icon={industry.icon} className="text-xl group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex-1 text-sm font-semibold text-slate-700 dark:text-slate-200 break-words mt-3">
                    {industry.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* HOW WE WORK */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10" id="process">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-rose-500">How We Work</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Understand Your Business", desc: "We begin with your challenges — not a resume dump." },
              { step: "2", title: "Curate the Right Fit", desc: "Technical specialists pre-screen candidates for skill + team fit." },
              { step: "3", title: "Deliver & Support", desc: "Ongoing onboarding, performance follow-up, and retention support." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 text-center rounded-2xl bg-white/70 dark:bg-black/40 backdrop-blur border"
              // className="p-8 text-center rounded-2xl bg-white dark:bg-[#0c1622] border border-slate-200 dark:border-slate-700"
              >
                {/* <div className="text-4xl font-bold text-indigo-500 mb-3">{item.step}</div> */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.2,
                  }}
                  className="text-4xl font-bold text-indigo-500 mb-3"
                >
                  {item.step}
                </motion.div>
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-sm opacity-80">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}