import { Open_Sans, Dancing_Script, Crimson_Text } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' })
const dancingScript = Dancing_Script({ subsets: ['latin'], variable: '--font-dancing-script' })
const crimsonText = Crimson_Text({ subsets: ['latin'], variable: '--font-crimson-text', weight: '400' })

export const metadata = {
  title: {
    default: "Jackson's Bistro",
    template: "%s | Jackson's Bistro"
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${openSans.variable} ${dancingScript.variable} ${crimsonText.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
