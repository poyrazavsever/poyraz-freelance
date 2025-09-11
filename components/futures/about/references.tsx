"use client";
import React from "react";
import { Icon } from "@iconify/react";

const testimonials = [
  {
    name: "Ayşe Yılmaz",
    text: "Poyraz ile çalışmak harikaydı. Hızlı teslimat ve kaliteli iş!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    name: "Mehmet Demir",
    text: "Tasarım ve yazılım konusunda çok yetenekli. Kesinlikle tavsiye ederim.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    name: "Elif Kaya",
    text: "İletişimi çok iyi, her aşamada bilgilendirdi.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4,
  },
];

const References = () => {
  return (
    <section className="py-16 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-dark-bg dark:text-white mb-10 text-center">Referanslar</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((ref) => (
            <div key={ref.name} className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 rounded-xl border border-primary/20 dark:border-primary/10 p-6 flex flex-col items-center text-center">
              <img src={ref.avatar} alt={ref.name} className="w-16 h-16 rounded-full mb-4 object-cover" />
              <h3 className="text-lg font-bold text-dark-bg dark:text-white mb-2">{ref.name}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">{ref.text}</p>
              <div className="flex gap-1">
                {[...Array(ref.rating)].map((_, i) => (
                  <Icon key={i} icon="lucide:star" className="w-5 h-5 text-primary" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;
