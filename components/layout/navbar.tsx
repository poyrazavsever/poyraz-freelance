"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import toast from "react-hot-toast";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [theme, setTheme] = useState<string>("light");

  // Theme yönetimi
  useEffect(() => {
    // Sayfa yüklendiğinde localStorage'dan theme'i al
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      // Eğer kayıtlı theme yoksa sistem tercihini kontrol et
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const defaultTheme = systemPrefersDark ? "dark" : "light";
      setTheme(defaultTheme);
      applyTheme(defaultTheme);
      localStorage.setItem("theme", defaultTheme);
    }
  }, []);

  const applyTheme = (selectedTheme: string) => {
    const root = document.documentElement;
    if (selectedTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  };

  const handleThemeChange = (selectedTheme: string) => {
    if (selectedTheme === "system") {
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const systemTheme = systemPrefersDark ? "dark" : "light";
      setTheme(systemTheme);
      applyTheme(systemTheme);
      localStorage.setItem("theme", systemTheme);
      toast.success(`Theme changed to System (${systemTheme})`);
    } else {
      setTheme(selectedTheme);
      applyTheme(selectedTheme);
      localStorage.setItem("theme", selectedTheme);
      toast.success(`Theme changed to ${selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)}`);
    }
    closeDropdown();
  };

  const handleDropdownClick = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleLoginClick = () => {
    toast.error("Not active yet");
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const menuItems = [
    {
      label: "Home",
      href: "/",
      hasDropdown: false,
    },
    {
      label: "About",
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { label: "How it Works", href: "/how-it-works" },
        {
          label: "Blog",
          href: "https://poyrazavsever.com/blog",
          external: true,
        },
        { label: "About Me", href: "/about-me" },
        { label: "References", href: "/references" },
      ],
    },
    {
      label: "Categories",
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { label: "UI Design", href: "/categories/ui-design" },
        { label: "Web Development", href: "/categories/web-development" },
      ],
    },
    {
      label: "Packages",
      href: "/packages",
      hasDropdown: false,
    },
    {
      label: "Offer Request",
      href: "/offer-request",
      hasDropdown: false,
    },
    {
      label: "Support",
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { label: "Contact", href: "/contact" },
        { label: "FAQ", href: "/faq" },
        { label: "Help Center", href: "/help-center" },
        { label: "Policies", href: "/policies" },
      ],
    },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com/poyrazavsever",
      icon: "lucide:instagram",
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@poyrazavsever",
      icon: "lucide:youtube",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/poyrazavsever",
      icon: "lucide:linkedin",
    },
    {
      name: "GitHub",
      href: "https://github.com/poyrazavsever",
      icon: "lucide:github",
    },
  ];

  const themeOptions = [
    { label: "Light", value: "light", icon: "lucide:sun" },
    { label: "Dark", value: "dark", icon: "lucide:moon" },
    { label: "System", value: "system", icon: "lucide:monitor" },
  ];

  // Different cards for each dropdown
  const dropdownCards = {
    About: [
      {
        title: "+ 3 Years of Experience",
        description: "A Young Person Exploring Technology",
        icon: "lucide:star",
        color: "purple",
      },
      {
        title: "Large Skill Set",
        description: "Technical abilities",
        icon: "lucide:code",
        color: "blue",
      },
      {
        title: "Visionary",
        description: "Future goals",
        icon: "lucide:eye",
        color: "green",
      },
    ],
    Categories: [
      {
        title: "I Love Design",
        description: "Creative solutions and Aesthetics",
        icon: "lucide:palette",
        color: "pink",
      },
      {
        title: "Smart Development",
        description: "Efficient and Scalable",
        icon: "lucide:code-2",
        color: "indigo",
      },
      {
        title: "Consulting Services",
        description: "Strategic Advice",
        icon: "lucide:lightbulb",
        color: "yellow",
      },
    ],
    Support: [
      {
        title: "I'm Here to Help",
        description: "Get assistance",
        icon: "lucide:help-circle",
        color: "blue",
      },
      {
        title: "Many FAQs",
        description: "Learn more",
        icon: "lucide:book",
        color: "green",
      },
      {
        title: "Community",
        description: "Join Discussions",
        icon: "lucide:users",
        color: "purple",
      },
    ],
  };

  const getCardColorClasses = (color: string) => {
    const colorMap = {
      purple: "from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 text-purple-600 dark:text-purple-400",
      blue: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 text-blue-600 dark:text-blue-400",
      green: "from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 text-green-600 dark:text-green-400",
      pink: "from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 text-pink-600 dark:text-pink-400",
      indigo: "from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 text-indigo-600 dark:text-indigo-400",
      yellow: "from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 text-yellow-600 dark:text-yellow-400",
    };
    return (
      colorMap[color as keyof typeof colorMap] ||
      "from-neutral-50 to-neutral-100 dark:from-neutral-800/20 dark:to-neutral-700/20 text-neutral-600 dark:text-neutral-400"
    );
  };

  return (
    <nav className="bg-white dark:bg-dark-bg relative z-50 py-4 transition-colors duration-200">
      {/* Top Bar */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Search Box */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 transition-colors duration-200"
              />
              <Icon
                icon="lucide:search"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-4 h-4"
              />
            </div>
          </div>

          {/* Logo */}
          <div className="flex-1 flex justify-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logos/logo250.png"
                alt="Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Login Button */}
          <div className="flex-1 flex justify-end">
            <button
              onClick={handleLoginClick}
              disabled
              className="px-6 py-2 bg-neutral-300 text-neutral-500 rounded-lg cursor-not-allowed flex items-center gap-2"
            >
              <Icon icon="lucide:user" className="w-4 h-4" />
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="py-4 border-y border-neutral-200 dark:border-neutral-700 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Left Side - Navigation Links */}
            <div className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <div key={item.label} className="relative">
                  {item.hasDropdown ? (
                    <button
                      onClick={() => handleDropdownClick(item.label)}
                      className="flex items-center gap-1 text-neutral-700 dark:text-neutral-300 hover:text-primary dark:hover:text-primary font-medium transition-colors duration-200 cursor-pointer"
                    >
                      {item.label}
                      <Icon
                        icon="lucide:chevron-down"
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-neutral-700 dark:text-neutral-300 hover:text-primary dark:hover:text-primary font-medium transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side - Social Links and Theme Switcher */}
            <div className="flex items-center space-x-4">
              {/* Social Links Dropdown */}
              <div className="relative">
                <button
                  onClick={() => handleDropdownClick("social")}
                  className="flex items-center gap-1 text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-primary transition-colors duration-200 cursor-pointer p-2"
                  title="Social Media"
                >
                  <Icon icon="lucide:share-2" className="w-5 h-5" />
                  <Icon
                    icon="lucide:chevron-down"
                    className={`w-3 h-3 transition-transform duration-200 ${
                      activeDropdown === "social" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Theme Switcher */}
              <div className="relative">
                <button
                  onClick={() => handleDropdownClick("theme")}
                  className="flex items-center gap-1 text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-primary transition-colors duration-200 cursor-pointer p-2"
                  title="Theme"
                >
                  <Icon icon="lucide:palette" className="w-5 h-5" />
                  <Icon
                    icon="lucide:chevron-down"
                    className={`w-3 h-3 transition-transform duration-200 ${
                      activeDropdown === "theme" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown Menus */}
      <AnimatePresence>
        {activeDropdown && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-transparent z-40"
              onClick={closeDropdown}
            />

            {/* Dropdown Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={dropdownVariants}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-screen bg-white dark:bg-dark-bg border-b border-neutral-200 dark:border-neutral-700 z-50 transition-colors duration-200"
            >
              <div className="container mx-auto px-4 py-8">
                {activeDropdown === "theme" ? (
                  // Theme Dropdown
                  <div className="flex justify-center">
                    <div className="grid grid-cols-3 gap-4 w-full">
                      {themeOptions.map((themeOption) => (
                        <button
                          key={themeOption.value}
                          onClick={() => handleThemeChange(themeOption.value)}
                          className={`bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-700 text-neutral-600 dark:text-neutral-300 p-6 rounded-lg text-center hover:bg-primary/10 hover:text-primary transition-all duration-200 cursor-pointer ${
                            theme === themeOption.value || (themeOption.value === "system" && !["light", "dark"].includes(theme))
                              ? "ring-2 ring-primary bg-primary/5"
                              : ""
                          }`}
                        >
                          <Icon
                            icon={themeOption.icon}
                            className="w-8 h-8 mx-auto mb-3"
                          />
                          <h4 className="font-semibold text-sm">
                            {themeOption.label}
                          </h4>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : activeDropdown === "social" ? (
                  // Social Media Dropdown
                  <div className="flex justify-center">
                    <div className="grid grid-cols-4 gap-4 w-full">
                      {socialLinks.map((social) => (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-700 text-neutral-600 dark:text-neutral-300 p-6 rounded-lg text-center hover:bg-primary hover:text-primary transition-all duration-200 cursor-pointer"
                          onClick={closeDropdown}
                        >
                          <Icon
                            icon={social.icon}
                            className="w-8 h-8 mx-auto mb-3"
                          />
                          <h4 className="font-semibold text-sm">
                            {social.name}
                          </h4>
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  // Regular Menu Dropdown
                  <div className="flex gap-8">
                    {/* Left Side - Links */}
                    <div className="flex-shrink-0">
                      <div className="space-y-4">
                        {menuItems
                          .find((item) => item.label === activeDropdown)
                          ?.dropdownItems?.map((dropdownItem) => (
                            <div key={dropdownItem.label}>
                              {dropdownItem.external ? (
                                <a
                                  href={dropdownItem.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block text-neutral-700 dark:text-neutral-300 hover:text-primary dark:hover:text-primary font-medium transition-colors duration-200 cursor-pointer"
                                  onClick={closeDropdown}
                                >
                                  <div className="flex items-center gap-2">
                                    {dropdownItem.label}
                                    <Icon
                                      icon="lucide:external-link"
                                      className="w-4 h-4"
                                    />
                                  </div>
                                </a>
                              ) : (
                                <Link
                                  href={dropdownItem.href}
                                  className="block text-neutral-700 dark:text-neutral-300 hover:text-primary dark:hover:text-primary font-medium transition-colors duration-200 cursor-pointer"
                                  onClick={closeDropdown}
                                >
                                  {dropdownItem.label}
                                </Link>
                              )}
                            </div>
                          ))}
                      </div>
                    </div>

                    {/* Right Side - Cards */}
                    <div className="flex-1 ml-8">
                      <div className="grid grid-cols-3 gap-4">
                        {dropdownCards[
                          activeDropdown as keyof typeof dropdownCards
                        ]?.map((card, index) => (
                          <div
                            key={index}
                            className={`bg-gradient-to-br rounded ${getCardColorClasses(
                              card.color
                            )} p-6 text-center`}
                          >
                            <Icon
                              icon={card.icon}
                              className={`w-10 h-10 mx-auto mb-3 ${
                                card.color === "yellow" ? "text-yellow-600" : ""
                              }`}
                            />
                            <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 text-sm mb-2">
                              {card.title}
                            </h4>
                            <p className="text-xs text-neutral-600 dark:text-neutral-400">
                              {card.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
