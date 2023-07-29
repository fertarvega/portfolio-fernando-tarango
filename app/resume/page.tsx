import Image from 'next/image'
import styles from './page.module.css'
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faFile, faFilePdf, faKeyboard } from '@fortawesome/free-regular-svg-icons'
import { Footer } from '../components/Footer';
import CustomIcon from '../components/CustomIcon';

interface CustomIconInterface {
  iconUrl: string;
  borderIconHeighSize: number;
  borderIconWidthSize: number;
  iconHeighSize: number;
}

export default function Resume() {

  const technologiesIcons = [
    {iconUrl: 'figma.svg', borderIconHeighSize: 20, borderIconWidthSize: 20, iconHeighSize: 8 },
    {iconUrl: 'react.svg', borderIconHeighSize: 20, borderIconWidthSize: 20, iconHeighSize: 8 },
    {iconUrl: 'mongodb.svg', borderIconHeighSize: 20, borderIconWidthSize: 20, iconHeighSize: 8 },
    {iconUrl: 'mysql.svg', borderIconHeighSize: 20, borderIconWidthSize: 20, iconHeighSize: 8 }
  ]
  
  return (
    <>
      <div className="text-3xl font-medium text-black mb-5 flex items-center">
        <FontAwesomeIcon icon={faFile} className='mr-3 text-orange-600' />
        <h3>Resume</h3>
      </div>
      <div className='mb-5 grid grid-cols-3'>
        <div className='col-span-2'>
          <p className='text-lg mb-5'>I consider myself a person who has no limits for learning. Learning about different things, cultures, technologies, people and ways of working is something I really enjoy. My goal is to become a frontend developer.</p>
          <a href='/CV - Fernando Tarango.pdf' download 
          className='px-7 py-2 text-md text-orange-600 font-semibold rounded-lg border border-orange-400 hover:text-white hover:bg-orange-400 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2'>
          <FontAwesomeIcon icon={faFilePdf} className='hover:text-white mr-2 text-orange-600' />
            Download CV</a>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="w-48">
            <img src="profile-pic.jpg" alt="..." className="shadow rounded-full align-middle border-none" />
          </div>
        </div>
      </div>
      <hr className='mt-14 mb-10' />
      <div className='mb-12'>
        <div className="text-3xl font-medium text-black mb-5 flex items-center">
          <FontAwesomeIcon icon={faClipboard} className='mr-3 text-orange-600' />
          <h3>Work Experience</h3>
        </div>
        <ol className="border-l border-neutral-300 dark:border-neutral-500">
          <li>
            <div className="flex-start flex items-center pt-3">
              <div
                className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300"></div>
              <p className="text-sm text-neutral-500">
                April 2022 - January 2023
              </p>
            </div>
            <div className="mb-6 ml-4 mt-2">
              <h4 className="mb-1.5 text-xl font-semibold">Software Developer at Secretary of Public Security of Chihuahua</h4>
              {/* <p className="mb-3 text-neutral-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                scelerisque diam non nisi semper, et elementum lorem ornare.
                Maecenas placerat facilisis mollis. Duis sagittis ligula in
                sodales vehicula.
              </p> */}
            </div>
          </li>
          <li>
            <div className="flex-start flex items-center pt-2">
              <div
                className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300"></div>
              <p className="text-sm text-neutral-500">
                May 2023 - July 2023
              </p>
            </div>
            <div className="mb-6 ml-4 mt-2">
              <h4 className="mb-1.5 text-xl font-semibold">Engineer Internship at ArkusNexus</h4>
              {/* <p className="mb-3 text-neutral-500">
                Libero expedita explicabo eius fugiat quia aspernatur autem
                laudantium error architecto recusandae natus sapiente sit nam
                eaque, consectetur porro molestiae ipsam an deleniti.
              </p> */}
            </div>
          </li>
          <li>
            <div className="flex-start flex items-center pt-2">
              <div
                className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300"></div>
              <p className="text-sm text-neutral-500">
                August 2021 - December 2021
              </p>
            </div>
            <div className="ml-4 mt-2 pb-5">
              <h4 className="mb-1.5 text-xl font-semibold">Technician Intership at &JON</h4>
              {/* <p className="mb-3 text-neutral-500">
                Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit
                natus! Eum corporis illum nihil officiis tempore. Excepturi illo
                natus libero sit doloremque, laborum molestias rerum pariatur quam
                ipsam necessitatibus incidunt, explicabo.
              </p> */}
            </div>
          </li>
        </ol>
      </div>
      <hr className='mt-14 mb-10' />
      <div>
        <div className="text-3xl font-medium text-black mb-5 flex items-center">
          <FontAwesomeIcon icon={faKeyboard} className='mr-3 text-orange-600' />
          <h3>Languages and Technologies</h3>
        </div>
        <div className="flex flex-wrap justify-center mt-10">
          {technologiesIcons.map(icon => 
            <CustomIcon 
              key={icon.iconUrl}
              iconUrl={icon.iconUrl} 
              borderIconWidthSize={icon.borderIconWidthSize} 
              borderIconHeighSize={icon.borderIconHeighSize} 
              iconHeighSize={icon.iconHeighSize}></CustomIcon>
          )}
        </div>
      </div>
      <Footer/>
    </>
  )
}
