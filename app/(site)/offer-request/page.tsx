"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Button from "@/components/shared/button";

const OfferRequestPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Form submission logic here
  };

  return (
    <section className="py-16 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-dark-bg dark:text-white mb-8 text-center">
          Teklif Talebi
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 text-center mb-12">
          Projeniz için detaylı teklif almak üzere formu doldurun.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 rounded-xl border border-primary/20 dark:border-primary/10 p-8 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-dark-bg dark:text-white mb-2">
                Telefon
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-dark-bg dark:text-white mb-2">
                Şirket
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-dark-bg dark:text-white mb-2">
                Proje Türü *
              </label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white"
              >
                <option value="">Seçiniz</option>
                <option value="website">Web Sitesi</option>
                <option value="ecommerce">E-Ticaret</option>
                <option value="webapp">Web Uygulaması</option>
                <option value="mobile">Mobil Uygulama</option>
                <option value="design">UI/UX Tasarım</option>
                <option value="other">Diğer</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-dark-bg dark:text-white mb-2">
                Bütçe
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white"
              >
                <option value="">Seçiniz</option>
                <option value="0-5000">₺0 - ₺5,000</option>
                <option value="5000-10000">₺5,000 - ₺10,000</option>
                <option value="10000-25000">₺10,000 - ₺25,000</option>
                <option value="25000+">₺25,000+</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-dark-bg dark:text-white mb-2">
              Zaman Çizelgesi
            </label>
            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white"
            >
              <option value="">Seçiniz</option>
              <option value="asap">En kısa sürede</option>
              <option value="1month">1 ay içinde</option>
              <option value="2-3months">2-3 ay içinde</option>
              <option value="flexible">Esnek</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-dark-bg dark:text-white mb-2">
              Proje Detayları *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white"
              placeholder="Projenizin detaylarını, hedeflerinizi ve özel gereksinimlerinizi açıklayın..."
            ></textarea>
          </div>

          <div className="text-center">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              icon="lucide:send"
              iconPosition="left"
              className="text-base font-semibold"
            >
              Teklif Talebi Gönder
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default OfferRequestPage;
