import { Route, Routes } from 'react-router-dom';
import { Dashboard } from '../pages';
import { MainLayout } from '../layouts';

function PublicRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index path={'/'} element={<Dashboard />} />
      </Route>
      {/* <Route path={'/'} element={<Home />} index /> */}
    </Routes>
  );
}

export default PublicRoutes;
