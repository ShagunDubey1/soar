import { NavLink } from 'react-router-dom';
import { sidebarItems } from '../../../constants';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ setIsOpen, isOpen }: SidebarProps) => {
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  console.log('isOpen');

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-white text-black  flex-shrink-0 transition-all ease-in-out duration-500   z-10 ${
        isOpen ? ' -translate-x-full w-0 ' : 'translate-x-0 md:w-60 w-72'
      } md:translate-x-0 `}
    >
      <div
        className={`flex justify-between p-4   ease-in-out duration-100  ${isOpen ? ' -translate-x-[1500%] ' : 'translate-x-0 '}`}
      >
        <h2 className="text-2xl font-bold font-inter">Soar Task</h2>
        {/* <button onClick={toggleSidebar} className="text-2xl">
          &#10005;
        </button> */}
      </div>

      <ul
        className={`mt-2 space-y-4  ease-in-out duration-100 ${
          isOpen ? ' -translate-x-[1500%] ' : 'translate-x-0 '
        }`}
      >
        {sidebarItems.map((item, index) => (
          <li className=" flex gap-8 items-center" key={index}>
            <div className="h-12 bg-primary w-1 rounded-tr-[10px] rounded-br-[10px]"></div>
            <NavLink
              // onClick={() => handleCategoryClick(category.name.toLowerCase())}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center text-[18px] font-medium gap-6 py-4 hover:bg-gray-700 text-white  ${
                  isActive ? ' text-primary' : ''
                }`
              }
            >
              <img src={item.icon} alt={`${item.name} icon`} className=' w-6 h-6'/>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
