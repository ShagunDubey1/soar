import React from 'react';

interface IconWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const PageWrapper: React.FC<IconWrapperProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className=" px-6 pt-1 pb-5 lg:py-6 xl:px-10 xl:py-6 flex relative w-full flex-col gap-6 bg-white md:bg-gray-50 "
    >
      {children}
    </div>
  );
};
