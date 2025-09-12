"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Button from "@/components/shared/button";

const ECommerce = () => {
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

  const services = [
    {
      icon: "hugeicons:shopping-cart-01",
      title: "E-commerce Development",
      description:
        "Building complete online stores with shopping cart, payment processing, and order management.",
    },
    {
      icon: "hugeicons:mobile-programming-02",
      title: "Mobile Commerce",
      description:
        "Developing mobile-first e-commerce solutions that work seamlessly across all devices.",
    },
    {
      icon: "hugeicons:payment-02",
      title: "Payment Integration",
      description:
        "Secure payment gateway integration with popular providers like Stripe, PayPal, and more.",
    },
    {
      icon: "hugeicons:analytics-up",
      title: "Sales Analytics",
      description:
        "Advanced analytics and reporting tools to track sales performance and customer behavior.",
    },
  ];

  const projects = [
    {
      id: 1,
      name: "Urun Uncu - E-commerce Store",
      href: "https://urununcu.com",
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
              E-Commerce Solutions
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
              Crafting powerful e-commerce experiences that drive sales and grow
              your business. From custom online stores to marketplace platforms,
              I build solutions that convert visitors into loyal customers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="md"
                icon="hugeicons:shopping-bag-01"
                iconPosition="left"
                href="/contact"
              >
                Start Your Store
              </Button>
              <Button
                variant="outline"
                size="md"
                icon="hugeicons:eye"
                iconPosition="left"
                href="https://www.poyrazavsever.com/projects"
              >
                View Stores
              </Button>
            </div>
          </motion.div>

          {/* Active E-commerce Projects */}
          <motion.div variants={itemVariants} className="max-w-4xl mb-16">
            <div className="border-l-4 border-primary pl-6 py-4 mb-8">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                Active E-Commerce Projects
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Ongoing e-commerce projects
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects?.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center bg-neutral-10 dark:bg-neutral-800/10 rounded-lg border border-neutral-400 dark:border-neutral-800 hover:border-primary/30 dark:hover:border-primary/30 transition-colors"
                >
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-900 w-full p-4 dark:text-white hover:text-primary transition-colors flex items-center justify-between gap-2"
                  >
                    {project.name}
                    <span>
                      <Icon
                        icon="hugeicons:link-02"
                        className="text-sm opacity-60"
                      />
                    </span>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services Section */}
          <motion.div variants={itemVariants} className="max-w-4xl">
            <div className="border-l-4 border-primary pl-6 py-4 mb-8">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                E-Commerce Services
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Comprehensive e-commerce development solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-neutral-10 dark:bg-neutral-800/10 rounded-xl p-6 border border-neutral-400 dark:border-neutral-800"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 dark:bg-primary/5 rounded-lg">
                      <Icon
                        icon={service.icon}
                        className="text-2xl text-primary"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                        {service.title}
                      </h4>
                      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Work With Me Section */}
          <motion.div variants={itemVariants} className="max-w-4xl my-16">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 rounded-2xl p-8 border border-primary/20 dark:border-primary/10">
              <div className="max-w-2xl">
                <h4 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                  Ready to Launch Your E-Commerce Store?
                </h4>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  Whether you're starting your first online store or scaling an
                  existing business, I'm here to help you build an e-commerce
                  platform that drives results. Let's discuss your vision and
                  create something amazing together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="primary"
                    size="md"
                    icon="hugeicons:mail-01"
                    iconPosition="left"
                    href="/contact"
                  >
                    Start Your Project
                  </Button>
                  <Button
                    variant="outline"
                    size="md"
                    icon="hugeicons:calendar-03"
                    iconPosition="left"
                    href="/contact"
                  >
                    Schedule Consultation
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

export default ECommerce;
