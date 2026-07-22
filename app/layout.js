import './globals.css'

export const metadata = {
  title: 'Task Manager',
  description: 'A modern task manager built with Next.js'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
