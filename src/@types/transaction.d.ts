export interface Transaction {
  id: string;
  type: 'card' | 'paypal' | 'transfer';
  title: string;
  date: string;
  amount: number;
}

export interface CreditCard {
  id: number;
  balance: number;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
  isLight: boolean;
}
