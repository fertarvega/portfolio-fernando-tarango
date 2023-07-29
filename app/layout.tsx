
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeContextWrapper from './themeContextWrapper'
import { ThemeContext, themes  } from './ThemeContext';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import Link from 'next/link'
import Head from 'next/head'
import { Nav } from './components/Nav';

config.autoAddCss = false
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Fernando Tarango's Portfolio",
  description:
    'This is my portfolio, I hope to be able to share my experience with others.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {

  return (
    <html lang="en">
      <ThemeContextWrapper>
        <body className='container lg:max-w-screen-lg mx-auto px-5 selection:bg-orange-300'>
          <div className='max-w-sm mx-auto text-center mt-12 mb-12'>
            <Nav />
            </div>
          {children}
          </body>
      </ThemeContextWrapper>
    </html>
  )
}
