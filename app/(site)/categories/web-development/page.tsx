"use client";
import React from "react";
import { Icon } from "@iconify/react";

const webDevProjects = [
  {
    title: "React.js E-Ticaret Platformu",
    description:
      "Next.js ve TailwindCSS ile geliştirilmiş modern e-ticaret sitesi.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    tags: ["React", "Next.js", "TailwindCSS"],
    date: "2025-08-10",
  },
  {
    title: "Node.js API Geliştirme",
    description:
      "Express.js ve MongoDB ile RESTful API tasarımı ve geliştirme.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
    tags: ["Node.js", "Express", "MongoDB"],
    date: "2025-07-25",
  },
];

const WebDevelopmentPage = () => {
  return (
    <section className="py-16 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-dark-bg dark:text-white mb-8 text-center">
          Web Development Projects
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 text-center mb-12">
          Modern teknolojilerle güçlü ve ölçeklenebilir web uygulamaları.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {webDevProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 rounded-xl border border-primary/20 dark:border-primary/10 overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-bg dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 dark:bg-primary/20 rounded-full text-xs text-dark-bg dark:text-white border border-primary/20 dark:border-primary/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs text-neutral-400 dark:text-neutral-500">
                  {project.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDevelopmentPage;
