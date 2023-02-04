import "./tailwind-global.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='h-full bg-gray-100'>
      <body className='bg-pink-100'>{children}</body>
    </html>
  )
}
