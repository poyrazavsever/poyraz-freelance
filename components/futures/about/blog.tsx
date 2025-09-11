"use client";
import React from "react";
import { Icon } from "@iconify/react";

const posts = [
  {
    title: "Freelance Web Geliştiriciliği Rehberi",
    description: "Başarılı bir freelance web geliştirici olmanın ipuçları ve deneyimlerim.",
    date: "2025-08-01",
    icon: "lucide:book-open",
    href: "https://poyrazavsever.com/blog/freelance-web-gelistiriciligi-rehberi",
    external: true,
  },
  {
    title: "Tasarımda Trendler 2025",
    description: "UI/UX tasarımında öne çıkan yeni trendler ve uygulama örnekleri.",
    date: "2025-07-15",
    icon: "lucide:palette",
    href: "https://poyrazavsever.com/blog/tasarimda-trendler-2025",
    external: true,
  },
];

const Blog = () => {
  return (
    <section className="py-16 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-dark-bg dark:text-white mb-8 text-center">Blog</h2>
        <div className="space-y-6">
          {posts.map((post) => (
            <a
              key={post.title}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 rounded-xl border border-primary/20 dark:border-primary/10 p-6 hover:bg-primary/20 transition-colors duration-200"
            >
              <div className="flex items-center gap-4 mb-2">
                <Icon icon={post.icon} className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-bold text-dark-bg dark:text-white">{post.title}</h3>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">{post.description}</p>
              <span className="text-xs text-neutral-400 dark:text-neutral-500">{post.date}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
