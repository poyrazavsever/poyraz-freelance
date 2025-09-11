"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";

const faqs = [
  {
    question: "Projemi ne kadar sürede teslim edebilirsiniz?",
    answer:
      "Proje büyüklüğüne göre değişmekle birlikte, ortalama bir web sitesi 2-4 hafta içerisinde teslim edilir. Karmaşık projeler için daha detaylı zaman planlaması yaparız.",
  },
  {
    question: "Hangi teknolojileri kullanıyorsunuz?",
    answer:
      "Modern web teknolojileri kullanıyorum: React.js, Next.js, Node.js, TailwindCSS, TypeScript. Projenin ihtiyaçlarına göre en uygun teknoloji stack'ini seçeriz.",
  },
  {
    question: "Proje sonrası destek veriyor musunuz?",
    answer:
      "Evet! Tüm projelerimde paket tipine göre ücretsiz destek süresi sunuyorum. Bu süre sonrasında da uygun fiyatlarla destek hizmeti vermeye devam ederim.",
  },
  {
    question: "Ödeme nasıl yapılır?",
    answer:
      "Ödemeler genellikle %50 ön ödeme, %50 teslim sonrası şeklinde yapılır. Büyük projelerde taksitli ödeme seçenekleri de mevcuttur.",
  },
  {
    question: "Revizyon hakım var mı?",
    answer:
      "Tabii ki! Her pakette belirli sayıda revizyon hakkı bulunur. Projenin her aşamasında geri bildirimlerinizi alarak ilerleriz.",
  },
  {
    question: "SEO optimizasyonu dahil mi?",
    answer:
      "Evet, tüm web sitelerinde temel SEO optimizasyonu dahildir. Gelişmiş SEO hizmetleri için ayrı paketler mevcuttur.",
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-dark-bg dark:text-white mb-8 text-center">
          Sıkça Sorulan Sorular
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 text-center mb-12">
          Merak ettiğiniz soruların cevaplarını burada bulabilirsiniz.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 rounded-xl border border-primary/20 dark:border-primary/10 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-primary/20 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-dark-bg dark:text-white pr-4">
                  {faq.question}
                </h3>
                <Icon
                  icon="lucide:chevron-down"
                  className={`w-5 h-5 text-primary transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 rounded-xl border border-primary/20 dark:border-primary/10 p-8">
            <h3 className="text-xl font-bold text-dark-bg dark:text-white mb-4">
              Başka sorunuz mu var?
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
              Aradığınız cevabı bulamadıysanız, benimle doğrudan iletişime
              geçebilirsiniz.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-dark-bg px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              <Icon icon="lucide:message-circle" className="w-5 h-5" />
              İletişime Geç
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
