import React from 'react';

interface CustomIcon {
  iconUrl: string;
  borderIconHeighSize: number;
  borderIconWidthSize: number;
  iconHeighSize: number;
  padding?: string;
}

const CustomIcon: React.FC<CustomIcon> = ({ iconUrl, borderIconWidthSize, borderIconHeighSize, iconHeighSize, padding }) => {
  return (
    <>
      <div className={`w-${borderIconWidthSize} h-${borderIconHeighSize} rounded-full shadow mx-2 flex items-center justify-center hover:bg-slate-100 transition duration-300 ease-in-out hover:scale-125`}>
        <img src={iconUrl} alt="..." className={`h-${iconHeighSize} ${padding} w-max align-middle border-none`} />
      </div>
    </>
  );
};

export default CustomIcon;
