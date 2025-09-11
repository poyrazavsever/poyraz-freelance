"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Button from "@/components/shared/button";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // Form submission logic here
  };

  const contactInfo = [
    {
      icon: "lucide:mail",
      title: "E-posta",
      value: "hello@poyrazavsever.com",
      href: "mailto:hello@poyrazavsever.com",
    },
    {
      icon: "lucide:phone",
      title: "Telefon",
      value: "+90 555 123 45 67",
      href: "tel:+905551234567",
    },
    {
      icon: "lucide:map-pin",
      title: "Konum",
      value: "İstanbul, Türkiye",
      href: "#",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-dark-bg dark:text-white mb-8 text-center">
          İletişim
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 text-center mb-12">
          Projeleriniz ve sorularınız için benimle iletişime geçin.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-dark-bg dark:text-white mb-6">
              İletişim Bilgileri
            </h3>

            {contactInfo.map((info) => (
              <a
                key={info.title}
                href={info.href}
                className="flex items-center gap-4 p-4 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 rounded-xl border border-primary/20 dark:border-primary/10 hover:bg-primary/20 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center">
                  <Icon icon={info.icon} className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-dark-bg dark:text-white">
                    {info.title}
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {info.value}
                  </p>
                </div>
              </a>
            ))}

            <div className="pt-8">
              <h4 className="text-lg font-semibold text-dark-bg dark:text-white mb-4">
                Sosyal Medya
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/poyrazavsever/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors duration-200"
                >
                  <Icon
                    icon="hugeicons:linkedin-01"
                    className="w-5 h-5 text-primary"
                  />
                </a>
                <a
                  href="https://www.github.com/poyrazavsever"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors duration-200"
                >
                  <Icon
                    icon="hugeicons:github"
                    className="w-5 h-5 text-primary"
                  />
                </a>
                <a
                  href="https://www.instagram.com/poyraz_avsever/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors duration-200"
                >
                  <Icon
                    icon="hugeicons:instagram"
                    className="w-5 h-5 text-primary"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-dark-bg dark:text-white mb-6">
              Mesaj Gönder
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-dark-bg dark:text-white mb-2">
                  Ad Soyad *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-dark-bg dark:text-white mb-2">
                  E-posta *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-dark-bg dark:text-white mb-2">
                  Konu *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-dark-bg dark:text-white mb-2">
                  Mesaj *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white"
                  placeholder="Mesajınızı buraya yazın..."
                ></textarea>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                icon="lucide:send"
                iconPosition="left"
                className="w-full text-base font-semibold"
              >
                Mesaj Gönder
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
