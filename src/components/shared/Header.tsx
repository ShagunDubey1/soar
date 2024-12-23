import { BellDot, Settings } from 'lucide-react';
import { SearchBar } from '../ui';
import { IconWrapper } from '../base';
import { ProfileImg } from '../../assets/images';

export const Header = () => {
  return (
    <header className="bg-white flex items-center justify-between py-4 xl:py-7 px-9 border-b border-['#E6EFF5'] ">
      <div>
        <h2 className=" font-semibold text-text-primary text-xl">Overview</h2>
      </div>

      <div className=" flex items-center gap-6">
        <SearchBar />

        <IconWrapper>
          <Settings className=" h-4 w-4 xl:h-5 xl:w-5 text-[#718EBF] group-hover:text-blue-900" />
        </IconWrapper>

        <IconWrapper>
          <BellDot className=" h-4 w-4 xl:h-5 xl:w-5 text-secondary group-hover:text-blue-700" />
        </IconWrapper>

        {/* profile */}
        <div className=' w-15 h-15 cursor-pointer rounded-full flex justify-center items-center'>
          <img src={ProfileImg} alt="profile image" className=' w-full h-full object-contain' />
        </div>
      </div>
    </header>
  );
};
