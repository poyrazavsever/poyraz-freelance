import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    about: [
      { label: "About Me", href: "/about-me" },
      { label: "How it Works", href: "/how-it-works" },
      { label: "References", href: "/references" },
      { label: "Blog", href: "https://poyrazavsever.com/blog", external: true },
    ],
    services: [
      { label: "UI Design", href: "/categories/ui-design" },
      { label: "Web Development", href: "/categories/web-development" },
      { label: "Packages", href: "/packages" },
      { label: "Offer Request", href: "/offer-request" },
    ],
    support: [
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/faq" },
      { label: "Help Center", href: "/help-center" },
      { label: "Policies", href: "/policies" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "GDPR", href: "/gdpr" },
    ],
  };

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
      label: "Youtube",
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
    {
      label: "Buy Me a Coffee",
      href: "https://www.buymeacoffee.com/poyrazavsever",
      icon: "simple-icons:buymeacoffee",
    },
  ];

  const contactInfo = [
    {
      icon: "hugeicons:mail-01",
      label: "Email",
      value: "poyrazavsever@gmail.com",
      href: "mailto:poyrazavsever@gmail.com",
    },
    {
      icon: "hugeicons:maps-square-02",
      label: "Location",
      value: "Ankara, Turkey",
      href: "#",
    },
    {
      icon: "hugeicons:1st-bracket-square",
      label: "Developer & Designer",
      value: "A young person exploring technology",
      href: "#",
    },
  ];

  return (
    <footer className="bg-neutral-900 dark:bg-neutral-950 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="xl:col-span-2">
            <div className="space-y-6">
              {/* Logo */}
              <Link href="/" className="inline-block">
                <Image
                  src="/logos/logo250.png"
                  alt="Logo"
                  width={150}
                  height={50}
                  className="h-10 w-auto filter brightness-0 invert"
                />
              </Link>

              {/* Description */}
              <p className="text-neutral-400 leading-relaxed max-w-md">
                I'm a passionate developer who turns your ideas into powerful
                digital experiences. Let's build something amazing together and
                bring your vision to life.
              </p>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-neutral-800 dark:bg-neutral-900 rounded-lg flex items-center justify-center text-neutral-400 hover:text-primary hover:bg-primary/10 transition-all duration-200"
                      title={social.label}
                    >
                      <Icon icon={social.icon} className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">About</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-primary transition-colors duration-200 flex items-center gap-2"
                    >
                      {link.label}
                      <Icon icon="lucide:external-link" className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal */}
          <div className="space-y-8">
            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="border-t border-neutral-800 dark:border-neutral-900 mt-12 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((contact) => (
              <div key={contact.label} className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon icon={contact.icon} className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-600">
                    {contact.label}
                  </p>
                  {contact.href === "#" ? (
                    <p className="text-white font-medium">{contact.value}</p>
                  ) : (
                    <a
                      href={contact.href}
                      className="text-white font-medium hover:text-primary transition-colors duration-200"
                    >
                      {contact.value}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800 dark:border-neutral-900">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-neutral-500 dark:text-neutral-600 text-sm">
                © {currentYear} Poyraz Avsever. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <Link
                  href="/privacy"
                  className="text-neutral-500 dark:text-neutral-600 hover:text-primary transition-colors duration-200"
                >
                  Privacy
                </Link>
                <span className="text-neutral-700 dark:text-neutral-700">
                  •
                </span>
                <Link
                  href="/terms"
                  className="text-neutral-500 dark:text-neutral-600 hover:text-primary transition-colors duration-200"
                >
                  Terms
                </Link>
                <span className="text-neutral-700 dark:text-neutral-700">
                  •
                </span>
                <Link
                  href="/cookies"
                  className="text-neutral-500 dark:text-neutral-600 hover:text-primary transition-colors duration-200"
                >
                  Cookies
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-sm text-neutral-500 dark:text-neutral-600">
              <Icon icon="lucide:heart" className="w-4 h-4 text-red-500" />
              <span>Made with love in Ankara</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
