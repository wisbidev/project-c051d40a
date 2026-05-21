"use client";

import { useEffect, useRef, useState } from "react";

const agents = [
  {
    name: "PM",
    fullName: "Product Manager",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    tasks: [
      "Thu thập và phân tích yêu cầu từ khách hàng",
      "Lập kế hoạch và ước lượng thời gian dự án",
      "Quản lý phạm vi và timeline",
      "Giao tiếp trực tiếp với khách hàng qua Telegram",
    ],
  },
  {
    name: "TL",
    fullName: "Tech Lead",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    tasks: [
      "Thiết kế kiến trúc hệ thống tổng thể",
      "Review và approve code trước khi merge",
      "Đưa ra quyết định kỹ thuật quan trọng",
      "Đảm bảo chất lượng và tính nhất quán của codebase",
    ],
  },
  {
    name: "Dev",
    fullName: "Developer",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    tasks: [
      "Viết code theo specification đã được duyệt",
      "Tạo và quản lý GitHub repository",
      "Xử lý logic nghiệp vụ và API endpoints",
      "Tuân thủ convention và best practices",
    ],
  },
  {
    name: "TestLead",
    fullName: "Test Lead",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    tasks: [
      "Xây dựng chiến lược và kế hoạch kiểm thử",
      "Viết unit tests và integration tests",
      "Kiểm tra chất lượng trước mỗi deploy",
      "Đảm bảo độ phủ test và regression testing",
    ],
  },
];

function AgentCard({ agent, isVisible, index }: { agent: typeof agents[0]; isVisible: boolean; index: number }) {
  return (
    <div
      className={`
        relative flex flex-col p-6 rounded-xl
        bg-[#111118] border border-gray-800
        transition-all duration-500 ease-out
        hover:border-blue-500/60 hover:shadow-[0_0_24px_rgba(59,130,246,0.25)]
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center gap-4 mb-5">
        <div className="text-[#3B82F6]">{agent.icon}</div>
        <div>
          <div className="text-xl font-bold text-white">{agent.name}</div>
          <div className="text-sm text-gray-400">{agent.fullName}</div>
        </div>
      </div>

      <ul className="flex flex-col gap-2">
        {agent.tasks.map((task, taskIndex) => (
          <li key={taskIndex} className="flex items-start gap-2 text-sm text-gray-300 leading-relaxed">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#3B82F6] flex-shrink-0" />
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AgentsSection() {
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
    <section id="agents" ref={sectionRef} className="relative py-24 px-4 bg-[#0a0a0f]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117] via-[#0a0a0f] to-[#0d1117] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2
          className={`
            text-3xl sm:text-4xl font-bold text-center text-white mb-4
            transition-all duration-700 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          Đội ngũ AI Agents
        </h2>
        <p
          className={`
            text-center text-gray-400 mb-16 max-w-2xl mx-auto
            transition-all duration-700 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
          style={{ transitionDelay: "100ms" }}
        >
          Bốn agent chuyên biệt làm việc cùng nhau để biến ý tưởng của bạn thành sản phẩm hoàn chỉnh.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent, index) => (
            <AgentCard key={agent.name} agent={agent} isVisible={isVisible} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
