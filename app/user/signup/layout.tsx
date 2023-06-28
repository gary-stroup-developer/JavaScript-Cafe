
export const metadata = {
    title: 'JavaScript Cafe',
    description: 'Gary Stroup',
}

export default function RootLayout({ children }) {
    return (
        <html lang= "en" >
        <body>

        { children }
        </body>
        </html>
  )
}