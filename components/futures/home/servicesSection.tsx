"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Button from "@/components/shared/button";

const ServicesSection = () => {
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
      title: "Web Development",
      icon: "lucide:code",
      description:
        "Modern, fast and responsive websites. Powerful solutions with React, Next.js and TypeScript.",
      features: [
        "React & Next.js",
        "TypeScript",
        "Responsive Design",
        "Performance Optimization",
      ],
      color: "blue",
      ctaText: "Start Project",
      href: "/services/web-development",
    },
    {
      title: "UI/UX Design",
      icon: "lucide:palette",
      description:
        "User-friendly interfaces and impressive experiences. Professional designs with Figma.",
      features: [
        "Figma Design",
        "Prototyping",
        "User Research",
        "Design System",
      ],
      color: "purple",
      ctaText: "Request Design",
      href: "/services/ui-ux-design",
    },
    {
      title: "E-Commerce & SaaS Solutions",
      icon: "lucide:shopping-cart",
      description:
        "Customizable e-commerce platforms and SaaS applications. Scalable solutions.",
      features: [
        "E-Commerce",
        "SaaS Platform",
        "Payment Integration",
        "Admin Panel",
      ],
      color: "green",
      ctaText: "Get Solution",
      href: "/services/ecommerce-saas",
    },
    {
      title: "SEO",
      icon: "lucide:search",
      description:
        "Rank higher in search engines. Technical SEO and content optimization.",
      features: [
        "Technical SEO",
        "Content Strategy",
        "Performance",
        "Analytics",
      ],
      color: "orange",
      ctaText: "SEO Analysis",
      href: "/services/seo",
    },
  ];

  const getServiceColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800",
      purple:
        "from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800",
      green:
        "from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800",
      orange:
        "from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-800",
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
    };
    return (
      colorMap[color as keyof typeof colorMap] ||
      "text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800"
    );
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
              My Services
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Everything you need to succeed in the digital world. I bring your
              projects to life with modern technologies and proven methods.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="border-l-4 border-primary pl-6 py-4"
              >
                {/* Service Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Service Features */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-sm bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div>
                  <Button
                    href={service.href}
                    variant="outline"
                    size="sm"
                    className="text-sm"
                  >
                    {service.ctaText}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
