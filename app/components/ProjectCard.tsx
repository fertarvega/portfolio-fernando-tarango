import React from 'react';
import CustomIcon from './CustomIcon';

interface ProjectCard {
    projectInfo: {
        image: string;
        title: string;
        description: string;
        icons: Array<any>;
    }
}

const ProjectCard: React.FC<ProjectCard> = ({ projectInfo }) => {
  return (
    <>
      <div className="mb-5 w-80 bg-white rounded-lg shadow-lg ">
        <div>
        <img className='rounded-t-lg w-80 h-56' src={`${projectInfo.image}`} alt="" />
        <div className='p-5'>
            <div className="text-xl font-medium text-black pb-2"><h3>{projectInfo.title}</h3></div>
            <p className="text-slate-500">{projectInfo.description}</p>
            <div className="flex flex-wrap justify-center mt-5">
            {projectInfo.icons.map((icon) => 
                icon.iconUrl == 'unity.svg' ? 
                <CustomIcon 
                key={icon.iconUrl} 
                iconUrl={icon.iconUrl} 
                borderIconWidthSize={icon.borderIconWidthSize} 
                borderIconHeighSize={icon.borderIconHeighSize} 
                iconHeighSize={icon.iconHeighSize}
                padding='pr-1'></CustomIcon> :
                <CustomIcon 
                key={icon.iconUrl} 
                iconUrl={icon.iconUrl} 
                borderIconWidthSize={icon.borderIconWidthSize} 
                borderIconHeighSize={icon.borderIconHeighSize} 
                iconHeighSize={icon.iconHeighSize}></CustomIcon>
            )}
            </div>
        </div>
        </div>
      </div> 
    </>
  );
};

export default ProjectCard;
