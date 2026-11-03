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
        <script src="https://weya-chat-agent.vercel.app/widget/v1/weya-widget.js" data-campaign="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXAiOiJ3ZXlhX3dpZGdldF9jYW1wYWlnbiIsImJhdGNoX2lkIjoiNmFlOTc4NGMyNjgwNzgwYTY0ZTcxZTgzIiwib3JnX2lkIjoiNjgxMzQ0Yzg1YjMyY2JhMDJiZjkyN2UxIiwiaWF0IjoxNzkzNjg1NTgwfQ.koeYxHRSjyMHtpSpfn6xxwyF8lfG1UC8TxW1fRYs6wY" data-api-url="https://api.weya.live/ai" async></script>
      </body>
    </html>
  )
}
