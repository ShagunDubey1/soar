import React from 'react';

interface IconWrapperProps {
  children: React.ReactNode;
}

export const IconWrapper: React.FC<IconWrapperProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center rounded-full p-3 bg-[#F5F7FA] group hover:bg-slate-100 cursor-pointer">
      {children}
    </div>
  );
};
