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
        <script src="https://weya-chat-agent.vercel.app/widget/v1/weya-widget.js" data-campaign="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXAiOiJ3ZXlhX3dpZGdldF9jYW1wYWlnbiIsImJhdGNoX2lkIjoiNmFkZWZhYzQ1NmY3MmE2NzMxYzA1MDUxIiwib3JnX2lkIjoiNmEzZjY5Yjk1MWFkYmM3NjZmMzMxMzkxIiwiaWF0IjoxNzkyOTk4MDg0fQ.DcVW0jFLfSqwSWCxyG4hQ6k-HM-f3e41J2SLwtLMzxQ" data-api-url="https://dev.api.weya.live/ai" async></script>
      </body>
    </html>
  )
}
