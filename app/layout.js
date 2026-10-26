import Script from 'next/script'
import './globals.css'

export const metadata = {
  title: 'Kamalavasinii Swarna & Silks — Where Heritage Becomes Luxury',
  description: 'Exclusive customised jewellery in Gold, Silver, Clay, Wood, Brass & Bronze. GI Tagged Silk Sarees of South India and exquisite gemstones.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          src="https://weya-chat-agent.vercel.app/widget/v1/weya-widget.js"
          data-campaign="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXAiOiJ3ZXlhX3dpZGdldF9jYW1wYWlnbiIsImJhdGNoX2lkIjoiNmFkZWU4YTc1NmY3MmE2NzMxYzA0ZGM0Iiwib3JnX2lkIjoiNmEzZjY5Yjk1MWFkYmM3NjZmMzMxMzkxIiwiaWF0IjoxNzkyOTkzNDQ3fQ.ElX_Ij1w0kZ4NaIfFwIcjPwXK-CCSux8sdkkiT_sT70"
          data-api-url="https://dev.api.weya.live/ai"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
