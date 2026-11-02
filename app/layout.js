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
        <script src="https://weya-chat-agent.vercel.app/widget/v1/weya-widget.js" data-campaign="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXAiOiJ3ZXlhX3dpZGdldF9jYW1wYWlnbiIsImJhdGNoX2lkIjoiNmFlODZkMzA2ODg1MjM0MWM1NzdhZGJmIiwib3JnX2lkIjoiNjgxMzQ0Yzg1YjMyY2JhMDJiZjkyN2UxIiwiaWF0IjoxNzkzNjE3MjAwfQ.xBNjKVhpZuAcjC9wly6rcEryG2EBV78MCQk-RztKLJ0" data-api-url="https://api.weya.live/ai" async></script>
      </body>
    </html>
  )
}
