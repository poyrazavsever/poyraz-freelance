"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import toast from "react-hot-toast";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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

  return (
    <nav className="bg-white shadow-md relative z-50">
      {/* Top Bar */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Search Box */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Icon
                icon="lucide:search"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
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
              className="px-6 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed flex items-center gap-2"
            >
              <Icon icon="lucide:user" className="w-4 h-4" />
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-8 h-14">
            {menuItems.map((item) => (
              <div key={item.label} className="relative">
                {item.hasDropdown ? (
                  <button
                    onClick={() => handleDropdownClick(item.label)}
                    className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
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
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dropdown Menus */}
      <AnimatePresence>
        {activeDropdown && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black bg-opacity-20 z-40"
              onClick={closeDropdown}
            />

            {/* Dropdown Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={dropdownVariants}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-screen bg-white shadow-lg border-t border-gray-200 z-50"
            >
              <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {/* Dropdown content based on active dropdown */}
                  {menuItems
                    .find((item) => item.label === activeDropdown)
                    ?.dropdownItems?.map((dropdownItem) => (
                      <div key={dropdownItem.label} className="space-y-2">
                        {dropdownItem.external ? (
                          <a
                            href={dropdownItem.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                            onClick={closeDropdown}
                          >
                            <div className="flex items-center gap-2">
                              {dropdownItem.label}
                              <Icon
                                icon="lucide:external-link"
                                className="w-3 h-3"
                              />
                            </div>
                          </a>
                        ) : (
                          <Link
                            href={dropdownItem.href}
                            className="block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                            onClick={closeDropdown}
                          >
                            {dropdownItem.label}
                          </Link>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
