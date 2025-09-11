"use client";
import React from "react";
import { Icon } from "@iconify/react";

const uiDesignProjects = [
  {
    title: "E-Ticaret Sitesi Tasarımı",
    description: "Modern ve kullanıcı dostu e-ticaret arayüzü tasarımı.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    tags: ["UI/UX", "E-Commerce", "Mobile"],
    date: "2025-08-15",
  },
  {
    title: "Mobil Uygulama Arayüzü",
    description: "iOS ve Android için modern mobil uygulama tasarımı.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
    tags: ["Mobile", "UI/UX", "App"],
    date: "2025-07-20",
  },
];

const UIDesignPage = () => {
  return (
    <section className="py-16 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-dark-bg dark:text-white mb-8 text-center">
          UI Design Projects
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 text-center mb-12">
          Kullanıcı deneyimini ön planda tutan yaratıcı tasarım çözümleri.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {uiDesignProjects.map((project) => (
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

export default UIDesignPage;
