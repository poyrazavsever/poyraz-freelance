"use client";
import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/shared/button";

const OfferRequestPage = () => {
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
              Request an Offer
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
              I'm currently working on an improved offer request system to
              better serve your project needs. In the meantime, please contact
              me directly to discuss your project requirements and get a
              personalized quote. I'll respond within 24 hours with detailed
              information about timeline, budget, and approach for your project.
            </p>
          </motion.div>

          {/* Contact Button */}
          <motion.div variants={itemVariants} className="max-w-2xl">
            <div className="border-l-4 border-primary pl-6 py-4">
              <Button
                href="/contact"
                variant="primary"
                size="md"
                icon="hugeicons:mail-01"
                iconPosition="left"
              >
                Contact Me for Custom Quote
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferRequestPage;
