import { NavLink } from 'react-router-dom';
import { sidebarItems } from '../../../constants';
import { HomeIcon, Logo } from '../../../assets/icons';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ setIsOpen, isOpen }: SidebarProps) => {
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-white text-black  flex-shrink-0 transition-all ease-in-out duration-500   z-10 ${
        isOpen ? ' -translate-x-full w-0 ' : 'translate-x-0 md:w-60 w-72'
      } md:translate-x-0 `}
    >
      <div
        className={`flex justify-between px-10 py-7  ease-in-out duration-100  ${isOpen ? ' -translate-x-[1500%] ' : 'translate-x-0 '}`}
      >
        <h2 className="flex items-center gap-4 text-2xl font-extrabold font-inter">
          <img src={Logo} alt={'Logo'} className=" w-5 h-7" />
          Soar Task
        </h2>
        {/* <button onClick={toggleSidebar} className="text-2xl">
          &#10005;
        </button> */}
      </div>

      <ul
        className={`mt-2 space-y-2  ease-in-out duration-100 ${
          isOpen ? ' -translate-x-[1500%] ' : 'translate-x-0 '
        }`}
      >
        {sidebarItems.map((item, index) => (
          <li key={index}>
            <NavLink
              // onClick={() => handleCategoryClick(category.name.toLowerCase())}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center text-base font-medium gap-6  ${
                  isActive ? ' text-primary' : ' text-text-grey'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div
                    className={`h-12 mr-1 w-1 rounded-tr-[10px] rounded-br-[10px] ${
                      isActive ? 'bg-primary' : 'bg-transparent'
                    }`}
                  ></div>

                  {/* @ts-ignore */}
                  <item.icon className="w-6 h-6"
                    style={{ color: isActive ? 'red' : '#232323' }} 
                  />

                  {item.name}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
