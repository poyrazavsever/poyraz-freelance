"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Button from "@/components/shared/button";

const ServicesSection = () => {
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
    <section className="py-20 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
              My Services
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              Everything you need to succeed in the digital world under one
              roof. I bring your projects to life with modern technologies and
              proven methods.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`bg-gradient-to-br ${getServiceColorClasses(
                  service.color
                )} p-8 rounded-2xl border`}
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div
                      className={`w-16 h-16 ${getIconColorClasses(
                        service.color
                      )} rounded-xl flex items-center justify-center mr-4`}
                    >
                      <Icon icon={service.icon} className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Service Description */}
                <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Service Features */}
                <div className="mb-8">
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center text-sm text-neutral-600 dark:text-neutral-400"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex justify-center">
                  <Button
                    href={service.href}
                    variant="primary"
                    size="md"
                    icon="lucide:arrow-right"
                    iconPosition="right"
                    className="w-full justify-center"
                  >
                    {service.ctaText}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 rounded-2xl p-8 border border-primary/20 dark:border-primary/10">
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
              Which Service Do You Need?
            </h3>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6 max-w-2xl mx-auto">
              Let's discuss your project details and find the best solution for
              you. Contact me for free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                icon="lucide:message-circle"
                iconPosition="left"
                href="/contact"
              >
                Free Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                icon="lucide:calendar"
                iconPosition="left"
                href="/packages"
              >
                Package Prices
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
