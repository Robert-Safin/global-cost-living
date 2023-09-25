import './globals.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-black '>
      <body className='max-w-[1440px] mx-auto'>{children}</body>
    </html>
  )
}
