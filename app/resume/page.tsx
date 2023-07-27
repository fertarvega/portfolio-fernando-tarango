import Image from 'next/image'
import styles from './page.module.css'
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-regular-svg-icons'

export default function Home() {

  return (
    <>
      <div className="text-3xl font-medium text-black mb-5">
        <FontAwesomeIcon icon={faFile} className='mr-3' />
        Resume
      </div>
      <div className='mb-5'>
        <p className='text-lg mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod enim deleniti id, corporis ullam perferendis asperiores! Hic laborum placeat quas. Harum veritatis exercitationem molestias voluptatibus dolorem facilis similique soluta quidem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nostrum, voluptate doloremque quibusdam eum, sapiente excepturi, consequatur ipsum pariatur ad eligendi deserunt id. Corporis asperiores aut voluptatem deserunt mollitia deleniti.</p>
        <a href='/CV - Fernando Tarango.pdf' 
        download 
        className='px-7 py-2 text-md text-purple-600 font-semibold rounded-lg border border-purple-200 hover:text-white hover:bg-purple-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'>Descargar CV</a>
      </div>
    </>
  )
}
