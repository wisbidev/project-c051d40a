import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "aiteam — AI Team. Không cần thuê dev.",
  description: "AI platform tự động build phần mềm qua Telegram. Giao tiếp với AI team, nhận source code và deploy tự động.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
