import React from 'react';
import { ChipCardIcon } from '../../assets/icons';

interface CreditCardProps {
  balance: number;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
}

const CreditCard: React.FC<CreditCardProps> = ({
  balance,
  cardHolder,
  validThru,
  cardNumber,
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
        background: 'linear-gradient(107.38deg, #5B5A6F 2.61%, #000000 101.2%)',
      }}
      className="w-[50%] rounded-3xl  relative bg-gradient-to-br text-white shadow-xl font-lato "
    >
      <div className=" px-6 pt-6">
        {/* Card Chip Icon */}
        <div className="absolute top-6 right-6">
          <ChipCardIcon />
        </div>

        {/* Balance */}
        <div>
          <div className="text-white text-[0.6rem] ">Balance</div>
          <div className="text-base font-semibold">
            {formatBalance(balance)}
          </div>
        </div>

        {/* Card Details */}
        <div className=" mt-6">
          {/* Card Holder and Valid Date */}
          <div className="flex justify-between items-start">
            <div>
              <div className="text-gray-300 text-[0.6rem]">CARD HOLDER</div>
              <div className="text-sm font-semibold font-lato">
                {cardHolder}
              </div>
            </div>
            <div>
              <div className="text-gray-300 text-[0.6rem]">VALID THRU</div>
              <div className="text-sm font-semibold font-lato">{validThru}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Card Number */}
      <div
        className=" flex items-center justify-between mt-4 w-full px-6  py-4  rounded-b-3xl"
        style={{
          background: `
          linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%), 
          linear-gradient(107.38deg, #5B5A6F 2.61%, #000000 101.2%)
        `,
        }}
      >
        <div className="text-lg font-lato">{formatCardNumber(cardNumber)}</div>
        <div>cir</div>
      </div>
    </div>
  );
};

export default CreditCard;
