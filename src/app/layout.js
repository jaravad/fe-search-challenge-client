export const metadata = {
  title: 'Search Next App',
  description: 'This is a challenge made with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
