"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [activeTheme, setActiveTheme] = useState("system");
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);
  const themeRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();

  const menuItems = [
    {
      label: "About",
      hasDropdown: true,
      dropdownItems: [
        {
          label: "How it Works",
          href: "/how-it-works",
          icon: "hugeicons:workflow-circle-01",
        },
        {
          label: "About Me",
          href: "/about-me",
          icon: "hugeicons:user-account",
        },
        { label: "References", href: "/references", icon: "hugeicons:star" },
        {
          label: "Blog",
          href: "https://poyrazavsever.com/blog",
          icon: "hugeicons:text-align-justify-center",
          external: true,
        },
      ],
    },
    {
      label: "Categories",
      hasDropdown: true,
      dropdownItems: [
        {
          label: "UI Design",
          href: "/categories/ui-design",
          icon: "hugeicons:paint-board",
        },
        {
          label: "Web Development",
          href: "/categories/web-development",
          icon: "hugeicons:code",
        },
        {
          label: "E-commerce Solutions",
          href: "/categories/e-commerce",
          icon: "hugeicons:shopping-cart-01",
        },
        { label: "Packages", href: "/packages", icon: "hugeicons:package" },
        {
          label: "Offer Request",
          href: "/offer-request",
          icon: "hugeicons:file-attachment",
        },
      ],
    },
    {
      label: "Support",
      hasDropdown: true,
      dropdownItems: [
        { label: "Contact", href: "/contact", icon: "hugeicons:mail-01" },
        { label: "FAQ", href: "/faq", icon: "hugeicons:help-circle" },
        {
          label: "Help Center",
          href: "/help-center",
          icon: "hugeicons:customer-support",
        },
        {
          label: "Policies",
          href: "/policies",
          icon: "hugeicons:legal-document-01",
        },
      ],
    },
  ];

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/poyrazavsever/",
      icon: "hugeicons:linkedin-01",
      label: "LinkedIn",
    },
    {
      href: "https://www.github.com/poyrazavsever",
      icon: "hugeicons:github",
      label: "GitHub",
    },
    {
      href: "https://www.instagram.com/poyraz_avsever/",
      icon: "hugeicons:instagram",
      label: "Instagram",
    },
    {
      href: "http://youtube.com/@poyrazavsever",
      icon: "hugeicons:youtube",
      label: "Youtube",
    },
    {
      href: "https://medium.com/@poyrazavsever",
      icon: "hugeicons:medium-square",
      label: "Medium",
    },
    {
      href: "https://www.behance.net/poyrazavsever",
      icon: "hugeicons:behance-02",
      label: "Behance",
    },
    {
      href: "https://www.buymeacoffee.com/poyrazavsever",
      icon: "simple-icons:buymeacoffee",
      label: "Buy Me a Coffee",
    },
  ];

  const themeOptions = [
    { label: "Light", value: "light", icon: "mdi:weather-sunny" },
    { label: "Dark", value: "dark", icon: "mdi:weather-night" },
    { label: "System", value: "system", icon: "mdi:monitor" },
  ];

  const handleThemeChange = (themeValue: string) => {
    setActiveTheme(themeValue);
    localStorage.setItem("theme", themeValue);
    if (
      themeValue === "dark" ||
      (themeValue === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setIsThemeOpen(false);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "system";
    setActiveTheme(savedTheme);
    handleThemeChange(savedTheme);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
      if (
        themeRef.current &&
        !themeRef.current.contains(event.target as Node)
      ) {
        setIsThemeOpen(false);
      }
      if (
        socialRef.current &&
        !socialRef.current.contains(event.target as Node)
      ) {
        setIsSocialOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Responsive dropdown position
  const dropdownPosition =
    typeof window !== "undefined" && window.innerWidth < 640
      ? "left-1/2 -translate-x-1/2 right-auto"
      : "right-0";

  // Filtered nav items for search
  const filteredNavItems = menuItems.filter((item) =>
    item.label.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      {/* Top Right Navigation & Switchers */}
      <div className="fixed top-4 right-4 flex items-center gap-3 sm:gap-4 z-40">
        {/* Logo Button (Home) */}
        <Link
          href="/"
          className="p-2 rounded-lg bg-white/90 dark:bg-neutral-800/90 backdrop-blur-md border border-neutral-200 dark:border-neutral-700 shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center"
          title="Ana Sayfa"
        >
          <Image
            src="/logos/logo250.png"
            alt="Poyraz"
            width={24}
            height={24}
            className="rounded-full"
          />
        </Link>

        {/* Navigation Dropdown */}
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              setIsThemeOpen(false);
              setIsSocialOpen(false);
            }}
            className="p-2 rounded-lg bg-white/90 dark:bg-neutral-800/90 backdrop-blur-md border border-neutral-200 dark:border-neutral-700 shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            <Icon
              icon="hugeicons:menu-01"
              className="text-neutral-600 dark:text-neutral-300 w-6 h-6"
            />
          </button>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className={`absolute mt-2 bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700 p-2 min-w-[240px] max-h-[70vh] overflow-y-auto ${dropdownPosition}`}
              >
                {/* Search Bar */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center w-full bg-neutral-100 dark:bg-neutral-700 rounded-lg px-2 py-3">
                    <Icon
                      icon="hugeicons:search-01"
                      className="w-5 h-5 text-neutral-400 dark:text-neutral-300 mr-2"
                    />
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      className="bg-transparent outline-none w-full text-sm text-neutral-700 dark:text-neutral-200 placeholder:text-neutral-400 dark:placeholder:text-neutral-400"
                    />
                  </div>
                </div>

                {/* Menu Items */}
                <div className="flex flex-col gap-1">
                  {filteredNavItems.length === 0 ? (
                    <div className="text-center text-xs text-neutral-400 py-2">
                      No results found.
                    </div>
                  ) : (
                    filteredNavItems.map((item) => {
                      return (
                        <div key={item.label} className="space-y-1">
                          {/* Main Category Header - Bold, no icon */}
                          <div className="px-2 py-2">
                            <span className="text-sm font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider">
                              {item.label}
                            </span>
                          </div>
                          {/* Dropdown Items with Icons */}
                          {item.dropdownItems?.map((subItem) => {
                            const isSubActive = pathname === subItem.href;
                            return (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                target={subItem.external ? "_blank" : "_self"}
                                rel={
                                  subItem.external
                                    ? "noopener noreferrer"
                                    : undefined
                                }
                                onClick={() => setIsMenuOpen(false)}
                                className={`w-full p-2 pl-4 rounded-lg flex items-center gap-3 transition-all text-sm ${
                                  isSubActive
                                    ? "bg-neutral-50 dark:bg-neutral-900/20 text-neutral-600 dark:text-neutral-400"
                                    : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                                }`}
                              >
                                <Icon
                                  icon={subItem.icon}
                                  className="w-4 h-4 flex-shrink-0"
                                />
                                <span className="truncate">
                                  {subItem.label}
                                </span>
                                {subItem.external && (
                                  <Icon
                                    icon="lucide:external-link"
                                    className="w-3 h-3 flex-shrink-0"
                                  />
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      );
                    })
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Theme Switcher */}
        <div className="relative" ref={themeRef}>
          <button
            onClick={() => {
              setIsThemeOpen(!isThemeOpen);
              setIsMenuOpen(false);
              setIsSocialOpen(false);
            }}
            className="p-2 rounded-lg bg-white/90 dark:bg-neutral-800/90 backdrop-blur-md border border-neutral-200 dark:border-neutral-700 shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            <Icon
              icon={
                activeTheme === "dark"
                  ? "mdi:weather-night"
                  : activeTheme === "light"
                  ? "mdi:weather-sunny"
                  : "mdi:monitor"
              }
              className="text-neutral-600 dark:text-neutral-300 w-5 h-5"
            />
          </button>
          <AnimatePresence>
            {isThemeOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 bg-white dark:bg-neutral-800 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-700 p-2 min-w-[180px]"
              >
                {themeOptions.map((theme) => (
                  <button
                    key={theme.value}
                    onClick={() => handleThemeChange(theme.value)}
                    className={`w-full p-2 rounded-lg flex items-center gap-3 transition-all ${
                      activeTheme === theme.value
                        ? "bg-neutral-50 dark:bg-neutral-900/20 text-neutral-600 dark:text-neutral-400"
                        : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                    }`}
                  >
                    <Icon icon={theme.icon} className="w-5 h-5" />
                    <span className="text-sm font-medium">{theme.label}</span>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Social Media Links */}
        <div className="relative" ref={socialRef}>
          <button
            onClick={() => {
              setIsSocialOpen(!isSocialOpen);
              setIsThemeOpen(false);
              setIsMenuOpen(false);
            }}
            className="p-2 rounded-lg bg-white/90 dark:bg-neutral-800/90 backdrop-blur-md border border-neutral-200 dark:border-neutral-700 shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            <Icon
              icon="mdi:share-variant"
              className="text-neutral-600 dark:text-neutral-300 w-5 h-5"
            />
          </button>
          <AnimatePresence>
            {isSocialOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 bg-white dark:bg-neutral-800 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-700 p-2 min-w-[200px]"
              >
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsSocialOpen(false)}
                    className="w-full p-2 rounded-lg flex items-center gap-3 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all"
                    title={link.label}
                  >
                    <Icon icon={link.icon} className="w-5 h-5" />
                    <span className="text-sm font-medium">{link.label}</span>
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Navbar;
