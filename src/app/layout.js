export const metadata = {
  title: 'Search Next App',
  description: 'This is a challenge made with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
