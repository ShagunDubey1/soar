import { Route, Routes } from 'react-router-dom';
import { Accounts, CreditCards, Dashboard, Investments, Loans, MyPrivileges, Services, Settings, Transactions } from '../pages';
import { MainLayout } from '../layouts';

function PublicRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index path={'/'} element={<Dashboard />} />
        <Route path={'/transactions'} element={<Transactions />} />
        <Route path={'/accounts'} element={<Accounts />} />
        <Route path={'/investments'} element={<Investments />} />
        <Route path={'/creditCards'} element={<CreditCards />} />
        <Route path={'/loans'} element={<Loans />} />
        <Route path={'/services'} element={<Services />} />
        <Route path={'/my-privileges'} element={<MyPrivileges />} />
        <Route path={'/settings'} element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default PublicRoutes;
