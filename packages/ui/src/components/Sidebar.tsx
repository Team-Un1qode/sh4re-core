import { Outlet } from 'react-router-dom';
import { SidebarLayout } from './Sidebar/style';

const Sidebar = () => (
  <div style={{ display: 'flex' }}>
    <SidebarLayout />
    <main style={{ flex: 1, paddingLeft: '18rem', height: '100vh' }}>
      <Outlet />
    </main>
  </div>
);

export default Sidebar;
