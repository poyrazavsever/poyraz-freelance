"use client";
import React from "react";
import { Icon } from "@iconify/react";

const References = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechStart",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      text: "Outstanding work! Poyraz delivered our project on time and exceeded all expectations. The attention to detail and communication was exceptional.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Product Manager, InnovateCorp",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      text: "Professional, reliable, and incredibly talented. The website he built for us has significantly improved our conversion rates.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Davis",
      position: "Marketing Director, GrowthLab",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      text: "Amazing UI/UX design skills! Our users love the new interface. Clean, modern, and perfectly functional.",
      rating: 5,
    },
    {
      id: 4,
      name: "David Rodriguez",
      position: "Founder, StartupX",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      text: "Best freelancer I've worked with. Great communication, technical expertise, and delivers high-quality results every time.",
      rating: 5,
    },
    {
      id: 5,
      name: "Lisa Thompson",
      position: "CTO, DigitalFlow",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      text: "Incredible attention to detail and modern development practices. Our e-commerce platform performs flawlessly.",
      rating: 5,
    },
    {
      id: 6,
      name: "James Wilson",
      position: "Business Owner, LocalBiz",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      text: "Transformed our online presence completely. Professional, fast, and always available to help. Highly recommended!",
      rating: 5,
    },
  ];

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const getCardRotation = (index: number) => {
    const rotations = [2, -1, 3, -2, 1, -3, 2, -1, 3, -2, 1, -3];
    return rotations[index % rotations.length];
  };

  return (
    <section className="py-16 overflow-hidden !z-50">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Infinite Scroll Container */}
          <div className="relative">
            <div className="flex animate-scroll space-x-6">
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${Math.floor(
                    index / testimonials.length
                  )}`}
                  className="flex-shrink-0 w-80"
                  style={{
                    transform: `rotate(${getCardRotation(index)}deg)`,
                  }}
                >
                  <div className="bg-white/10 dark:bg-neutral-800/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 dark:border-neutral-700/30 shadow-lg h-full">
                    {/* Stars */}
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon
                          key={i}
                          icon="hugeicons:star-award-01"
                          className="w-5 h-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed text-sm">
                      "{testimonial.text}"
                    </p>

                    {/* Client Info */}
                    <div className="flex items-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-neutral-900 dark:text-white text-sm">
                          {testimonial.name}
                        </h4>
                        <p className="text-neutral-600 dark:text-neutral-400 text-xs">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default References;
