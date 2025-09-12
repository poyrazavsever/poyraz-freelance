"use client";
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const HelpCenter = () => {
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

  const helpCategories = [
    {
      title: "Getting Started",
      icon: "hugeicons:rocket-01",
      articles: [
        {
          title: "How to request a quote",
          description: "Step-by-step guide to getting a custom project quote",
          link: "/offer-request",
        },
        {
          title: "Understanding our packages",
          description:
            "Compare different service packages and find what fits your needs",
          link: "/packages",
        },
        {
          title: "Project timeline expectations",
          description: "What to expect during your project development process",
          link: "#timeline",
        },
      ],
    },
    {
      title: "Design & Development",
      icon: "hugeicons:paint-brush-02",
      articles: [
        {
          title: "Design process overview",
          description:
            "Understanding the design workflow from concept to completion",
          link: "#design-process",
        },
        {
          title: "Revision and feedback process",
          description:
            "How to provide feedback and request changes effectively",
          link: "#revisions",
        },
        {
          title: "Technology stack explanation",
          description:
            "Learn about the modern technologies used in your project",
          link: "https://poyrazavsever.com/stack",
        },
      ],
    },
    {
      title: "Project Management",
      icon: "hugeicons:workflow-circle-01",
      articles: [
        {
          title: "Communication guidelines",
          description:
            "Best practices for staying in touch during your project",
          link: "#communication",
        },
        {
          title: "Project delivery process",
          description: "What happens when your project is completed",
          link: "#delivery",
        },
        {
          title: "Testing and quality assurance",
          description: "How we ensure your project meets quality standards",
          link: "#testing",
        },
      ],
    },
    {
      title: "Support & Maintenance",
      icon: "hugeicons:customer-support",
      articles: [
        {
          title: "Post-launch support",
          description: "Understanding included support and maintenance options",
          link: "#support",
        },
        {
          title: "Hosting and domain guidance",
          description: "Help with choosing and setting up hosting solutions",
          link: "#hosting",
        },
        {
          title: "SEO and performance optimization",
          description: "Optimizing your website for search engines and speed",
          link: "#seo",
        },
      ],
    },
  ];

  const quickLinks = [
    {
      title: "Contact Support",
      description: "Get direct help with your questions",
      link: "/contact",
    },
    {
      title: "View FAQ",
      description: "Find answers to common questions",
      link: "/faq",
    },
    {
      title: "Request Quote",
      description: "Start your project with a custom quote",
      link: "/offer-request",
    },
    {
      title: "View Packages",
      description: "Explore our service packages",
      link: "/packages",
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
              Help Center
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
              Welcome to the help center! Here you'll find comprehensive guides,
              documentation, and resources to help you navigate the project
              process and get the most out of our collaboration.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="max-w-4xl mb-16">
            <div className="border-l-4 border-primary pl-6 py-4 mb-8">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
                Quick Actions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.link}
                    target={link.link.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      link.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group p-6 rounded-xl bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 transition-all duration-200"
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                      {link.title}
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {link.description}
                    </p>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Help Categories */}
          <motion.div variants={itemVariants} className="max-w-4xl">
            <div className="border-l-4 border-primary pl-6 py-4">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-8">
                Browse Help Topics
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {helpCategories.map((category, categoryIndex) => (
                  <motion.div
                    key={categoryIndex}
                    className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700"
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                        <Icon icon={category.icon} className="text-xl" />
                      </div>
                      <h4 className="text-xl font-semibold text-neutral-900 dark:text-white">
                        {category.title}
                      </h4>
                    </div>

                    <div className="space-y-4">
                      {category.articles.map((article, articleIndex) => (
                        <a
                          key={articleIndex}
                          href={article.link}
                          target={
                            article.link.startsWith("http") ? "_blank" : "_self"
                          }
                          rel={
                            article.link.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="block p-4 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors duration-200 group"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                              <h5 className="font-medium text-neutral-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                                {article.title}
                              </h5>
                              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                {article.description}
                              </p>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Additional Resources */}
          <motion.div variants={itemVariants} className="max-w-2xl my-16">
            <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-6 border border-neutral-200 dark:border-neutral-700">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon icon="hugeicons:book-02" className="text-lg" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                    Additional Resources
                  </h4>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                    Visit my main website for detailed information about
                    technologies, portfolio examples, and industry insights.
                  </p>
                  <a
                    href="https://poyrazavsever.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    <span>Visit Main Website</span>
                    <Icon icon="hugeicons:external-link" className="text-sm" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HelpCenter;
