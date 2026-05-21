export default function FinalCTASection() {
  return (
    <section className="relative py-24 px-4 bg-[#0a0a0f] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d1b2a]/50 to-[#0a0a0f] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#3B82F6] opacity-[0.08] blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-[#3B82F6] opacity-[0.05] blur-[80px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
          Bắt đầu build sản phẩm với AI team
        </h2>

        <p className="text-base sm:text-lg text-gray-400 max-w-lg mx-auto leading-relaxed">
          Không cần thuê dev. Không cần quản lý team. Chỉ cần một tin nhắn trên Telegram — AI team sẽ lo mọi thứ từ ý tưởng đến sản phẩm của bạn.
        </p>

        <a
          href="https://t.me/aiteam_bot"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-[#3B82F6] text-white font-semibold text-base hover:bg-[#2563EB] active:bg-[#1d4ed8] transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2 focus:ring-offset-[#0a0a0f]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
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
