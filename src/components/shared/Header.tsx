import { BellDot, Settings } from 'lucide-react';
import { SearchBar } from '../ui';

export const Header = () => {
  return (
    <header className="bg-white flex items-center justify-between py-5 xl:py-7 px-9 border-b border-['#E6EFF5'] ">
      <div>
        <h2 className=" font-semibold text-text-primary text-xl">Overview</h2>
      </div>

      <div className=" flex items-center gap-6">
        <SearchBar />
        <div className=" flex items-center justify-center rounded-full p-3 bg-[#F5F7FA]">
          <Settings className=" h-4 w-4 xl:h-5 xl:w-5 text-[#718EBF]" />
        </div>
        <div className=" flex items-center justify-center rounded-full p-3 bg-[#F5F7FA]">
          <BellDot className=" h-4 w-4 xl:h-5 xl:w-5 text-secondary" />
        </div>
      </div>
    </header>
  );
};
