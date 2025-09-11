"use client";
import React from "react";
import { Icon } from "@iconify/react";

const helpCategories = [
  {
    title: "Proje Başlangıcı",
    description: "Proje başlatma süreci ve ilk adımlar",
    icon: "lucide:play-circle",
    topics: [
      "Nasıl teklif alırım?",
      "Proje briefi nasıl hazırlanır?",
      "Ödeme koşulları nelerdir?",
      "Sözleşme süreci nasıl işler?",
    ],
  },
  {
    title: "Geliştirme Süreci",
    description: "Proje geliştirme aşaması ile ilgili bilgiler",
    icon: "lucide:code",
    topics: [
      "Proje takibi nasıl yapılır?",
      "Revizyon süreci nasıl işler?",
      "Test aşaması ne kadar sürer?",
      "Geri bildirim nasıl verilir?",
    ],
  },
  {
    title: "Teslim ve Sonrası",
    description: "Proje teslimi ve sonrası süreçler",
    icon: "lucide:package-check",
    topics: [
      "Teslim süreci nasıl işler?",
      "Destek süresi ne kadar?",
      "Domain ve hosting nasıl yönetilir?",
      "Güncellemeler nasıl yapılır?",
    ],
  },
  {
    title: "Teknik Destek",
    description: "Teknik sorunlar ve çözümleri",
    icon: "lucide:settings",
    topics: [
      "Site yavaş çalışıyor nasıl çözülür?",
      "E-posta sorunları nasıl giderilir?",
      "SSL sertifikası nasıl yenilenir?",
      "Yedekleme nasıl yapılır?",
    ],
  },
];

const HelpCenterPage = () => {
  return (
    <section className="py-16 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-dark-bg dark:text-white mb-8 text-center">
          Yardım Merkezi
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 text-center mb-12">
          İhtiyacınız olan bilgileri kategoriler halinde bulabilirsiniz.
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Aradığınız konuyu yazın..."
              className="w-full pl-12 pr-4 py-4 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white text-lg"
            />
            <Icon
              icon="lucide:search"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-6 h-6"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {helpCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 rounded-xl border border-primary/20 dark:border-primary/10 p-6"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center">
                  <Icon icon={category.icon} className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark-bg dark:text-white">
                    {category.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {category.description}
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                {category.topics.map((topic, topicIndex) => (
                  <li key={topicIndex}>
                    <a
                      href="#"
                      className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                    >
                      <Icon
                        icon="lucide:chevron-right"
                        className="w-4 h-4 flex-shrink-0"
                      />
                      <span className="text-sm">{topic}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 rounded-xl border border-primary/20 dark:border-primary/10 p-8">
            <Icon
              icon="lucide:headphones"
              className="w-16 h-16 text-primary mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-dark-bg dark:text-white mb-4">
              Hala yardıma ihtiyacınız var mı?
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
              Aradığınız bilgiyi bulamadıysanız, doğrudan benimle iletişime
              geçebilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-dark-bg px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                <Icon icon="lucide:message-circle" className="w-5 h-5" />
                İletişime Geç
              </a>
              <a
                href="/faq"
                className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                <Icon icon="lucide:help-circle" className="w-5 h-5" />
                SSS'ye Göz At
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpCenterPage;
