import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/index';
import { SidebarLayout } from '@sh4re/ui';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SidebarLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
