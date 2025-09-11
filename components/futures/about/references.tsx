"use client";
import React from "react";
import { motion } from "framer-motion";

const References = () => {
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

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Working with Poyraz was amazing. Fast delivery and high quality work!",
      company: "TechStart Inc.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Michael Chen",
      text: "Very talented in design and development. I definitely recommend him.",
      company: "InnovateCorp",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Emily Davis",
      text: "Excellent communication, kept me informed at every stage.",
      company: "GrowthLab",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "David Rodriguez",
      text: "Professional approach and attention to detail. Great results!",
      company: "StartupX",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
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
              Client References
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              What my clients say about working with me. Real feedback from real
              projects.
            </p>
          </motion.div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={itemVariants}
                className="border-l-4 border-primary pl-6 py-4"
              >
                <div className="flex items-start space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0 border-2 border-primary/20"
                  />
                  <div>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        {testimonial.company}
                      </p>
                      <div className="flex items-center mt-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-primary text-lg">
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default References;
