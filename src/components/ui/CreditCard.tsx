import React from 'react';
import {
  ChipCardDarkIcon,
  ChipCardIcon,
  MasterCardDarkIcon,
  MasterCardIcon,
} from '../../assets/icons';

interface CreditCardProps {
  balance: number;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
  isLight?: boolean;
}

const CreditCard: React.FC<CreditCardProps> = ({
  balance,
  cardHolder,
  validThru,
  cardNumber,
  isLight = false,
}) => {
  // Format card number to show only last 4 digits
  const formatCardNumber = (number: string) => {
    const lastFour = number.slice(-4);
    return `3778 **** **** ${lastFour}`;
  };

  // Format balance to USD
  const formatBalance = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <div
      style={{
        background: isLight
          ? 'white'
          : 'linear-gradient(107.38deg, #5B5A6F 2.61%, #000000 101.2%)',
      }}
      className={` min-w-[265px] sm:w-full lg:w-[50%] rounded-3xl relative bg-gradient-to-br border border-[#DFEAF2] font-lato ${
        isLight ? 'text-black' : 'text-white'
      }`}
    >
      <div className="px-6 pt-6">
        {/* Card Chip Icon */}
        <div className="absolute top-6 right-6">
          {isLight ? (
            // @ts-ignore
            <ChipCardDarkIcon className="w-7 h-7" />
          ) : (
            // @ts-ignore
            <ChipCardIcon className="w-7 h-7" />
          )}
        </div>

        {/* Balance */}
        <div>
          <div
            className={`${isLight ? ' text-text-secondary' : 'text-white'} text-[0.6rem]`}
          >
            Balance
          </div>
          <div
            className={`text-base font-semibold ${isLight ? 'text-text-primary' : ''}`}
          >
            {formatBalance(balance)}
          </div>
        </div>

        {/* Card Details */}
        <div className="mt-5 xl:mt-6">
          {/* Card Holder and Valid Date */}
          <div className="flex gap-12 items-start">
            <div>
              <div
                className={`${isLight ? 'text-text-secondary' : 'text-gray-300'} text-[0.6rem]`}
              >
                CARD HOLDER
              </div>
              <div
                className={`text-sm font-semibold font-lato ${isLight ? 'text-text-primary' : ''}`}
              >
                {cardHolder}
              </div>
            </div>
            <div>
              <div
                className={`${isLight ? 'text-text-secondary' : 'text-gray-300'} text-[0.6rem]`}
              >
                VALID THRU
              </div>
              <div
                className={`text-sm font-semibold font-lato ${isLight ? 'text-text-primary' : ''}`}
              >
                {validThru}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card Number */}
      <div
        className={`flex items-center justify-between mt-5 xl:mt-6 w-full px-6 py-4 rounded-b-3xl ${
          isLight ? 'bg-gray-100  border-t border-[#DFEAF2]' : ''
        }`}
        style={{
          background: isLight
            ? 'rgba(255, 255, 255, 0.9)'
            : `linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%), 
               linear-gradient(107.38deg, #5B5A6F 2.61%, #000000 101.2%)`,
        }}
      >
        <div
          className={`text-base xl:text-lg font-lato ${isLight ? 'text-text-primary' : ''}`}
        >
          {formatCardNumber(cardNumber)}
        </div>
        {isLight ? (
          // @ts-ignore
          <MasterCardDarkIcon className="w-10" />
        ) : (
          // @ts-ignore
          <MasterCardIcon className="w-10" />
        )}
      </div>
    </div>
  );
};

export default CreditCard;
