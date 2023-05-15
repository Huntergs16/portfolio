import './globals.css'

export const metadata = {
  title: 'Hunter Portfolio',
  description: 'All of his work, experience, projects, and skills.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
