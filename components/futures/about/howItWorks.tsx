"use client";
import React from "react";
import { motion } from "framer-motion";

const HowItWorks = () => {
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

  const steps = [
    {
      id: 1,
      title: "Get Brief",
      description: "Project requirements and goals are determined.",
    },
    {
      id: 2,
      title: "Create Proposal",
      description: "Detailed proposal, timeline and pricing are presented.",
    },
    {
      id: 3,
      title: "Approval",
      description: "Contract is signed and project is approved.",
    },
    {
      id: 4,
      title: "Development",
      description: "Development starts, regular updates are provided.",
    },
    {
      id: 5,
      title: "Delivery",
      description: "Final delivery and quality control is performed.",
    },
    {
      id: 6,
      title: "Support",
      description: "Ongoing support and maintenance is provided.",
    },
  ];

  return (
    <section className="py-24 sm:py-0 bg-neutral-50 dark:bg-neutral-900/50 min-h-screen flex items-start justify-start">
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
              How It Works
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              A proven process that ensures your project success from initial
              consultation to ongoing support. Clear steps, transparent
              communication, quality results.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={itemVariants}
                className="border-l-4 border-primary pl-6 py-4"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-dark-bg text-sm font-bold">
                      {step.id}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                      Step {step.id}: {step.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {step.description}
                    </p>
                    {index < steps.length - 1 && (
                      <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                        <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400">
                          <span>Next: {steps[index + 1].title}</span>
                          <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
