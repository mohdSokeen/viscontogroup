"use client";
import { motion } from "framer-motion";

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function PrivacyPolicy() {
  return (
    <section id="privacy-policy" className="scroll-mt-30 px-6 md:px-20">
      
      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
        transition={{ duration: 0.6 }}
        className="text-center mt-[50px]"
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-10">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-rose-500">
            Privacy Policy
          </span>
        </h2>
      </motion.div>

      {/* Card */}
      <div className="max-w-[80rem] mx-auto">
        <div className="rounded-2xl bg-white/70 dark:bg-black/40 backdrop-blur border shadow-lg p-6 md:p-10 space-y-5 text-left">

          {/* Intro */}
          <motion.div variants={sectionVariant} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              At <span className="font-semibold">Visconto Group Inc.</span>, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, share, and safeguard your data.
            </p>
          </motion.div>

          {/* About */}
          <motion.div variants={sectionVariant} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              About Visconto Group Inc.
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Founded in 2002, Visconto Group Inc. provides global IT and healthcare staffing services with a focus on diversity and inclusion.
            </p>
          </motion.div>

          {/* Scope */}
          <motion.div variants={sectionVariant} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              When This Policy Applies
            </h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
              <li>Website and applications</li>
              <li>Recruitment and consulting services</li>
              <li>Client and vendor interactions</li>
            </ul>
          </motion.div>

          {/* Collection */}
          <motion.div variants={sectionVariant} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Information We Collect
            </h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
              <li>Personal details (name, contact info)</li>
              <li>Professional data (resume, skills, experience)</li>
              <li>Technical data (IP, browser, device)</li>
              <li>Business data (clients/vendors)</li>
            </ul>
          </motion.div>

          {/* Usage */}
          <motion.div variants={sectionVariant} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              How We Use Your Information
            </h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
              <li>Provide services</li>
              <li>Match candidates with jobs</li>
              <li>Communicate updates</li>
              <li>Legal compliance</li>
            </ul>
          </motion.div>

          {/* Cookies */}
          <motion.div variants={sectionVariant} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Cookies
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              We use cookies to improve user experience and analyze traffic. You can disable them anytime.
            </p>
          </motion.div>

          {/* Sharing */}
          <motion.div  variants={sectionVariant} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Sharing Information
            </h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
              <li>Employers and clients</li>
              <li>Service providers</li>
              <li>Legal authorities</li>
              <li><strong>No SMS data sharing for marketing</strong></li>
            </ul>
          </motion.div>

          {/* Security */}
          <motion.div variants={sectionVariant} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Data Security
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              We use encryption, secure systems, and audits to protect your data.
            </p>
          </motion.div>

          {/* Rights */}
          <motion.div variants={sectionVariant} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Your Rights
            </h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
              <li>Access data</li>
              <li>Delete or correct</li>
              <li>Withdraw consent</li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={sectionVariant} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Contact Us
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Visconto Group Inc.<br />
              hr@viscontogroup.com<br />
              267-753-8488<br />
              308 Flint Rd, Langhorne, PA 19047, US
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}