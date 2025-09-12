"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Button from "@/components/shared/button";

// Gallery item tipi
interface GalleryItem {
  id: number;
  images: string[];
  thumbnail: string;
}

const UiDesign = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [selectedGallery, setSelectedGallery] = useState<GalleryItem | null>(
    null
  );
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  // Galeri dosyalarını yükle
  useEffect(() => {
    const loadGalleryItems = async () => {
      try {
        setLoading(true);
        const items: GalleryItem[] = [];

        // /ui/1, /ui/2, /ui/3... klasörlerini sırayla kontrol et
        for (let i = 1; i <= 20; i++) {
          const images: string[] = [];
          let imageIndex = 1;

          // Her klasördeki görselleri sırayla kontrol et (1.png, 2.png, 3.png...)
          while (imageIndex <= 10) {
            try {
              const imagePath = `/ui/${i}/${imageIndex}.png`;

              // Resmin var olup olmadığını kontrol et
              const response = await fetch(imagePath, { method: "HEAD" });
              if (response.ok) {
                images.push(imagePath);
                imageIndex++;
              } else {
                // Eğer bir dosya yoksa bu klasör için aramayı durdur
                break;
              }
            } catch {
              // Hata durumunda da bu klasör için aramayı durdur
              break;
            }
          }

          // Eğer klasörde hiç resim yoksa (1.png bile yoksa) sonraki klasörleri aramayı bırak
          if (images.length === 0) {
            break;
          }

          // Eğer klasörde en az bir resim varsa galeri öğesi oluştur
          items.push({
            id: i,
            images,
            thumbnail: images[0], // İlk resmi thumbnail olarak kullan
          });
        }

        setGalleryItems(items);
      } catch (error) {
        console.error("Gallery loading error:", error);

        // Fallback örnek galeri
        const fallbackItems: GalleryItem[] = [
          {
            id: 1,
            images: [
              "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=600&fit=crop",
              "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=600&fit=crop",
              "https://images.unsplash.com/photo-1545665277-5937750fedcc?w=600&h=600&fit=crop",
            ],
            thumbnail:
              "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=600&fit=crop",
          },
          {
            id: 2,
            images: [
              "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=600&h=600&fit=crop",
              "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=600&fit=crop",
            ],
            thumbnail:
              "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=600&h=600&fit=crop",
          },
          {
            id: 3,
            images: [
              "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=600&fit=crop",
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop",
              "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop",
            ],
            thumbnail:
              "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=600&fit=crop",
          },
        ];
        setGalleryItems(fallbackItems);
      } finally {
        setLoading(false);
      }
    };

    loadGalleryItems();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const openGallery = (gallery: GalleryItem) => {
    setSelectedGallery(gallery);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedGallery(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedGallery) {
      setCurrentImageIndex((prev) =>
        prev === selectedGallery.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedGallery) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedGallery.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section className="py-24 sm:py-0 bg-white dark:bg-dark-bg min-h-screen flex items-start justify-start">
      <div className="container mx-auto px-4 pt-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl"
        >
          {/* Main Content - Left Aligned */}
          <motion.div variants={itemVariants} className="max-w-2xl mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
              UI Design Portfolio
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
              Creating intuitive and beautiful user interfaces that enhance user
              experience and drive engagement. Explore my design projects and
              see how I transform ideas into compelling digital experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="md"
                icon="hugeicons:message-circle"
                iconPosition="left"
                href="/contact"
              >
                Start a Project
              </Button>
              <Button
                variant="outline"
                size="md"
                icon="hugeicons:instagram"
                iconPosition="left"
                href="https://instagram.com/poyraz_ui"
                target="_blank"
              >
                Follow on Instagram
              </Button>
            </div>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div variants={itemVariants} className="max-w-4xl">
            <div className="border-l-4 border-primary pl-6 py-4 mb-8">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                Design Projects
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Click on any project to view the complete design process
              </p>
            </div>

            {loading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[...Array(8)].map((_, index) => (
                  <div
                    key={index}
                    className="aspect-square bg-neutral-200 dark:bg-neutral-700 rounded-xl animate-pulse"
                  />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {galleryItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="aspect-square rounded-md overflow-hidden group cursor-pointer relative bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700"
                    onClick={() => openGallery(item)}
                  >
                    <img
                      src={item.thumbnail}
                      alt={`UI Design Project ${item.id}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="flex items-center justify-between text-white">
                          <div className="flex items-center gap-1 text-xs">
                            <Icon
                              icon="hugeicons:image-01"
                              className="w-3 h-3"
                            />
                            <span>{item.images.length}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {galleryItems.length === 0 && !loading && (
              <div className="text-left py-12">
                <Icon
                  icon="hugeicons:album-not-found-01"
                  className="w-12 h-12 text-neutral-400 mb-4"
                />
                <p className="text-neutral-500 dark:text-neutral-400 max-w-md">
                  No design projects found. Projects will be automatically
                  loaded from /ui/ folders.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Gallery Modal */}
      {selectedGallery && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeGallery}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl w-full max-h-[90vh] bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-700">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                Project {selectedGallery.id} - {currentImageIndex + 1} of{" "}
                {selectedGallery.images.length}
              </h3>
              <button
                onClick={closeGallery}
                className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
              >
                <Icon icon="hugeicons:cancel-01" className="w-5 h-5" />
              </button>
            </div>

            {/* Image Container */}
            <div className="relative aspect-video bg-neutral-50 dark:bg-neutral-800">
              <img
                src={selectedGallery.images[currentImageIndex]}
                alt={`Project ${selectedGallery.id} - Image ${
                  currentImageIndex + 1
                }`}
                className="w-full h-full object-contain"
              />

              {/* Navigation Buttons */}
              {selectedGallery.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  >
                    <Icon icon="hugeicons:arrow-left-02" className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  >
                    <Icon icon="hugeicons:arrow-right-02" className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Navigation */}
            {selectedGallery.images.length > 1 && (
              <div className="p-4 border-t border-neutral-200 dark:border-neutral-700">
                <div className="flex gap-2 overflow-x-auto">
                  {selectedGallery.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                        index === currentImageIndex
                          ? "border-primary"
                          : "border-neutral-200 dark:border-neutral-700"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default UiDesign;
