"use client";

import { useEffect, useRef, useState } from "react";

const agents = [
  {
    name: "PM",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    tasks: [
      "Phân tích yêu cầu từ Telegram",
      "Viết SRS và user stories",
      "Quản lý scope và timeline",
      "Điều phối các agent khác",
    ],
  },
  {
    name: "TL",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    tasks: [
      "Thiết kế kiến trúc hệ thống",
      "Review code và merge PR",
      "Đảm bảo chất lượng code",
      "Ra quyết định kỹ thuật",
    ],
  },
  {
    name: "Dev",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    tasks: [
      "Viết code theo spec",
      "Tạo và quản lý GitHub repo",
      "Auto deploy lên server",
      "Fix bugs và optimize",
    ],
  },
  {
    name: "TestLead",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    tasks: [
      "Viết unit và integration tests",
      "Kiểm tra chất lượng code",
      "Đảm bảo coverage ≥ 80%",
      "Report và track bugs",
    ],
  },
];

function AgentCard({ agent, isVisible, delay }: { agent: typeof agents[0]; isVisible: boolean; delay: number }) {
  return (
    <div
      className={`
        relative p-6 rounded-xl
        bg-[#111118] border border-gray-800
        transition-all duration-500 ease-out
        hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 text-[#3B82F6]">{agent.icon}</div>
        <h3 className="text-xl font-bold text-white mb-4">{agent.name}</h3>
        <ul className="space-y-2 w-full">
          {agent.tasks.map((task, index) => (
            <li key={index} className="text-sm text-gray-400 flex items-start gap-2">
              <span className="text-[#3B82F6] mt-1">•</span>
              <span>{task}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function AIAgentsSection() {
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
    <section id="ai-agents" ref={sectionRef} className="relative py-24 px-4 bg-[#0a0a0f]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d1117] to-[#0a0a0f] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2
          className={`
            text-3xl sm:text-4xl font-bold text-center text-white mb-4
            transition-all duration-700 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          AI Agents
        </h2>
        <p
          className={`
            text-center text-gray-400 mb-16 max-w-2xl mx-auto
            transition-all duration-700 ease-out delay-100
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          Đội ngũ AI tự động hoàn thành mọi công việc từ yêu cầu đến deploy
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent, index) => (
            <AgentCard key={agent.name} agent={agent} isVisible={isVisible} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
