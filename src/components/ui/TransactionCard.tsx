import { transactions } from "../../data";
import { TransactionItem } from "./TransactionItem";

function TransactionCard() {
  return (
    <div className="w-full rounded-3xl relative bg-white p-6">
      <div className="space-y-3 overflow-y-auto">
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </div>
  );
}

export default TransactionCard;
