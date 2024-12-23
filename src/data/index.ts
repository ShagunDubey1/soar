export interface Transaction {
  id: string;
  type: 'card' | 'paypal' | 'transfer';
  title: string;
  date: string;
  amount: number;
}

export const transactions: Transaction[] = [
  {
    id: '1',
    type: 'card',
    title: 'Deposit from my Card',
    date: '28 January 2021',
    amount: -850,
  },
  {
    id: '2',
    type: 'paypal',
    title: 'Deposit Paypal',
    date: '25 January 2021',
    amount: 2500,
  },
  {
    id: '3',
    type: 'transfer',
    title: 'Jemi Wilson',
    date: '21 January 2021',
    amount: 5400,
  },
];
