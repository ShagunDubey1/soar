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
      // className='bg-red-400'
      className={`fixed top-0 left-0 h-full bg-gray-800 text-white  flex-shrink-0 transition-all ease-in-out duration-500   z-10 ${
        isOpen ? ' -translate-x-full w-0 ' : 'translate-x-0 md:w-60 w-72'
      } md:translate-x-0 `}
    >
      <div
        className={`flex justify-between p-4   ease-in-out duration-100  ${isOpen ? ' -translate-x-[1500%] ' : 'translate-x-0 '}`}
      >
        <h2 className="text-2xl font-bold">Categories</h2>
        {/* <button onClick={toggleSidebar} className="text-2xl">
          &#10005;
        </button> */}
      </div>

      <ul
        className={`mt-8 space-y-4 px-4  ease-in-out duration-100 ${
          isOpen ? ' -translate-x-[1500%] ' : 'translate-x-0 '
        }`}
      >
        {sidebarItems.map((item) => (
          <li key={item.path}>
            <NavLink
              // onClick={() => handleCategoryClick(category.name.toLowerCase())}
              to={item.path}
              className={({ isActive }) =>
                `block px-4 p-2 rounded-md hover:bg-gray-700 ${
                  isActive ? 'bg-gray-700' : ''
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
