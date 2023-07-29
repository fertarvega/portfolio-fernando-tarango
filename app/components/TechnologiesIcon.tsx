import React from 'react';

interface TechnologiesIcon {
  iconUrl: string;
  borderIconHeighSize: number;
  borderIconWidthSize: number;
  iconHeighSize: number;
}

const TechnologiesIcon: React.FC<TechnologiesIcon> = ({ iconUrl, borderIconWidthSize, borderIconHeighSize, iconHeighSize }) => {
  return (
    <>
      <div className={`w-${borderIconWidthSize} h-${borderIconHeighSize} rounded-full shadow mx-2 flex items-center justify-center hover:bg-slate-100 transition duration-300 ease-in-out hover:scale-125`}>
        <img src={iconUrl} alt="..." className={`h-${iconHeighSize} w-max align-middle border-none`} />
      </div>
    </>
  );
};

export default TechnologiesIcon;