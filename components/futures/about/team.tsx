"use client";
import React from "react";
import { Icon } from "@iconify/react";

const teamMembers = [
  {
    name: "Poyraz Avsever",
    role: "Full Stack Developer",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    skills: ["React", "Next.js", "TailwindCSS", "Node.js"],
  },
  {
    name: "Zeynep Aksoy",
    role: "UI/UX Designer",
    avatar: "https://randomuser.me/api/portraits/women/21.jpg",
    skills: ["Figma", "Adobe XD", "Illustrator"],
  },
];

const Team = () => {
  return (
    <section className="py-16 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-dark-bg dark:text-white mb-10 text-center">Ekibimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 rounded-xl border border-primary/20 dark:border-primary/10 p-6 flex flex-col items-center text-center">
              <img src={member.avatar} alt={member.name} className="w-20 h-20 rounded-full mb-4 object-cover" />
              <h3 className="text-lg font-bold text-dark-bg dark:text-white mb-1">{member.name}</h3>
              <span className="text-sm text-primary font-semibold mb-2">{member.role}</span>
              <div className="flex flex-wrap gap-2 justify-center mt-2">
                {member.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary/10 dark:bg-primary/20 rounded-full text-sm text-dark-bg dark:text-white border border-primary/20 dark:border-primary/10">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
