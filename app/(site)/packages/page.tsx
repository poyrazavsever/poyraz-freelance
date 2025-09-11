"use client";
import React from "react";
import { Icon } from "@iconify/react";

const packages = [
  {
    title: "Basic Web Paketi",
    price: "₺2,500",
    description: "Küçük işletmeler için temel web sitesi çözümü",
    features: [
      "5 sayfa responsive web sitesi",
      "Temel SEO optimizasyonu",
      "İletişim formu",
      "Sosyal medya entegrasyonu",
      "1 ay ücretsiz destek",
    ],
    icon: "lucide:package",
    popular: false,
  },
  {
    title: "Premium Web Paketi",
    price: "₺5,000",
    description: "Gelişmiş özelliklerle profesyonel web sitesi",
    features: [
      "10 sayfa responsive web sitesi",
      "Gelişmiş SEO optimizasyonu",
      "Admin paneli",
      "E-ticaret entegrasyonu",
      "Blog sistemi",
      "3 ay ücretsiz destek",
    ],
    icon: "lucide:crown",
    popular: true,
  },
  {
    title: "Enterprise Paketi",
    price: "₺10,000",
    description: "Büyük projeler için kapsamlı çözüm",
    features: [
      "Sınırsız sayfa",
      "Özel tasarım ve geliştirme",
      "API entegrasyonları",
      "Güvenlik optimizasyonu",
      "Performans optimizasyonu",
      "6 ay ücretsiz destek",
    ],
    icon: "lucide:rocket",
    popular: false,
  },
];

const PackagesPage = () => {
  return (
    <section className="py-16 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-dark-bg dark:text-white mb-8 text-center">
          Paketler
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 text-center mb-12">
          İhtiyaçlarınıza uygun paket seçin ve projenizi hayata geçirin.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className={`bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 rounded-xl border ${
                pkg.popular
                  ? "border-primary ring-2 ring-primary/20"
                  : "border-primary/20 dark:border-primary/10"
              } p-6 text-center relative`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-dark-bg px-4 py-1 rounded-full text-sm font-semibold">
                  En Popüler
                </div>
              )}
              <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon icon={pkg.icon} className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-dark-bg dark:text-white mb-2">
                {pkg.title}
              </h3>
              <div className="text-3xl font-bold text-primary mb-2">
                {pkg.price}
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
                {pkg.description}
              </p>
              <ul className="text-left space-y-3 mb-8">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Icon
                      icon="lucide:check"
                      className="w-5 h-5 text-primary flex-shrink-0"
                    />
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200 ${
                  pkg.popular
                    ? "bg-primary text-dark-bg hover:bg-primary/90"
                    : "bg-primary/10 text-primary hover:bg-primary/20"
                }`}
              >
                Paketi Seç
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesPage;
