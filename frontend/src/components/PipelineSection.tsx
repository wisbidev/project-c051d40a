"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Gửi yêu cầu",
    description: "Gửi ý tưởng sản phẩm qua Telegram cho AI team",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "AI phân tích",
    description: "PM và TL phân tích yêu cầu, lập kế hoạch chi tiết",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Dev viết code",
    description: "Dev tự động viết code theo specification đã duyệt",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Test & Review",
    description: "TestLead kiểm tra chất lượng và TL review code",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
    title: "Deploy tự động",
    description: "Code được deploy tự động lên server sau khi approve",
  },
];

function StepCard({ step, index, isVisible }: { step: typeof steps[0]; index: number; isVisible: boolean }) {
  return (
    <div
      className={`
        relative flex flex-col items-center text-center p-6 rounded-xl
        bg-[#111118] border border-gray-800
        transition-all duration-500 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#3B82F6] flex items-center justify-center text-white font-bold text-sm">
        {index + 1}
      </div>

      <div className="mt-4 mb-4 text-[#3B82F6]">{step.icon}</div>

      <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>

      <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
    </div>
  );
}

function ConnectorLine({ isVisible }: { isVisible: boolean }) {
  return (
    <div className="hidden lg:flex items-center justify-center w-12 flex-shrink-0">
      <div
        className={`
          w-full h-0.5 bg-gradient-to-r from-[#3B82F6]/60 to-[#3B82F6]/20
          transition-all duration-1000 ease-out
          ${isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}
        `}
      />
    </div>
  );
}

export default function PipelineSection() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="relative py-24 px-4 bg-[#0a0a0f]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d1117] to-[#0a0a0f] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2
          className={`
            text-3xl sm:text-4xl font-bold text-center text-white mb-16
            transition-all duration-700 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          Từ ý tưởng đến deploy hoàn toàn tự động
        </h2>

        <div className="flex flex-col lg:flex-row lg:items-start justify-center gap-6 lg:gap-0">
          {steps.map((step, index) => (
            <div key={index} className="flex lg:flex-col items-center lg:items-center">
              <StepCard step={step} index={index} isVisible={isVisible} />
              {index < steps.length - 1 && <ConnectorLine isVisible={isVisible} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
