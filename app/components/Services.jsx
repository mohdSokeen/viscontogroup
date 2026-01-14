"use client";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faHandshake, faUserTie, faLayerGroup, faPeopleGroup, faClipboardCheck, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Services() {

  return (
    <section id="services" className="scroll-mt-35 px-6 md:px-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-[-30px]">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-rose-500">Services We Offer</span>
        </h2>

        <div className="max-w-[85rem] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[{ icon: faUsers, title: "Contract Staffing", desc: "Scale your workforce instantly with experienced professionals." },
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
                rest: { y: 0, scale: 1, boxShadow: "0 10px 25px rgba(0,0,0,0.08)" },
                hover: { y: -14, scale: 1.04, boxShadow: "0 30px 70px rgba(0,0,0,0.25)" },
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
              {/* For Hover Effect */}
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Compact Table */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-[85rem] mx-auto mt-12 space-y-3"
      >
        {[
          {
            title: "When Speed Matters",
            desc: "Pre-vetted professionals available within days to support urgent delivery, backfills, or sudden scale-ups without compromising quality.",
            ideal: "Companies facing tight deadlines or unexpected workload spikes",
          },
          {
            title: "Building Long-Term Teams",
            desc: "We help you hire people who align with your culture, leadership style, and long-term vision — not just skill checklists.",
            ideal: "Organizations investing in sustainable growth",
          },
          {
            title: "Reducing Hiring Risk",
            desc: "Our engagement models allow you to evaluate performance, collaboration, and fit before making permanent hiring decisions.",
            ideal: "Teams optimizing cost and minimizing hiring mistakes",
          },
          {
            title: "End-to-End Project Execution",
            desc: "From planning to delivery, we provide managed teams that take ownership of outcomes, timelines, and accountability.",
            ideal: "Businesses lacking internal execution bandwidth",
          },
          {
            title: "Strategic Workforce Planning",
            desc: "Data-driven advisory on workforce design, role prioritization, compensation benchmarks, and retention planning.",
            ideal: "Leadership teams preparing for scale or transformation",
          },
        ]
          .map((item, i) => (
            <motion.details
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-xl border bg-white/60 dark:bg-black/40 backdrop-blur px-6 py-4"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="text-sm text-slate-500 transition-transform duration-300 group-open:rotate-180"
                />
              </summary>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="mt-4 grid md:grid-cols-3 gap-6 text-sm text-slate-700 dark:text-slate-300"
              >
                <div className="md:col-span-2">
                  {item.desc}
                </div>
                <div className="font-medium text-slate-900 dark:text-slate-200">
                  {item.ideal}
                </div>
              </motion.div>
            </motion.details>
          ))}
      </motion.div>

      {/* Candidate Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-8 text-center pb-15"
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-rose-500">For Candidates</span>
        </h2>
        <p className="mt-3 max-w-3xl mx-auto text-left sm:text-center text-slate-600 dark:text-slate-300 leading-relaxed">
          We partner with professionals seeking meaningful career opportunities — not just contracts.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[80rem] mx-auto">
          {[
            "Exclusive access to top roles before they go public",
            "Clear communication & feedback at every stage",
            "Fair pay, benefits & ongoing support",
          ].map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-5 rounded-xl bg-white/60 dark:bg-black/40 border shadow"
            >
              <p className="text-sm opacity-90">{text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      {/* </div> */}
    </section>
  );
}