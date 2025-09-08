import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function ConstructionPage() {
  const socialLinks = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/poyrazavsever/",
      icon: "hugeicons:linkedin-01",
    },
    {
      label: "GitHub",
      href: "https://www.github.com/poyrazavsever",
      icon: "hugeicons:github",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/poyraz_avsever/",
      icon: "hugeicons:instagram",
    },
    {
      label: "YouTube",
      href: "http://youtube.com/@poyrazavsever",
      icon: "hugeicons:youtube",
    },
    {
      label: "Medium",
      href: "https://medium.com/@poyrazavsever",
      icon: "hugeicons:medium-square",
    },
    {
      label: "Behance",
      href: "https://www.behance.net/poyrazavsever",
      icon: "hugeicons:behance-02",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/logos/logo250.png"
            alt="Logo"
            width={120}
            height={120}
            className="mx-auto h-24 w-auto"
          />
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">
            Under Construction
          </h1>

          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-lg mx-auto leading-relaxed">
            We are developing a new platform to strengthen the relationships
            between freelancers and their clients.
          </p>

          <div className="pt-4">
            <div className="inline-flex items-center px-4 py-2 bg-neutral-100 dark:bg-neutral-800 rounded-full">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse mr-3"></div>
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Active Development Process
              </span>
            </div>
          </div>
        </div>

        {/* Project Links */}
        <div className="mt-12 space-y-4">
          <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-4">
            About Project
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/poyrazavsever/poyraz-freelance"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors duration-200"
            >
              <Icon icon="hugeicons:github" className="w-5 h-5 mr-2" />
              GitHub Repository
            </a>

            <a
              href="https://poyrazavsever.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 rounded-lg font-medium hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-colors duration-200"
            >
              <Icon icon="lucide:external-link" className="w-5 h-5 mr-2" />
              Main Website
            </a>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-16 space-y-6">
          <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
            Follow Me
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-primary hover:bg-primary/10 dark:hover:bg-primary/10 transition-all duration-200"
                title={social.label}
              >
                <Icon icon={social.icon} className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-700">
          <p className="text-sm text-neutral-500 dark:text-neutral-500">
            © 2025 Poyraz Avsever. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
