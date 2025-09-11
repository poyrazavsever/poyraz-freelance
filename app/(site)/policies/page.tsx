"use client";
import React from "react";
import { Icon } from "@iconify/react";

const policies = [
  {
    title: "Gizlilik Politikası",
    icon: "lucide:shield-check",
    content: [
      "Kişisel verilerinizi koruma altına alıyoruz.",
      "Bilgileriniz üçüncü taraflarla paylaşılmaz.",
      "Güvenli veri saklama sistemleri kullanıyoruz.",
      "KVKK kapsamında tüm haklarınız korunur.",
    ],
  },
  {
    title: "Hizmet Şartları",
    icon: "lucide:file-text",
    content: [
      "Proje teslimat süreleri sözleşmede belirtilir.",
      "Revizyon hakları paket bazında sınırlıdır.",
      "Ödemeler belirlenen takvime göre yapılır.",
      "Fikri mülkiyet hakları müşteriye aittir.",
    ],
  },
  {
    title: "İptal ve İade",
    icon: "lucide:rotate-ccw",
    content: [
      "Proje başlangıcından sonraki 7 gün içinde iptal edilebilir.",
      "Tamamlanan aşamalar ücret iadesi kapsamı dışındadır.",
      "İade süreci 14 iş günü içerisinde tamamlanır.",
      "Müşteri kaynaklı iptallerde farklı koşullar geçerlidir.",
    ],
  },
  {
    title: "Destek Politikası",
    icon: "lucide:headphones",
    content: [
      "Paket tipine göre ücretsiz destek süresi verilir.",
      "Acil durumlar 24 saat içinde yanıtlanır.",
      "Rutin sorular iş günlerinde yanıtlanır.",
      "Destek süresi bitiminde ücretli destek seçenekleri mevcuttur.",
    ],
  },
];

const PoliciesPage = () => {
  return (
    <section className="py-16 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-dark-bg dark:text-white mb-8 text-center">
          Politikalar
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 text-center mb-12">
          Hizmet politikalarımız ve çalışma şartlarımız hakkında bilgi edinin.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {policies.map((policy, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 rounded-xl border border-primary/20 dark:border-primary/10 p-6"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center">
                  <Icon icon={policy.icon} className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-dark-bg dark:text-white">
                  {policy.title}
                </h3>
              </div>

              <ul className="space-y-3">
                {policy.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <Icon
                      icon="lucide:check"
                      className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                    />
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal Notice */}
        <div className="mt-12">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 rounded-xl border border-primary/20 dark:border-primary/10 p-8">
            <h3 className="text-2xl font-bold text-dark-bg dark:text-white mb-4">
              Yasal Uyarı
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
              Bu web sitesinde yer alan tüm içerikler telif hakkı ile
              korunmaktadır. İzinsiz kullanımı yasaktır. Bu politikalar herhangi
              bir bildirimde bulunmaksızın güncellenebilir. Güncel versiyonları
              web sitemizden takip edebilirsiniz.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-dark-bg px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                <Icon icon="lucide:message-circle" className="w-5 h-5" />
                Sorularınız için İletişime Geçin
              </a>
              <div className="text-sm text-neutral-500 dark:text-neutral-400 flex items-center gap-2">
                <Icon icon="lucide:calendar" className="w-4 h-4" />
                Son güncelleme: Eylül 2025
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoliciesPage;
