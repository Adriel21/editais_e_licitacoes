import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Inter } from 'next/font/google'
import './globals.css'
import {} from 'next/font/google';

config.autoAddCss = false

// const inter = Inter({ subsets: ['latin'] })




export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
      <link href = "https://fonts.cdnfonts.com/css/rawline" rel ="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
