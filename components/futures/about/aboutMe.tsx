"use client";
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const AboutMe = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const skills = [
    "React & Next.js",
    "TypeScript",
    "UI/UX Design",
    "SEO Optimization",
  ];

  return (
    <section className="py-24 sm:py-0 bg-white dark:bg-dark-bg min-h-screen flex items-start justify-start">
      <div className="container mx-auto px-4 pt-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl"
        >
          {/* Main Content - Left Aligned */}
          <motion.div variants={itemVariants} className="max-w-2xl mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
              About Me
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
              Hello! I'm Poyraz Avsever. I've been developing web projects as a
              freelancer for over 3 years. I specialize in design, software
              development, and digital growth. I prioritize customer
              satisfaction and quality delivery.
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div variants={itemVariants} className="max-w-2xl">
            <div className="border-l-4 border-primary pl-6 py-4">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                Core Skills
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700">
                <a
                  href="https://www.poyrazavsever.com/stack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors duration-200"
                >
                  <span>View all technologies I use in detail</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
