"use client";
import React from "react";
import { Icon } from "@iconify/react";

const steps = [
  {
    icon: "lucide:clipboard-list",
    title: "Brief Al",
    description: "Proje gereksinimleri ve hedefler belirlenir."
  },
  {
    icon: "lucide:file-text",
    title: "Teklif Hazırla",
    description: "Detaylı teklif, zaman çizelgesi ve fiyatlandırma sunulur."
  },
  {
    icon: "lucide:check-circle",
    title: "Onay",
    description: "Sözleşme imzalanır ve proje onaylanır."
  },
  {
    icon: "lucide:code",
    title: "Çalışma",
    description: "Geliştirme başlar, düzenli güncellemeler sağlanır."
  },
  {
    icon: "lucide:package",
    title: "Teslim",
    description: "Son teslimat ve kalite kontrol yapılır."
  },
  {
    icon: "lucide:headphones",
    title: "Destek",
    description: "Sürekli destek ve bakım sağlanır."
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-dark-bg dark:text-white mb-10 text-center">Nasıl Çalışırım?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={step.title} className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 rounded-xl border border-primary/20 dark:border-primary/10 p-6 text-center flex flex-col items-center">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20 mb-4">
                <Icon icon={step.icon} className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-dark-bg dark:text-white mb-2">{step.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
