"use client";
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const OfferRequestPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section className="py-24 sm:py-0 bg-white dark:bg-dark-bg min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl mx-auto text-center"
        >
          {/* Construction Icon */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon icon="hugeicons:construction" className="text-4xl" />
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white mb-6">
              Under Construction
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
              We're working hard to bring you an amazing offer request system.
              In the meantime, please feel free to contact me directly to
              discuss your project needs and get a personalized quote.
            </p>
          </motion.div>

          {/* Progress Indicator */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="bg-neutral-100 dark:bg-neutral-800 rounded-full h-2 mb-4">
              <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full w-3/4 animate-pulse"></div>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              75% Complete - Coming Soon!
            </p>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="space-y-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Icon icon="hugeicons:mail-01" className="text-xl" />
              Contact Me Instead
            </a>

            <div className="flex items-center justify-center gap-6 text-sm text-neutral-500 dark:text-neutral-400">
              <div className="flex items-center gap-2">
                <Icon icon="hugeicons:time-04" className="text-lg" />
                Quick Response
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="hugeicons:certificate-01" className="text-lg" />
                Professional Service
              </div>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div variants={itemVariants} className="mt-12">
            <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-6 border border-neutral-200 dark:border-neutral-700">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon icon="hugeicons:info-circle" className="text-lg" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                    What to Expect
                  </h4>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    When you contact me, I'll provide a detailed consultation to
                    understand your project requirements, timeline, and budget.
                    You'll receive a comprehensive proposal within 24-48 hours.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferRequestPage;
