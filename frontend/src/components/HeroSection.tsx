export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-24 bg-[#0a0a0f] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d1b2a] to-[#0a0a0f] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#3B82F6] opacity-10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-[0_0_30px_rgba(59,130,246,0.4)]">
          AI Team. Không cần thuê dev.
        </h1>

        <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
          Giao tiếp với AI team qua Telegram — lên ý tưởng, nhận source code và deploy tự động. Không cần viết code, không cần quản lý dev.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#start"
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#3B82F6] text-white font-semibold text-base hover:bg-[#2563EB] active:bg-[#1d4ed8] transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2 focus:ring-offset-[#0a0a0f]"
          >
            Bắt đầu ngay
          </a>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto px-8 py-4 rounded-lg border border-[#3B82F6] text-[#3B82F6] font-semibold text-base hover:bg-[#3B82F6]/10 active:bg-[#3B82F6]/20 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2 focus:ring-offset-[#0a0a0f]"
          >
            Xem cách hoạt động
          </a>
        </div>
      </div>
    </section>
  );
}
