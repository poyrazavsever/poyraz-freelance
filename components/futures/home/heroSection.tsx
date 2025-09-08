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

      <div className="container mx-auto px-4 py-20 sm:py-0 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]"
        >
          {/* Left Content */}
          <div className="space-y-8">
            {/* Availability Status */}
            <motion.div variants={fadeInUp} className="flex items-center gap-3">
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
            <motion.div variants={fadeInUp} className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-dark-bg dark:text-white leading-tight">
                Let's Build
                <span className="block text-primary">Something Amazing</span>
                Together
              </h1>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-lg">
                I'm a passionate developer who turns your ideas into powerful
                digital experiences. Ready to bring your vision to life.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-6">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  Years Experience
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  Projects Completed
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  Client Satisfaction
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                variant="primary"
                size="lg"
                icon="lucide:message-circle"
                iconPosition="left"
                href="/contact"
                className="text-base font-semibold"
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                icon="lucide:eye"
                iconPosition="left"
                href="/portfolio"
                className="text-base font-semibold"
              >
                View My Work
              </Button>
            </motion.div>

            {/* Quick Info */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-6 pt-4"
            >
              <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                <Icon icon="lucide:clock" className="w-5 h-5 text-primary" />
                <span className="text-sm">Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                <Icon
                  icon="lucide:shield-check"
                  className="w-5 h-5 text-primary"
                />
                <span className="text-sm">Quality Guaranteed</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                <Icon
                  icon="lucide:headphones"
                  className="w-5 h-5 text-primary"
                />
                <span className="text-sm">24/7 Support</span>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Profile/Image */}
          <motion.div
            variants={fadeInUp}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Profile Image Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-2xl opacity-20"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full border border-primary/20 flex items-center justify-center">
                  {/* Placeholder for profile image */}
                  <div className="w-full h-full bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 rounded-full flex items-center justify-center">
                    <Icon
                      icon="lucide:user"
                      className="w-32 h-32 text-neutral-400 dark:text-neutral-600"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 bg-white dark:bg-dark-bg rounded-lg p-3 shadow-lg border border-neutral-200 dark:border-neutral-700"
              >
                <Icon icon="lucide:code" className="w-8 h-8 text-primary" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -left-4 bg-white dark:bg-dark-bg rounded-lg p-3 shadow-lg border border-neutral-200 dark:border-neutral-700"
              >
                <Icon
                  icon="lucide:palette"
                  className="w-8 h-8 text-secondary"
                />
              </motion.div>

              <motion.div
                animate={{ y: [-5, 15, -5] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="absolute top-1/2 -left-8 bg-white dark:bg-dark-bg rounded-lg p-3 shadow-lg border border-neutral-200 dark:border-neutral-700"
              >
                <Icon icon="lucide:rocket" className="w-8 h-8 text-primary" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-neutral-400 dark:text-neutral-600"
          >
            <span className="text-sm">Scroll Down</span>
            <Icon icon="lucide:chevron-down" className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
