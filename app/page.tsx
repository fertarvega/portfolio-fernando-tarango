'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-regular-svg-icons'
import { Footer } from './components/Footer'

export default function Home() {
  return (
    <>
        <h1 className="text-5xl font-bold text-orange-500 text-center mb-12">
          Fernando Tarango
        </h1>
        <div className="text-3xl font-medium text-black mb-5 flex items-center">
        <FontAwesomeIcon icon={faFolder} className='mr-3' />
          Projects</div>
        <div className='mt-12 mb-12 grid lg:grid-cols-2 sm:justify-items-center'>
          <div className="mb-5 w-80 bg-white rounded-lg shadow-lg ">
            <img className='rounded-t-lg' src="carpool.jpg" alt="" />
            <div className='p-5'>
              <div className="text-xl font-medium text-black">Carpool</div>
              <p className="text-slate-500">Carpool is a mobile application where students can be matched with other students for carpooling.</p>
              <div className="flex flex-wrap justify-center mt-10">
                <div className="w-10 h-10 rounded-full shadow mx-2 flex items-center justify-center hover:bg-slate-100 transition duration-300 ease-in-out hover:scale-125">
                  <img src="figma.svg" alt="..." className="h-8 w-max align-middle border-none" />
                </div>
                <div className="w-10 h-10 rounded-full shadow mx-2 flex items-center justify-center hover:bg-slate-100 transition duration-300 ease-in-out hover:scale-125">
                  <img src="react.svg" alt="..." className="h-8 w-max align-middle border-none" />
                </div>
                <div className="w-10 h-10 rounded-full shadow mx-2 flex items-center justify-center hover:bg-slate-100 transition duration-300 ease-in-out hover:scale-125">
                  <img src="mongodb.svg" alt="..." className="h-8 w-max align-middle border-none" />
                </div>
                <div className="w-10 h-10 rounded-full shadow mx-2 flex items-center justify-center hover:bg-slate-100 transition duration-300 ease-in-out hover:scale-125">
                  <img src="mysql.svg" alt="..." className="h-7 w-max align-middle border-none" />
                </div>
              </div>
            </div>
          </div> 
          <div className="mb-5 w-80 bg-white rounded-lg shadow-lg ">
            <div>
              <img className='rounded-t-lg' src="sentinel.jpg" alt="" />
              <div className='p-5'>
                <div className="text-xl font-medium text-black">Sentinel</div>
                <p className="text-slate-500">Sentinel is a tower defense video game where you have to defend your tower from enemies using mages and their elemental combinations.</p>
                <div className="flex flex-wrap justify-center mt-4">
                  <div className="w-10 h-10 rounded-full shadow mx-2 flex items-center justify-center hover:bg-slate-100 transition duration-300 ease-in-out hover:scale-125">
                    <img src="unity.svg" alt="..." className="h-8 pr-1 w-max align-middle border-none" />
                  </div>
                  <div className="w-10 h-10 rounded-full shadow mx-2 flex items-center justify-center hover:bg-slate-100 transition duration-300 ease-in-out hover:scale-125">
                    <img src="c4.svg" alt="..." className="h-8 w-max align-middle border-none" />
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div>
        <Footer/>
    </>
  )
}
