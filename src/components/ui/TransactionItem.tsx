import { Transaction } from '../../data';
import { CreditCard, DollarSign, HandCoins } from 'lucide-react';

interface TransactionItemProps {
  transaction: Transaction;
}
const TransactionIcon: React.FC<{ type: Transaction['type'] }> = ({ type }) => {
  const iconClasses = 'w-4 h-4';
  const baseClasses = 'p-2 rounded-full';

  switch (type) {
    case 'card':
      return (
        <div className={`${baseClasses} bg-yellow-50 `}>
          <CreditCard className={`${iconClasses} text-yellow-500`} />
        </div>
      );
    case 'paypal':
      return (
        <div className={`${baseClasses} bg-blue-50`}>
          <HandCoins className={`${iconClasses} text-blue-500`} />
        </div>
      );
    case 'transfer':
      return (
        <div className={`${baseClasses} bg-cyan-50`}>
          <DollarSign className={`${iconClasses} text-cyan-500`} />
        </div>
      );
  }
};

export const TransactionItem: React.FC<TransactionItemProps> = ({
  transaction,
}) => {
  const formatAmount = (amount: number) => {
    const prefix = amount >= 0 ? '+' : '-';
    return `${prefix}$${Math.abs(amount).toLocaleString()}`;
  };

  const amountColor =
    transaction.amount >= 0 ? 'text-emerald-500' : 'text-red-500';

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <TransactionIcon type={transaction.type} />
        <div>
          <h3 className="text-[0.9rem] font-medium font-lato text-text-primary">
            {transaction.title}
          </h3>
          <p className=" text-sm text-text-secondary">{transaction.date}</p>
        </div>
      </div>
      <span className={`font-medium text-[0.9rem] ${amountColor}`}>
        {formatAmount(transaction.amount)}
      </span>
    </div>
  );
};
