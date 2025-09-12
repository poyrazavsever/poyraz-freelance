"use client";
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const Policies = () => {
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

  const policyCategories = [
    {
      title: "Privacy Policy",
      icon: "hugeicons:square-lock-add-01",
      lastUpdated: "September 2024",
      sections: [
        {
          title: "Information Collection",
          content:
            "I collect only the necessary information required to provide my services effectively. This includes contact details (name, email, phone), project requirements, and communication history. All information is collected with your explicit consent.",
        },
        {
          title: "Data Usage",
          content:
            "Your personal information is used solely for project communication, service delivery, and improving my offerings. I do not sell, rent, or share your personal information with third parties without your explicit consent, except as required by law.",
        },
        {
          title: "Data Security",
          content:
            "I implement industry-standard security measures to protect your personal information. All data is stored securely and access is restricted to authorized personnel only. Regular security audits ensure your information remains protected.",
        },
        {
          title: "Your Rights",
          content:
            "You have the right to access, modify, or delete your personal information at any time. You can also request a copy of all data I have about you. Contact me directly to exercise these rights.",
        },
      ],
    },
    {
      title: "Terms of Service",
      icon: "hugeicons:legal-document-01",
      lastUpdated: "September 2024",
      sections: [
        {
          title: "Service Agreement",
          content:
            "By engaging my services, you agree to these terms and conditions. Services include web development, UI/UX design, and related consulting. All work will be performed professionally and according to industry standards.",
        },
        {
          title: "Payment Terms",
          content:
            "Payment schedules are established per project agreement. Typically, a 50% deposit is required to begin work, with the remainder due upon completion. Late payments may incur additional fees as specified in your project agreement.",
        },
        {
          title: "Intellectual Property",
          content:
            "Upon full payment, you receive ownership of the final deliverables. However, I retain the right to showcase the work in my portfolio. Any third-party tools, templates, or frameworks remain under their respective licenses.",
        },
        {
          title: "Limitation of Liability",
          content:
            "My liability is limited to the total amount paid for services. I am not responsible for indirect, incidental, or consequential damages. All services are provided 'as is' with professional best effort guarantees.",
        },
      ],
    },
    {
      title: "Refund Policy",
      icon: "hugeicons:policy",
      lastUpdated: "September 2024",
      sections: [
        {
          title: "Refund Eligibility",
          content:
            "Refunds are available within the first week of project initiation if no substantial work has begun. After development starts, refunds are prorated based on work completed and documented progress.",
        },
        {
          title: "Refund Process",
          content:
            "Refund requests must be submitted in writing with detailed reasoning. Processing typically takes 5-10 business days after approval. Refunds are issued to the original payment method when possible.",
        },
        {
          title: "Non-refundable Items",
          content:
            "Third-party costs (domains, hosting, premium plugins, stock assets) are non-refundable. Custom development work that has been completed and delivered is also non-refundable.",
        },
        {
          title: "Dispute Resolution",
          content:
            "Any disputes will be addressed through direct communication first. If resolution cannot be reached, disputes may be referred to mediation or arbitration as specified in the service agreement.",
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
              Policies & Legal
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
              These policies outline how I handle your data, deliver services,
              and ensure a transparent, professional relationship. Please review
              these carefully as they govern our working relationship.
            </p>
          </motion.div>

          {/* Policy Categories */}
          <motion.div variants={itemVariants} className="max-w-4xl">
            <div className="border-l-4 border-primary pl-6 py-4">
              <div className="space-y-16">
                {policyCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                        <Icon icon={category.icon} className="text-xl" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                          {category.title}
                        </h3>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">
                          Last updated: {category.lastUpdated}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-8">
                      {category.sections.map((section, sectionIndex) => (
                        <div
                          key={sectionIndex}
                          className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-6 border border-neutral-200 dark:border-neutral-700"
                        >
                          <h4 className="text-lg font-medium text-neutral-900 dark:text-white mb-4">
                            {section.title}
                          </h4>
                          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            {section.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>


          {/* Important Notes */}
          <motion.div variants={itemVariants} className="max-w-2xl my-16">
            <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-6 border border-neutral-200 dark:border-neutral-700">
              <div className="flex items-start gap-4">
                <div>
                  <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                    Important Notice
                  </h4>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    These policies are updated periodically to reflect changes
                    in services, legal requirements, or industry best practices.
                    Significant changes will be communicated to active clients.
                    Continued use of services constitutes acceptance of updated
                    terms.
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

export default Policies;
