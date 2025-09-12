"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

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

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      category: "General",
      questions: [
        {
          question: "What services do you offer?",
          answer:
            "I specialize in web development, UI/UX design, and e-commerce solutions. This includes creating responsive websites, custom web applications, online stores, and comprehensive digital experiences using modern technologies like React, Next.js, and TypeScript.",
        },
        {
          question: "How long does a typical project take?",
          answer:
            "Project timelines vary depending on complexity. A simple website usually takes 1-2 weeks, while complex e-commerce platforms or web applications can take 1-3 months. I provide detailed timelines during the planning phase and keep you updated throughout the process.",
        },
        {
          question: "What is your design process?",
          answer:
            "My process includes: 1) Discovery and requirements gathering, 2) Research and planning, 3) Wireframing and prototyping, 4) Visual design creation, 5) Development and coding, 6) Testing and optimization, 7) Launch and post-launch support. I maintain close communication throughout each phase.",
        },
      ],
    },
    {
      category: "Pricing & Payments",
      questions: [
        {
          question: "How do you price your projects?",
          answer:
            "I offer both fixed-price packages and custom quotes based on project requirements. Pricing depends on complexity, timeline, features needed, and ongoing support requirements. I provide detailed quotes after understanding your specific needs.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "I accept bank transfers, PayPal, and major credit cards. For larger projects, I typically work with a 50% upfront payment and 50% upon completion. For ongoing projects, monthly payment schedules can be arranged.",
        },
        {
          question: "Do you offer refunds?",
          answer:
            "I work closely with clients to ensure satisfaction. If for any reason you're not happy with the initial concepts (within the first week), I offer a full refund. After development begins, refunds are handled on a case-by-case basis, typically prorated for work completed.",
        },
      ],
    },
    {
      category: "Technical",
      questions: [
        {
          question: "What technologies do you use?",
          answer:
            "I primarily work with modern web technologies including React, Next.js, TypeScript, Tailwind CSS, Node.js, and various databases. I also use design tools like Figma for UI/UX design and various deployment platforms for hosting solutions.",
        },
        {
          question: "Do you provide hosting and domain services?",
          answer:
            "While I don't directly provide hosting, I can help you choose the best hosting solution for your needs and assist with setup. I work with popular platforms like Vercel, Netlify, AWS, and traditional hosting providers. I can also help with domain registration guidance.",
        },
        {
          question: "Will my website be mobile-friendly?",
          answer:
            "Absolutely! All websites I create are fully responsive and optimized for mobile devices. I follow mobile-first design principles to ensure your site looks and functions perfectly on smartphones, tablets, and desktops.",
        },
      ],
    },
    {
      category: "Support & Maintenance",
      questions: [
        {
          question: "Do you provide ongoing support?",
          answer:
            "Yes, I offer various support packages including bug fixes, content updates, security monitoring, and feature additions. I provide 30 days of free support after project completion, followed by optional monthly or yearly maintenance packages.",
        },
        {
          question: "How quickly do you respond to support requests?",
          answer:
            "For urgent issues, I respond within 24 hours on business days. For regular support requests, response time is typically within 48 hours. Critical security or downtime issues are prioritized and addressed as quickly as possible.",
        },
        {
          question: "Can you help with SEO and digital marketing?",
          answer:
            "I include basic SEO optimization in all websites (meta tags, structured data, performance optimization). For advanced SEO and digital marketing strategies, I can recommend trusted partners or provide guidance on best practices.",
        },
      ],
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
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
              Find answers to common questions about my services, process, and
              policies. Can't find what you're looking for? Feel free to reach
              out directly.
            </p>
          </motion.div>

          {/* FAQ Categories */}
          <motion.div variants={itemVariants} className="max-w-4xl">
            <div className="border-l-4 border-primary pl-6 py-4">
              <div className="space-y-12">
                {faqData.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
                      {category.category}
                    </h3>

                    <div className="space-y-4">
                      {category.questions.map((faq, questionIndex) => {
                        const itemIndex = categoryIndex * 100 + questionIndex;
                        const isOpen = openItems.includes(itemIndex);

                        return (
                          <motion.div
                            key={questionIndex}
                            className="bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 overflow-hidden"
                            initial={false}
                          >
                            <button
                              onClick={() => toggleItem(itemIndex)}
                              className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors duration-200"
                            >
                              <span className="text-lg font-medium text-neutral-900 dark:text-white pr-4">
                                {faq.question}
                              </span>
                              <motion.div
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                                className="flex-shrink-0"
                              >
                                <Icon
                                  icon="hugeicons:arrow-down-01"
                                  className="text-xl text-neutral-500 dark:text-neutral-400"
                                />
                              </motion.div>
                            </button>

                            <AnimatePresence initial={false}>
                              {isOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{
                                    duration: 0.3,
                                    ease: "easeInOut",
                                  }}
                                >
                                  <div className="px-6 pb-5 border-t border-neutral-200 dark:border-neutral-700">
                                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed pt-4">
                                      {faq.answer}
                                    </p>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div variants={itemVariants} className="max-w-2xl my-16">
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 rounded-lg p-6 border border-primary/20 dark:border-primary/30">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon icon="hugeicons:help-circle" className="text-lg" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                    Still have questions?
                  </h4>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                    I'm here to help! Reach out with any questions about your
                    project, and I'll get back to you with detailed answers.
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    <span>Get in touch</span>
                    <Icon icon="hugeicons:arrow-right-02" className="text-sm" />
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

export default FAQ;
