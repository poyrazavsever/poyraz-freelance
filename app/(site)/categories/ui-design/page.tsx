"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Button from "@/components/shared/button";

// Instagram post tipi
interface InstagramChild {
  id: string;
  media_type: "IMAGE" | "VIDEO";
  media_url: string;
  thumbnail_url?: string;
}

interface InstagramPost {
  id: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string; // IMAGE veya VIDEO kapak (video’da thumbnail_url tercih edebilirsiniz)
  thumbnail_url?: string;
  caption?: string;
  timestamp: string;
  permalink: string;
  children?: InstagramChild[];
}


const UiDesign = () => {
  const [instagramPosts, setInstagramPosts] = useState<InstagramPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const res = await fetch("/api/instagram", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed");
        const json = await res.json();
        setInstagramPosts(json.data || []);
      } catch (err) {
        console.error(err);
        setInstagramPosts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchInstagramPosts();
  }, []);


  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const openSlider = (post: InstagramPost, index: number) => {
    setSelectedPost(post);
    setCurrentSlideIndex(index);
  };

  const closeSlider = () => {
    setSelectedPost(null);
  };

  const nextSlide = () => {
    const nextIndex = (currentSlideIndex + 1) % instagramPosts.length;
    setCurrentSlideIndex(nextIndex);
    setSelectedPost(instagramPosts[nextIndex]);
  };

  const prevSlide = () => {
    const prevIndex =
      currentSlideIndex === 0
        ? instagramPosts.length - 1
        : currentSlideIndex - 1;
    setCurrentSlideIndex(prevIndex);
    setSelectedPost(instagramPosts[prevIndex]);
  };

  return (
    <section className="bg-white dark:bg-dark-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-24 sm:py-32 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-16"
        >
          {/* Header Section */}
          <motion.div
            variants={fadeInUp}
            className="border-l-4 border-primary pl-6"
          >
            <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">
              UI Design Portfolio
            </h1>
            <p className="mt-4 leading-8 text-neutral-600 dark:text-neutral-400 max-w-2xl">
              Creating intuitive and beautiful user interfaces that enhance user
              experience and drive engagement. Follow my design journey on
              Instagram.
            </p>
          </motion.div>

          {/* Instagram Gallery */}
          <motion.div variants={fadeInUp} className="space-y-8">
            {loading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[...Array(8)].map((_, index) => (
                  <div
                    key={index}
                    className="aspect-square bg-neutral-200 dark:bg-neutral-700 rounded-xl animate-pulse"
                  />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {instagramPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="aspect-square rounded-xl overflow-hidden group cursor-pointer relative bg-neutral-100 dark:bg-neutral-800"
                    onClick={() => openSlider(post, index)}
                  >
                    {post.media_type === "IMAGE" && (
                      <img
                        src={post.media_url}
                        alt={post.caption || "Instagram post"}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="flex items-center gap-2 text-white">
                          <Icon
                            icon="hugeicons:instagram"
                            className="w-4 h-4"
                          />
                          <span className="text-xs font-medium truncate">
                            {post.caption || "View on Instagram"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Instagram Link */}
            <motion.div variants={fadeInUp} className="text-center">
              <a
                href="https://instagram.com/poyraz_ui"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-2xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Icon icon="hugeicons:instagram" className="w-6 h-6" />
                Follow @poyraz_ui for more designs
                <Icon icon="hugeicons:arrow-up-right-01" className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>

      {/* Instagram Slider Modal */}
      {selectedPost && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeSlider}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-2xl w-full max-h-[80vh] bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeSlider}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            >
              <Icon icon="hugeicons:cancel-01" className="w-5 h-5" />
            </button>

            {/* Navigation Buttons */}
            {instagramPosts.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <Icon icon="hugeicons:arrow-left-02" className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-16 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <Icon icon="hugeicons:arrow-right-02" className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Image */}
            <div className="aspect-square">
              <img
                src={selectedPost.media_url}
                alt={selectedPost.caption || "Instagram post"}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Post Info */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Icon
                    icon="hugeicons:instagram"
                    className="w-6 h-6 text-pink-500"
                  />
                  <span className="font-semibold text-neutral-900 dark:text-white">
                    @poyraz_ui
                  </span>
                </div>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">
                  {new Date(selectedPost.timestamp).toLocaleDateString()}
                </span>
              </div>
              {selectedPost.caption && (
                <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                  {selectedPost.caption}
                </p>
              )}
              <a
                href={selectedPost.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-600 font-medium"
              >
                <Icon icon="hugeicons:external-link" className="w-4 h-4" />
                View on Instagram
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default UiDesign;
