import { ChevronRight, Send } from 'lucide-react';
import React, { useState } from 'react';

export interface User {
  name: string;
  role: string;
  image: string;
}

interface Props {
  users: User[];
}

const QuickTransferCard: React.FC<Props> = ({ users }) => {
  const [amount, setAmount] = useState<string>('525.50');
  const [selectedUser, setSelectedUser] = useState<number>(0);

  return (
    <div className="p-6 bg-white rounded-3xl ">
      <div className="flex items-center justify-center gap-7 mb-8">
        {users.map((user, index) => (
          <div
            key={user.name}
            onClick={() => setSelectedUser(index)}
            className={`flex flex-col items-center cursor-pointer`}
          >
            <div className="w-16 h-16 mb-2 overflow-hidden rounded-full">
              <img
                src={user.image}
                alt={user.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3
              className={`text-sm 2xl:text-base text-primary ${selectedUser === index ? 'font-bold' : 'font-normal'}`}
            >
              {user.name}
            </h3>
            <p
              className={`text-xs 2xl:text-sm text-text-secondary ${selectedUser === index ? 'font-bold' : 'font-normal'}`}
            >
              {user.role}
            </p>
          </div>
        ))}
        <button className=" p-3 rounded-full bg-white flex items-center justify-center group hover:bg-slate-100 cursor-pointer shadow-custom">
          <ChevronRight className=" text-text-secondary group-hover:text-text-primary w-5 h-5" />
        </button>
      </div>

      <div className="flex items-center gap-6  mt-8">
        <p className="text-sm text-text-secondary">Write Amount</p>

        <div className="flex-1 flex items-center justify-end relative w-full">
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full  py-3 pl-7 mt-2 bg-[#EDF1F7] rounded-full text-text-secondary placeholder:text-sm text-sm placeholder:text-text-secondary"
          />
          <button className=" absolute bottom-0 right-0 ml-4 px-6 py-3 bg-black text-white rounded-full flex items-center text-sm gap-1 font-medium group">
            Send
            <Send className=" text-white w-5 h-5 group-hover:rotate-45 ease-in-out transition duration-300 " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickTransferCard;
