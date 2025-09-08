import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Freelance - Poyraz Avsever - Work With Me",
  description:
    "Let's work together! Hire me for your next project. I'm available for freelance work and ready to bring your ideas to life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Toaster
          position="bottom-right"
          toastOptions={{
            // Default toast style - Ana renk #ffbd59
            style: {
              background: "linear-gradient(135deg, #ffbd59 0%, #ffd28d 100%)",
              color: "#1f2937", // gray-800
              borderRadius: "0.875rem",
              fontFamily: "Nunito, sans-serif",
              fontSize: "0.95rem",
              fontWeight: "500",
              boxShadow:
                "0 10px 40px rgba(255, 189, 89, 0.3), 0 4px 12px rgba(0,0,0,0.1)",
              border: "1px solid rgba(255, 189, 89, 0.4)",
              padding: "1rem 1.5rem",
              minWidth: "300px",
              backdropFilter: "blur(8px)",
            },
            className: "dark:shadow-lg dark:shadow-amber-500/20",
            duration: 4000,

            // Success toast style - Yeşil tonları
            success: {
              style: {
                background: "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
                color: "#ffffff",
                border: "1px solid rgba(16, 185, 129, 0.5)",
                boxShadow:
                  "0 10px 40px rgba(16, 185, 129, 0.3), 0 4px 12px rgba(0,0,0,0.1)",
                borderRadius: "0.875rem",
                fontWeight: "600",
                padding: "1rem 1.5rem",
                minWidth: "300px",
              },
              iconTheme: {
                primary: "#ffffff",
                secondary: "#10b981",
              },
              className: "dark:shadow-lg dark:shadow-emerald-500/20",
            },

            // Error toast style - Kırmızı tonları
            error: {
              style: {
                background: "linear-gradient(135deg, #ef4444 0%, #f87171 100%)",
                color: "#ffffff",
                border: "1px solid rgba(239, 68, 68, 0.5)",
                boxShadow:
                  "0 10px 40px rgba(239, 68, 68, 0.3), 0 4px 12px rgba(0,0,0,0.1)",
                borderRadius: "0.875rem",
                fontWeight: "600",
                padding: "1rem 1.5rem",
                minWidth: "300px",
              },
              iconTheme: {
                primary: "#ffffff",
                secondary: "#ef4444",
              },
              className: "dark:shadow-lg dark:shadow-red-500/20",
            },

            // Loading toast style - Ana rengin koyu tonu
            loading: {
              style: {
                background: "linear-gradient(135deg, #f59e0b 0%, #ffbd59 100%)",
                color: "#1f2937",
                border: "1px solid rgba(245, 158, 11, 0.4)",
                boxShadow:
                  "0 10px 40px rgba(245, 158, 11, 0.3), 0 4px 12px rgba(0,0,0,0.1)",
                borderRadius: "0.875rem",
                fontWeight: "500",
                padding: "1rem 1.5rem",
                minWidth: "300px",
              },
              iconTheme: {
                primary: "#f59e0b",
                secondary: "#ffffff",
              },
              className: "dark:shadow-lg dark:shadow-orange-500/20",
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
