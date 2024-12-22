import { Outlet } from 'react-router-dom';
import { Header, Sidebar } from '../../components/shared';
import { useState } from 'react';

export const MainLayout = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className=" w-full relative flex  min-h-screen bg-gray-100">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={`flex flex-1 flex-col overflow-hidden`}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};
