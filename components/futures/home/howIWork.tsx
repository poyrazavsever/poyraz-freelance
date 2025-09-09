"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const HowIWork = () => {
  const workflowSteps = [
    {
      id: 1,
      title: "Brief Al",
      description: "Project requirements and goals discussion",
      icon: "lucide:clipboard-list",
      color: "blue",
    },
    {
      id: 2,
      title: "Teklif Hazırla",
      description: "Detailed proposal with timeline and pricing",
      icon: "lucide:file-text",
      color: "purple",
    },
    {
      id: 3,
      title: "Onay",
      description: "Contract signing and project approval",
      icon: "lucide:check-circle",
      color: "green",
    },
    {
      id: 4,
      title: "Çalışma",
      description: "Development with regular updates",
      icon: "lucide:code",
      color: "orange",
    },
    {
      id: 5,
      title: "Teslim",
      description: "Final delivery and quality assurance",
      icon: "lucide:package",
      color: "red",
    },
    {
      id: 6,
      title: "Destek",
      description: "Ongoing support and maintenance",
      icon: "lucide:headphones",
      color: "teal",
    },
  ];

  const getStepColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800",
      purple:
        "from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800",
      green:
        "from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800",
      orange:
        "from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-800",
      red: "from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border-red-200 dark:border-red-800",
      teal: "from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 border-teal-200 dark:border-teal-800",
    };
    return (
      colorMap[color as keyof typeof colorMap] ||
      "from-neutral-50 to-neutral-100 dark:from-neutral-800/20 dark:to-neutral-700/20 border-neutral-200 dark:border-neutral-700"
    );
  };

  const getIconColorClasses = (color: string) => {
    const colorMap = {
      blue: "text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30",
      purple:
        "text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30",
      green:
        "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30",
      orange:
        "text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30",
      red: "text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30",
      teal: "text-teal-600 dark:text-teal-400 bg-teal-100 dark:bg-teal-900/30",
    };
    return (
      colorMap[color as keyof typeof colorMap] ||
      "text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800"
    );
  };

  return (
    <section className="py-20 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
              How I Work
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              A proven process that ensures your project success from initial
              consultation to ongoing support. Clear steps, transparent
              communication, quality results.
            </p>
          </motion.div>

          {/* Workflow Steps */}
          <div className="relative">
            {/* Desktop Layout */}
            <div className="hidden lg:block">
              {/* Top Row */}
              <div className="flex items-center justify-between mb-12">
                {workflowSteps.slice(0, 3).map((step, index) => (
                  <React.Fragment key={step.id}>
                    <motion.div
                      initial={{ opacity: 0, y: 50, scale: 0.8 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className={`bg-gradient-to-br ${getStepColorClasses(
                        step.color
                      )} p-6 rounded-xl border text-center w-64`}
                    >
                      <div
                        className={`w-16 h-16 ${getIconColorClasses(
                          step.color
                        )} rounded-xl flex items-center justify-center mx-auto mb-4`}
                      >
                        <Icon icon={step.icon} className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {step.description}
                      </p>
                    </motion.div>

                    {index < 2 && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: (index + 1) * 0.2 }}
                        className="flex items-center"
                      >
                        <Icon
                          icon="lucide:arrow-right"
                          className="w-8 h-8 text-primary"
                        />
                      </motion.div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Connecting Arrow Down */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex justify-end mb-12"
              >
                <Icon
                  icon="lucide:arrow-down"
                  className="w-8 h-8 text-primary mr-32"
                />
              </motion.div>

              {/* Bottom Row (Reversed) */}
              <div className="flex items-center justify-between flex-row-reverse">
                {workflowSteps.slice(3, 6).map((step, index) => (
                  <React.Fragment key={step.id}>
                    <motion.div
                      initial={{ opacity: 0, y: 50, scale: 0.8 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: (index + 1) * 0.2 }}
                      className={`bg-gradient-to-br ${getStepColorClasses(
                        step.color
                      )} p-6 rounded-xl border text-center w-64`}
                    >
                      <div
                        className={`w-16 h-16 ${getIconColorClasses(
                          step.color
                        )} rounded-xl flex items-center justify-center mx-auto mb-4`}
                      >
                        <Icon icon={step.icon} className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {step.description}
                      </p>
                    </motion.div>

                    {index < 2 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: (index + 2) * 0.2 }}
                        className="flex items-center"
                      >
                        <Icon
                          icon="lucide:arrow-left"
                          className="w-8 h-8 text-primary"
                        />
                      </motion.div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden space-y-6">
              {workflowSteps.map((step, index) => (
                <React.Fragment key={step.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`bg-gradient-to-br ${getStepColorClasses(
                      step.color
                    )} p-6 rounded-xl border text-center`}
                  >
                    <div
                      className={`w-16 h-16 ${getIconColorClasses(
                        step.color
                      )} rounded-xl flex items-center justify-center mx-auto mb-4`}
                    >
                      <Icon icon={step.icon} className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {step.description}
                    </p>
                  </motion.div>

                  {index < workflowSteps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                      className="flex justify-center"
                    >
                      <Icon
                        icon="lucide:arrow-down"
                        className="w-6 h-6 text-primary"
                      />
                    </motion.div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 rounded-2xl p-8 border border-primary/20 dark:border-primary/10">
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
                Let's discuss your requirements and get started with the first
                step!
              </p>
              <button className="bg-primary hover:bg-primary/90 text-neutral-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Get Your Free Consultation
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowIWork;
