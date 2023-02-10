import "./tailwind-global.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='Spanish' className='h-full bg-gray-100'>
      <body className='bg-pink-100'>
        <main>{children}</main>
      </body>
    </html>
  )
}
