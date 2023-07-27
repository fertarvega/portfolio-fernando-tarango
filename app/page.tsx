'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-regular-svg-icons'

export default function Home() {
  return (
    <>
        <h1 className="text-5xl font-bold text-orange-500 text-center mb-12">
          Fernando Tarango
        </h1>
        <div className="text-3xl font-medium text-black mb-5">
        <FontAwesomeIcon icon={faFolder} className='mr-3' />
          Proyectos</div>
        <div className="mb-5 p-12 max-w-screen-lg min-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center">
          <div>
            <div className="text-xl font-medium text-black"></div>
            <p className="text-slate-500"></p>
          </div>
        </div> 
    </>
  )
}
