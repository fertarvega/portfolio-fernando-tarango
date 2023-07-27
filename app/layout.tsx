'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeContextWrapper from './themeContextWrapper'
import { useState } from 'react';
import { ThemeContext, themes  } from './ThemeContext';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import Link from 'next/link'

config.autoAddCss = false
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fernando Tarango Portfolio',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <html lang="en">
      <ThemeContextWrapper>
        <body className='container max-w-screen-lg mx-auto px-5'>
          <div className='max-w-sm mx-auto text-center mt-12 mb-12'>
            <Link href="/">
              <button className='ml-5 mr-5 px-4 py-1 text-md text-purple-600 font-semibold rounded-lg border border-purple-200 hover:text-white hover:bg-purple-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'>Inicio</button>
            </Link>
            <Link href="/resume">
              <button className='ml-5 mr-5 px-4 py-1 text-md text-purple-600 font-semibold rounded-lg border border-purple-200 hover:text-white hover:bg-purple-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'>Resume</button>
            </Link>
            
            <ThemeContext.Consumer>
              {({ changeTheme }) => (
                <>
                  <button
                  className='ml-5 mr-5 px-4 py-1 text-md text-purple-600 font-semibold rounded-lg border border-purple-200 hover:text-white hover:bg-purple-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'
                  color="link"
                  onClick={() => {
                    setDarkMode(!darkMode);
                    changeTheme(darkMode ? themes.light : themes.dark);
                  }}
                >
                  {darkMode ? 
                  <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />
                }
                </button>
                
                </>
              )}
              </ThemeContext.Consumer>
            </div>
          {children}
          </body>
      </ThemeContextWrapper>
    </html>
  )
}
