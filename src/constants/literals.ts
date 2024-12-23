import {
  CreditCardIcon,
  EconometricsIcon,
  GlyphIcon,
  HomeIcon,
  InvestmentIcon,
  LoanIcon,
  ServiceIcon,
  SettingsIcon,
  UserIcon,
} from '../assets/icons';

export type SideBarItems = {
  name: string;
  path: string;
  icon: string;
};

export const sidebarItems: SideBarItems[] = [
  { name: 'Dashboard', path: '/', icon: HomeIcon },
  { name: 'Transactions', path: '/', icon: GlyphIcon },
  { name: 'Accounts', path: '/', icon: UserIcon },
  { name: 'Investments', path: '/', icon: InvestmentIcon },
  { name: 'Credit Cards', path: '/', icon: CreditCardIcon },
  { name: 'Loans', path: '/', icon: LoanIcon },
  { name: 'Services', path: '/', icon: ServiceIcon },
  { name: 'My Privileges', path: '/', icon: EconometricsIcon },
  { name: 'Setting', path: '/', icon: SettingsIcon },
];
