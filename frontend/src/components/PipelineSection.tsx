"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    title: "Gửi yêu cầu qua Telegram",
    description: "Nhắn tin cho AI team bằng ngôn ngữ tự nhiên. Mô tả ý tưởng sản phẩm hoặc tính năng bạn muốn xây dựng.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "AI phân tích và lên kế hoạch",
    description: "PM agent phân tích yêu cầu, xác định phạm vi và tạo kế hoạch chi tiết cho dự án.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: "Tự động viết code",
    description: "Dev agent viết code, TestLead agent viết unit test, TL agent review và merge code.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Build và kiểm thử tự động",
    description: "CI/CD pipeline tự động chạy build, chạy test và kiểm tra chất lượng code.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
      </svg>
    ),
    title: "Deploy lên server",
    description: "Sau khi tất cả tests pass, code được deploy tự động lên production server.",
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
