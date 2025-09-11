"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Button from "@/components/shared/button";

const AboutSection = () => {
  const achievements = [
    {
      number: "50+",
      label: "Projects Completed",
      icon: "lucide:briefcase",
    },
    {
      number: "3+",
      label: "Years Experience",
      icon: "lucide:calendar",
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      icon: "lucide:star",
    },
    {
      number: "24/7",
      label: "Support Available",
      icon: "lucide:headphones",
    },
  ];

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

  const getSkillColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800",
      purple:
        "from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800",
      green:
        "from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800",
    };
    return (
      colorMap[color as keyof typeof colorMap] ||
      "from-neutral-50 to-neutral-100 dark:from-neutral-800/20 dark:to-neutral-700/20 border-neutral-200 dark:border-neutral-700"
    );
  };

  const getIconColorClasses = (color: string) => {
    const colorMap = {
      blue: "text-blue-600 dark:text-blue-400",
      purple: "text-purple-600 dark:text-purple-400",
      green: "text-green-600 dark:text-green-400",
    };
    return (
      colorMap[color as keyof typeof colorMap] ||
      "text-neutral-600 dark:text-neutral-400"
    );
  };

  return (
    <section className="py-24 bg-neutral-50 dark:bg-neutral-900/50 flex items-start justify-start">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl"
        >
          {/* Main Content - Left Aligned */}
          <motion.div variants={itemVariants} className="max-w-2xl">
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                Why Choose Me?
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon icon="lucide:check" className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-white text-base">
                      Full-Stack Expertise
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      From frontend to backend, I deliver complete solutions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon icon="lucide:check" className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-white text-base">
                      Modern Technologies
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Always using the latest tools and best practices.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon icon="lucide:check" className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-white text-base">
                      Client-Focused Approach
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Your success is my priority. Clear communication always.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                icon="lucide:user"
                iconPosition="left"
              >
                View Portfolio
              </Button>
              <Button
                variant="outline"
                size="lg"
                icon="lucide:download"
                iconPosition="left"
              >
                Download CV
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
