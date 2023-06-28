import './styles/globals.css';
import './styles/styles.css';
import { Inter } from 'next/font/google'
import NavBar from "./components/navbar";
const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'JavaScript Cafe',
  description: 'Gary Stroup',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
