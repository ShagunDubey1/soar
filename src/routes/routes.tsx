import { Route, Routes } from 'react-router-dom';
import { Dashboard } from '../pages';

function PublicRoutes() {
  return (
    <Routes>
      <Route index path={'/'} element={<Dashboard />} />
      {/* <Route path={'/'} element={<Home />} index /> */}
    </Routes>
  );
}

export default PublicRoutes;
