import { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e: any) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', query);
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
          <Search className=" h-4 w-4 xl:h-5 xl:w-5 text-[#8BA3CB]" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-gray-50 rounded-full py-2 xl:py-3 pl-12 pr-4 text-sm xl:text-base text-[#8BA3CB] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:bg-white transition-colors"
          placeholder="Search for something"
        />
      </div>
    </form>
  );
};

export default SearchBar;
