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
  { name: 'Transactions', path: '/transactions', icon: GlyphIcon },
  { name: 'Accounts', path: '/accounts', icon: UserIcon },
  { name: 'Investments', path: '/investments', icon: InvestmentIcon },
  { name: 'Credit Cards', path: '/creditCards', icon: CreditCardIcon },
  { name: 'Loans', path: '/loans', icon: LoanIcon },
  { name: 'Services', path: '/services', icon: ServiceIcon },
  { name: 'My Privileges', path: '/my-privileges', icon: EconometricsIcon },
  { name: 'Setting', path: '/settings', icon: SettingsIcon },
];
