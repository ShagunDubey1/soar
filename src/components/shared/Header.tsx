import { BellDot, Menu, Settings } from 'lucide-react';
import { SearchBar } from '../ui';
import { IconWrapper } from '../base';
import { ProfileImg } from '../../assets/images';

interface HeaderProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header = ({ setIsOpen, isOpen }: HeaderProps) => {
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white flex flex-col md:flex-row items-center justify-between py-4 xl:py-7 xs:px-6 px-9 md:border-b md:border-['#E6EFF5'] ">
      <div className=" w-full flex items-center justify-between ">
        <Menu onClick={toggleSidebar} className=" inline-block md:hidden w-9 h-9 text-text-primary mt-1" />
        <div>
          <h2 className=" font-semibold text-text-primary text-xl">Overview</h2>
        </div>

        <div className=" flex items-center gap-6">
          <div className=" hidden md:inline-block">
            <SearchBar />
          </div>

          <IconWrapper className=" hidden md:inline-block">
            <Settings className=" h-4 w-4 xl:h-5 xl:w-5 text-[#718EBF] group-hover:text-blue-900" />
          </IconWrapper>

          <IconWrapper className=" hidden md:inline-block">
            <BellDot className=" h-4 w-4 xl:h-5 xl:w-5 text-secondary group-hover:text-blue-700" />
          </IconWrapper>

          {/* profile */}
          <div className=" w-10 h-10 md:w-14 md:h-14 cursor-pointer rounded-full flex justify-center items-center">
            <img
              src={ProfileImg}
              alt="profile image"
              className=" w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* responsive for mobileview */}
      <div className=" md:hidden w-full mt-5 md:mt-0">
        <SearchBar />
      </div>
    </header>
  );
};
