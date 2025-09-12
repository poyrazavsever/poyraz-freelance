"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Button from "@/components/shared/button";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // Form submission logic here
  };

  const contactMethods = [
    {
      icon: "hugeicons:mail-01",
      title: "Email",
      description: "Send me an email anytime",
      contact: "hello@poyrazavsever.com",
      action: "mailto:hello@poyrazavsever.com",
    },
    {
      icon: "hugeicons:whatsapp",
      title: "WhatsApp",
      description: "Quick chat via WhatsApp",
      contact: "+90 555 123 45 67",
      action: "https://wa.me/905551234567",
    },
    {
      icon: "hugeicons:linkedin-01",
      title: "LinkedIn",
      description: "Connect on LinkedIn",
      contact: "@poyrazavsever",
      action: "https://www.linkedin.com/in/poyrazavsever/",
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
              Contact
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
              Ready to start your project? I'm here to help bring your ideas to
              life. Get in touch and let's discuss how we can work together to
              create something amazing.
            </p>
          </motion.div>

          {/* Contact Methods */}
          <motion.div variants={itemVariants} className="max-w-4xl mb-16">
            <div className="border-l-4 border-primary pl-6 py-4 mb-8">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
                Get in Touch
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.action}
                    target={
                      method.action.startsWith("http") ? "_blank" : "_self"
                    }
                    rel={
                      method.action.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group p-6 rounded-xl bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 transition-all duration-200"
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon icon={method.icon} className="text-xl" />
                    </div>
                    <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                      {method.title}
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                      {method.description}
                    </p>
                    <p className="text-sm font-medium text-primary">
                      {method.contact}
                    </p>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="max-w-2xl">
            <div className="border-l-4 border-primary pl-6 py-4 mb-8">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                Send a Message
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Prefer to send a detailed message? Fill out the form below and
                I'll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 resize-none"
                  placeholder="Tell me about your project, ideas, or any questions you have..."
                />
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  icon="hugeicons:mail-send-01"
                  iconPosition="right"
                  className="px-8"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>

          {/* Additional Info */}
          <motion.div variants={itemVariants} className="max-w-2xl my-16">
            <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-6 border border-neutral-200 dark:border-neutral-700">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon icon="hugeicons:clock-03" className="text-lg" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                    Response Time
                  </h4>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    I typically respond to all inquiries within 24 hours during
                    business days. For urgent projects, feel free to reach out
                    via WhatsApp for faster communication.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;
