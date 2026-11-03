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
        <script src="https://weya-chat-agent.vercel.app/widget/v1/weya-widget.js" data-campaign="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXAiOiJ3ZXlhX3dpZGdldF9jYW1wYWlnbiIsImJhdGNoX2lkIjoiNmFlOTdkOTNjMjU1Y2QyYzIxNTU0NDZhIiwib3JnX2lkIjoiNmFhNzhmYzQwYmQ3YTQ5YzE3ZTEwMDQzIiwiaWF0IjoxNzkzNjg2OTMxfQ.wen6r_SX9Jv7ADwmQtpzkR4OWzTk_Yv3ZuK3mfd1fC0" data-api-url="https://api.weya.live/ai" async></script>
      </body>
    </html>
  )
}
