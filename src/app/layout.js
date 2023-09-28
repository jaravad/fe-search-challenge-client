import NavBar from '../components/NavBar'

export const metadata = {
  title: 'Especies invasoras de Colombia 🇨🇴',
  description: 'This is a challenge made with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
