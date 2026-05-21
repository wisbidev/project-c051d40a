export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight glow-effect">
          AI Team.<br className="sm:hidden" /> Không cần thuê dev.
        </h1>
        
        <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
          Nền tảng AI tự động xây dựng phần mềm hoàn chỉnh. 
          PM, TL, Dev, TestLead — tất cả đều là AI, hoạt động 24/7 qua Telegram.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#start"
            className="px-8 py-4 bg-[#3B82F6] text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors touch-manipulation min-h-[48px] flex items-center justify-center"
          >
            Bắt đầu ngay
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-4 border-2 border-[#3B82F6] text-[#3B82F6] font-semibold rounded-lg hover:bg-[#3B82F6]/10 transition-colors touch-manipulation min-h-[48px] flex items-center justify-center"
          >
            Xem cách hoạt động
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#3B82F6]/30 to-transparent" />
    </section>
  )
}
