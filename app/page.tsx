import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-regular-svg-icons'
import { Footer } from './components/Footer'
import ProjectCard from './components/ProjectCard'

export default function Home() {

  const carpoolProject = {
    title: 'Carpool',
    description: 'Carpool is a mobile application where students can be matched with other students for carpooling.',
    image: 'carpool.jpg',
    icons: [
      {iconUrl: 'figma.svg', borderIconHeighSize: 10, borderIconWidthSize: 10, iconHeighSize: 8 },
      {iconUrl: 'react.svg', borderIconHeighSize: 10, borderIconWidthSize: 10, iconHeighSize: 8 },
      {iconUrl: 'mongodb.svg', borderIconHeighSize: 10, borderIconWidthSize: 10, iconHeighSize: 8 },
      {iconUrl: 'mysql.svg', borderIconHeighSize: 10, borderIconWidthSize: 10, iconHeighSize: 8 }
    ]
  }

  const sentinelProject = {
    title: 'Sentinel',
    description: 'Sentinel is a tower defense video game where you have to defend your tower from enemies using mages and their elemental combinations.',
    image: 'sentinel.jpg',
    icons : [
      {iconUrl: 'unity.svg', borderIconHeighSize: 10, borderIconWidthSize: 10, iconHeighSize: 8 },
      {iconUrl: 'c4.svg', borderIconHeighSize: 10, borderIconWidthSize: 10, iconHeighSize: 8 }
    ]
  }

  return (
    <>
      <h1 className="text-5xl font-bold text-orange-500 text-center mb-6">
        Fernando Tarango
      </h1>
      <h3 className="text-xl font-semibold text-center mb-12">Software Engineer</h3>
      <div className="text-3xl font-medium text-black mb-5 flex items-center">
        <FontAwesomeIcon icon={faFolder} className='mr-3 text-orange-600' />
        <h3>Projects</h3>
      </div>
      <div className='mt-12 mb-12 grid lg:grid-cols-2 sm:justify-items-center'>
        <ProjectCard projectInfo={carpoolProject}></ProjectCard>
        <ProjectCard projectInfo={sentinelProject}></ProjectCard>
      </div>
      <Footer/>
    </>
  )
}
