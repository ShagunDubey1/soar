import { Img1, Img2, Img3 } from '../assets/images';
import { User } from '../components/ui/QuickTransferCard';

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
  {
    id: '4',
    type: 'transfer',
    title: 'Jemi Wilson',
    date: '21 January 2021',
    amount: 5400,
  },
];

export const users: User[] = [
  { name: 'Livia Bator', role: 'CEO', image: Img1 },
  { name: 'Randy Press', role: 'Director', image: Img2 },
  { name: 'Workman', role: 'Designer', image: Img3 },
];

export const mockCards = [
  {
    id: 1,
    balance: 5756,
    cardHolder: 'Eddy Cusuma',
    validThru: '12/22',
    cardNumber: '3778000000001234',
    isLight: false,
  },
  {
    id: 2,
    balance: 2499,
    cardHolder: 'Sophia Lee',
    validThru: '03/25',
    cardNumber: '3782000000005678',
    isLight: true,
  },
  {
    id: 3,
    balance: 15400,
    cardHolder: 'John Doe',
    validThru: '08/24',
    cardNumber: '3778000000009876',
    isLight: false,
  },
];
