import './globals.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-black max-w-[1440px]'>
      <body>{children}</body>
    </html>
  )
}
