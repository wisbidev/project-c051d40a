import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'aiteam - AI Team. Không cần thuê dev.',
  description: 'Nền tảng AI tự động xây dựng phần mềm qua Telegram. Thuê PM, TL, Dev, TestLead AI thay vì đội ngũ dev truyền thống.',
  openGraph: {
    title: 'aiteam - AI Team. Không cần thuê dev.',
    description: 'Nền tảng AI tự động xây dựng phần mềm qua Telegram.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className="bg-[#0a0a0f] text-white antialiased">{children}</body>
    </html>
  )
}
