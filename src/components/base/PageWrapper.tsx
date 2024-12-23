import React from 'react';

interface IconWrapperProps {
  children: React.ReactNode;
}

export const PageWrapper: React.FC<IconWrapperProps> = ({ children }) => {
  return (
    <div className=" px-8 py-5 xl:px-10 xl:py-6 flex relative w-full flex-col">
      {children}
    </div>
  );
};
