import { sidebarItems } from '../../constants';
import { Logo } from '../../assets/icons';
import { SideBarItem } from '../ui';
import { useMediaQuery } from 'react-responsive';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ setIsOpen, isOpen }: SidebarProps) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={` bg-white text-black  flex-shrink-0 transition-all ease-in-out duration-500 z-10 border-r border-["#E6EFF5"] ${isMobile ? (isOpen ? ' translate-x-0 md:w-52 xl:w-60 w-72 z-50 absolute h-full' : 'hidden') : isOpen ? ' -translate-x-full w-0' : 'translate-x-0 md:w-52 xl:w-60 w-72'}`}
    >
      <div
        className={`flex justify-between pl-8 py-8 xl:py-7 ease-in-out duration-100 
          ${isMobile ? (isOpen ? ' ttranslate-x-0' : 'hidden') : isOpen ? '  -translate-x-[1500%]' : 'translate-x-0'} 
          `}
      >
        <h2 className="flex items-center gap-4 text-xl xl:text-2xl font-extrabold font-inter">
          <img src={Logo} alt={'Logo'} className=" w-5 h-7" />
          Soar Task
        </h2>
        <button
          onClick={toggleSidebar}
          className=" md:hidden text-2xl text-primary font-bold pr-8 ease-in-out duration-100"
        >
          &#10005;
        </button>
      </div>

      <ul
        className={` space-y-1 xl:space-y-2  ease-in-out duration-100 
          ${isMobile ? (isOpen ? ' ttranslate-x-0' : 'hidden') : isOpen ? '  -translate-x-[1500%]' : 'translate-x-0'} 
          `}
      >
        {sidebarItems.map((item, index) => (
          <li
            key={index}
            className={` ease-in-out duration-100   ${isMobile ? (isOpen ? ' ttranslate-x-0' : 'hidden') : isOpen ? '  -translate-x-[1500%]' : 'translate-x-0'} `}
          >
            <SideBarItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
