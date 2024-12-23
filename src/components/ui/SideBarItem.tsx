import { NavLink } from 'react-router-dom';
import { SideBarItems } from '../../constants';

export const SideBarItem = ({ item }: { item: SideBarItems }) => {
  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        `flex items-center text-base font-medium gap-6 ease-in-out duration-300 group ${isActive ? 'text-primary' : 'text-text-grey'}`
      }
    >
      {({ isActive }) => (
        <>
          <div
            className={`h-12 mr-1 w-1 rounded-tr-[10px] rounded-br-[10px] transition-all ease-in-out duration-300 group-hover:text-primary ${
              isActive ? 'bg-primary' : 'bg-transparent'
            }`}
          ></div>

          <div className="flex items-center gap-5">
            {/* Icon with hover effect */}
            {/* @ts-ignore */}
            <item.icon
              // @ts-ignore
              className={`w-5 h-5 xl:w-6 xl:h-6 transition-all ease-in-out duration-300 group-hover:text-primary ${
                isActive ? 'text-primary' : 'text-text-grey'
              }`}
            />

            {/* Name with hover effect */}
            <span
              className={`transition-all ease-in-out duration-300 group-hover:text-primary ${
                isActive ? 'text-primary' : 'text-text-grey'
              }`}
            >
              {item.name}
            </span>
          </div>
        </>
      )}
    </NavLink>
  );
};
