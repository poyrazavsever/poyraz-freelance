"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Button from "@/components/shared/button";

const WebDevelopment = () => {
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

  const features = [
    {
      icon: "hugeicons:code",
      title: "Full-Stack Development",
      description:
        "Building scalable web applications with modern technologies like React, Next.js, and Node.js.",
    },
    {
      icon: "hugeicons:speed-train-01",
      title: "Performance Optimization",
      description:
        "Ensuring fast loading times and smooth user experiences through advanced optimization techniques.",
    },
    {
      icon: "hugeicons:mobile-programming-02",
      title: "Responsive Design",
      description:
        "Creating websites that work perfectly across all devices and screen sizes.",
    },
    {
      icon: "hugeicons:database-01",
      title: "Backend Architecture",
      description:
        "Designing robust backend systems with secure APIs and efficient database management.",
    },
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
              Web Development Services
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
              Building powerful, scalable web applications with modern
              technologies. I specialize in creating digital solutions that
              drive business growth and deliver exceptional user experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="md"
                icon="hugeicons:message-circle"
                iconPosition="left"
                href="/contact"
              >
                Start a Project
              </Button>
              <Button
                variant="outline"
                size="md"
                icon="hugeicons:github"
                iconPosition="left"
                href="https://github.com/poyrazavsever"
                target="_blank"
              >
                View GitHub
              </Button>
            </div>
          </motion.div>

          {/* Features Section */}
          <motion.div variants={itemVariants} className="max-w-4xl mb-16">
            <div className="border-l-4 border-primary pl-6 py-4 mb-8">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                What I Offer
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Comprehensive web development solutions for your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-neutral-10 dark:bg-neutral-800/10 rounded-xl p-6 border border-neutral-400 dark:border-neutral-800"
                >
                  <div className="flex items-start gap-4">
                    <div>
                      <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Active Projects Section */}
          <motion.div variants={itemVariants} className="max-w-4xl mb-16">

            <div className="bg-neutral-10 dark:bg-neutral-800/10 rounded-2xl p-8 border border-neutral-400 dark:border-neutral-800">
              <div className="flex items-start gap-6">
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
                    Real-time Project Status
                  </h4>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                    Track my current development projects, see commit activity,
                    and get insights into my development workflow. This
                    transparent approach helps you understand my working style
                    and project management.
                  </p>
                  <Button
                    variant="primary"
                    size="md"
                    icon="hugeicons:external-link"
                    iconPosition="right"
                    href="https://status.poyrazavsever.com"
                    target="_blank"
                  >
                    View Active Projects
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Case Studies Section */}
          <motion.div variants={itemVariants} className="max-w-4xl">

            <div className="bg-neutral-10 dark:bg-neutral-800/10 rounded-2xl p-8 border border-neutral-400 dark:border-neutral-800">
              <div className="flex items-start gap-6">
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
                    Detailed Project Analysis
                  </h4>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                    Dive deep into my project case studies featuring technical
                    challenges, solutions implemented, performance metrics, and
                    lessons learned. Each case study provides comprehensive
                    insights into my development approach and problem-solving
                    methodology.
                  </p>
                  <Button
                    variant="primary"
                    size="md"
                    icon="hugeicons:external-link"
                    iconPosition="right"
                    href="https://poyrazavsever.com/projects"
                    target="_blank"
                  >
                    Explore Case Studies
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Work With Me Section */}
          <motion.div variants={itemVariants} className="max-w-4xl my-16">

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 rounded-2xl p-8 border border-primary/20 dark:border-primary/10">
              <div className="max-w-2xl">
                <h4 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                  Ready to Start Your Project?
                </h4>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  I'm currently available for new projects and collaborations.
                  Whether you need a complete web application, API development,
                  or technical consultation, I'm here to help transform your
                  vision into reality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="primary"
                    size="md"
                    icon="hugeicons:mail-01"
                    iconPosition="left"
                    href="/contact"
                  >
                    Get in Touch
                  </Button>
                  <Button
                    variant="outline"
                    size="md"
                    icon="hugeicons:calendar-03"
                    iconPosition="left"
                    href="/contact"
                  >
                    Schedule a Call
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WebDevelopment;
