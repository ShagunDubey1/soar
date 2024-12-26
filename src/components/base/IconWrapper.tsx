import React from 'react';

interface IconWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const IconWrapper: React.FC<IconWrapperProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={`flex items-center justify-center rounded-full p-3 bg-[#F5F7FA] group hover:bg-slate-100 cursor-pointer ${className || ''}`}
    >
      {children}
    </div>
  );
};
