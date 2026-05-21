"use client";

import { useEffect, useRef, useState } from "react";

export default function FinalCTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="relative py-32 px-4 bg-[#0a0a0f] overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d1117] to-[#0a0a0f] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#3B82F6] opacity-[0.08] blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2
          className={`
            text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6
            transition-all duration-700 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          Bắt đầu build sản phẩm với AI team
        </h2>

        <p
          className={`
            text-base sm:text-lg text-gray-400 mb-10 max-w-xl mx-auto
            transition-all duration-700 ease-out delay-100
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          Biến ý tưởng thành sản phẩm thực tế chỉ trong vài tin nhắn. Không cần code, không cần dev — AI team sẽ lo mọi thứ từ A đến Z.
        </p>

        <a
          href="https://t.me/aiteam_bot"
          target="_blank"
          rel="noopener noreferrer"
          className={`
            inline-flex items-center gap-3 px-8 py-4 rounded-lg
            bg-[#3B82F6] text-white font-semibold text-base
            hover:bg-[#2563EB] active:bg-[#1d4ed8]
            transition-all duration-200
            hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]
            focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2 focus:ring-offset-[#0a0a0f]
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
          style={{ transitionDelay: "200ms" }}
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
          </svg>
          Chat qua Telegram
        </a>
      </div>
    </section>
  );
}
