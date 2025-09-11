"use client";
import React from "react";
import { motion } from "framer-motion";

const HowIWork = () => {
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

  const workflowSteps = [
    {
      id: 1,
      title: "Get Brief",
      description: "Project requirements and goals discussion",
    },
    {
      id: 2,
      title: "Create Proposal",
      description: "Detailed proposal with timeline and pricing",
    },
    {
      id: 3,
      title: "Approval",
      description: "Contract signing and project approval",
    },
    {
      id: 4,
      title: "Development",
      description: "Development with regular updates",
    },
    {
      id: 5,
      title: "Delivery",
      description: "Final delivery and quality assurance",
    },
    {
      id: 6,
      title: "Support",
      description: "Ongoing support and maintenance",
    },
  ];

  return (
    <section className="sm:py-0 bg-neutral-50 dark:bg-neutral-900/50 min-h-screen flex items-start justify-start">
      <div className="container mx-auto px-4 py-24">
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
              How I Work
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              A proven process that ensures your project success from initial
              consultation to ongoing support. Clear steps, transparent
              communication, quality results.
            </p>
          </motion.div>

          {/* Workflow Steps */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={itemVariants}
                className="border-l-4 border-primary pl-6 py-4"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-dark-bg text-sm font-bold">
                      {step.id}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {step.description}
                    </p>
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

export default HowIWork;
