"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const webDevProjects = [
  {
    title: "Next.js E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=400&fit=crop&crop=center",
    tags: ["Next.js", "TypeScript", "Stripe"],
    date: "2025-08-10",
    github: "https://github.com/poyrazavsever",
  },
  {
    title: "Real-time Chat Application",
    description:
      "WebSocket-powered chat application with file sharing, emoji reactions, and user presence indicators.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=400&fit=crop&crop=center",
    tags: ["Node.js", "Socket.io", "React"],
    date: "2025-07-25",
    github: "https://github.com/poyrazavsever",
  },
  {
    title: "Project Management Dashboard",
    description:
      "Comprehensive project management tool with team collaboration, task tracking, and progress analytics.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=400&fit=crop&crop=center",
    tags: ["React", "Node.js", "MongoDB"],
    date: "2025-06-15",
    github: "https://github.com/poyrazavsever",
  },
  {
    title: "API Gateway & Microservices",
    description:
      "Scalable microservices architecture with API gateway, service discovery, and containerized deployment.",
    image:
      "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=500&h=400&fit=crop&crop=center",
    tags: ["Docker", "Kubernetes", "GraphQL"],
    date: "2025-05-30",
    github: "https://github.com/poyrazavsever",
  },
];

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
    transition: { duration: 0.6 },
  },
};

const WebDevelopmentPage = () => {
  return (
    <div className="py-24 sm:py-32 bg-white dark:bg-dark-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mx-auto max-w-2xl"
        >
          <motion.div
            variants={itemVariants}
            className="border-l-4 border-primary pl-6 mb-12"
          >
            <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
              Web Development Projects
            </h1>
            <p className="mt-4 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
              Building scalable and performant web applications with modern
              technologies and best practices.
            </p>
          </motion.div>

          {/* GitHub Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800/50 dark:to-neutral-900/50 rounded-2xl p-8 backdrop-blur-sm border border-neutral-200 dark:border-neutral-700">
              <div className="flex items-center gap-3 mb-6">
                <Icon
                  icon="hugeicons:github"
                  className="w-8 h-8 text-neutral-900 dark:text-white"
                />
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                    Open Source Contributions
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Explore my code repositories and technical documentation
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-neutral-600 dark:text-neutral-400">
                  All project source codes, technical blogs, and development
                  resources are available on my GitHub profile.
                </p>
                <a
                  href="https://github.com/poyrazavsever"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-xl font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all duration-300"
                >
                  <Icon icon="hugeicons:github" className="w-5 h-5" />
                  @poyrazavsever
                  <Icon
                    icon="hugeicons:arrow-up-right-01"
                    className="w-4 h-4"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mx-auto max-w-4xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webDevProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="group relative bg-white dark:bg-neutral-800/50 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-700 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-2 bg-white/90 backdrop-blur-sm rounded-lg text-sm font-medium text-neutral-900 hover:bg-white transition-all duration-200"
                    >
                      <Icon icon="hugeicons:github" className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                      {project.title}
                    </h3>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-700 px-3 py-1 rounded-full">
                      {project.date}
                    </span>
                  </div>

                  <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary dark:bg-primary/20 rounded-full text-sm font-medium border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WebDevelopmentPage;
