"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Button from "../../shared/button";

const HeroSection = () => {
  // Availability status - you can manage this from admin panel or API
  const [isAvailable, setIsAvailable] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="min-h-screen bg-white dark:bg-dark-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-24 sm:py-0 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="flex items-start justify-start min-h-[80vh] pt-24"
        >
          {/* Left Aligned Content */}
          <div className="space-y-8 text-left max-w-2xl">
            {/* Availability Status */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-start gap-3"
            >
              <div
                className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
                  isAvailable
                    ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-700 dark:text-green-400"
                    : "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-700 dark:text-red-400"
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    isAvailable ? "bg-green-500" : "bg-red-500"
                  } animate-pulse`}
                ></div>
                <span className="text-sm font-medium">
                  {isAvailable
                    ? "Available for new projects"
                    : "Currently unavailable"}
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={fadeInUp} className="space-y-3">
              <h1 className="text-4xl lg:text-5xl font-bold text-dark-bg dark:text-white leading-tight">
                Let's Build
                <span className="block text-primary">Something Amazing</span>
                Together
              </h1>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                I'm a passionate developer who turns your ideas into powerful
                digital experiences. Ready to bring your vision to life.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-3 gap-6 max-w-md"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  Projects Completed
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  Client Satisfaction
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex gap-4 justify-start"
            >
              <Button
                variant="primary"
                size="md"
                icon="lucide:message-circle"
                iconPosition="left"
                href="/contact"
                className="text-base font-semibold"
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="md"
                icon="lucide:eye"
                iconPosition="left"
                href="/portfolio"
                className="text-base font-semibold"
              >
                View My Work
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
