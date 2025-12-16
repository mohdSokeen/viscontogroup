"use client";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faBriefcase, faUserCheck, faLayerGroup, faCogs, faRocket } from "@fortawesome/free-solid-svg-icons";

export default function Services() {

  return (
    <section id="services" className="scroll-mt-35 px-6 md:px-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-rose-500">Services We Offer</span>
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-4xl mx-auto text-lg mb-4">
          A full spectrum of staffing and workforce solutions tailored for speed,
          scalability, and long-term success.
        </p>


        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[75rem] mx-auto">
          {[
            {
              icon: faUsers, title: "Contract Staffing / Team Augmentation", desc: "Scale instantly with vetted professionals who integrate into your workflow.",
            },
            {
              icon: faBriefcase, title: "Direct Hire & Executive Search", desc: "We find culture-fit leaders and high-impact full-time talent.",
            },
            {
              icon: faUserCheck, title: "Contract-to-Hire", desc: "Evaluate talent performance before committing to a long-term hire.",
            },
            {
              icon: faLayerGroup, title: "Project-Based Delivery", desc: "Full project teams managed and delivered to meet tight deadlines.",
            },
            {
              icon: faCogs, title: "Workforce Strategy Consulting", desc: "Proactive guidance on hiring, retention, compensation, and planning.",
            },
            {
              icon: faRocket, title: "Recruitment Process Outsourcing (RPO)", desc: "We manage your full hiring pipeline — ideal for high-volume recruiting.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
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
              className="p-6 rounded-2xl bg-white/70 dark:bg-black/40 backdrop-blur border group shadow hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-rose-500 text-white shadow-md">
                  <FontAwesomeIcon icon={item.icon} className="text-xl group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
              </div>
              <p className="text-sm opacity-80 mt-2 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Compact Table */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-[75rem] mx-auto mt-14 overflow-hidden rounded-xl border backdrop-blur bg-white/60 dark:bg-black/40 shadow"
      >
        <table className="w-full text-sm">
          <thead className="bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
            <tr>
              <th className="text-left p-4">Service</th>
              <th className="text-left p-4">Description</th>
              <th className="text-left p-4">Ideal For</th>
            </tr>
          </thead>
          <tbody className="text-slate-700 dark:text-slate-300">
            <tr className="border-t border-slate-300/40 dark:border-slate-600/40">
              <td className="p-4">Contract Staffing</td>
              <td className="p-4">Rapid access to qualified professionals for short & long-term needs.</td>
              <td className="p-4">Fast-scaling companies or seasonal demand.</td>
            </tr>
            <tr className="border-t bg-white/40 dark:bg-black/30 border-slate-300/40 dark:border-slate-600/40">
              <td className="p-4">Direct Hire / Permanent Staffing</td>
              <td className="p-4">Full-cycle hiring for specialized or leadership roles.</td>
              <td className="p-4">Organizations needing culture-fit long-term hires.</td>
            </tr>
            <tr className="border-t border-slate-300/40 dark:border-slate-600/40">
              <td className="p-4">Contract-to-Hire</td>
              <td className="p-4">Test talent on the job before hiring full-time.</td>
              <td className="p-4">Teams reducing risk & optimizing cost.</td>
            </tr>
            <tr className="border-t bg-white/40 dark:bg-black/30 border-slate-300/40 dark:border-slate-600/40">
              <td className="p-4">Project Staffing / Managed Teams</td>
              <td className="p-4">Turnkey execution teams delivered on schedule.</td>
              <td className="p-4">Businesses needing hands-on project delivery.</td>
            </tr>
            <tr className="border-t border-slate-300/40 dark:border-slate-600/40">
              <td className="p-4">Workforce Strategy Consulting</td>
              <td className="p-4">Expert guidance for hiring strategy & long-term planning.</td>
              <td className="p-4">Organizations improving retention & workforce structure.</td>
            </tr>
          </tbody>
        </table>
      </motion.div>

      {/* Candidate Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-10 text-center pb-25"
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-rose-500">For Candidates</span>
        </h2>
        {/* <h3 className="text-3xl font-semibold">For Candidates</h3> */}
        <p className="max-w-2xl mx-auto mt-3 text-slate-600 dark:text-slate-300">
          We partner with professionals seeking meaningful career opportunities — not just contracts.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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