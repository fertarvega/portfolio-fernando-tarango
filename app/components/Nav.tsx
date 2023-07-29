'use client'
import Link from "next/link";
import { ThemeContext, themes  } from '../ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import { useState } from "react";

export function Nav(){
    const [darkMode, setDarkMode] = useState(true);

    return(
        <>
        <div className='max-w-sm mx-auto text-center mt-12 mb-12'>
        <Link href="/">
          <button className='ml-5 mr-5 px-4 py-1 text-md text-orange-600 font-semibold rounded-lg border border-orange-200 hover:text-white hover:bg-orange-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2'>Home</button>
        </Link>
        <Link href="/resume">
          <button className='ml-5 mr-5 px-4 py-1 text-md text-orange-600 font-semibold rounded-lg border border-orange-200 hover:text-white hover:bg-orange-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2'>Resume</button>
        </Link>
        
        <ThemeContext.Consumer>
          {({ changeTheme }) => (
            <>
              <button
              className='ml-5 mr-5 px-4 py-1 text-md text-orange-600 font-semibold rounded-lg border border-orange-200 hover:text-white hover:bg-orange-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2'
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
        </>

    )
}