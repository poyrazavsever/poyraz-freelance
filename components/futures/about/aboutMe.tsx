"use client";
import React from "react";
import { Icon } from "@iconify/react";

const skills = [
  { icon: "lucide:code", label: "Web Development" },
  { icon: "lucide:palette", label: "UI/UX Design" },
  { icon: "lucide:rocket", label: "SEO & Growth" },
  { icon: "lucide:lightbulb", label: "Consulting" },
];

const AboutMe = () => {
  return (
    <section className="py-16 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-dark-bg dark:text-white mb-8 text-center">
          Hakkımda
        </h2>
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 rounded-xl border border-primary/20 dark:border-primary/10 p-8 text-center">
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
            Merhaba! Ben Poyraz Avsever. 3+ yıldır freelance olarak web
            projeleri geliştiriyorum. Tasarım, yazılım ve dijital büyüme
            konularında uzmanım. Müşteri memnuniyetini ve kaliteli teslimatı ön
            planda tutarım.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {skills.map((skill) => (
              <div
                key={skill.label}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20">
                  <Icon icon={skill.icon} className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm text-dark-bg dark:text-white font-semibold">
                  {skill.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
