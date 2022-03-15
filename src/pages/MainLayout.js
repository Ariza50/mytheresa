import { Outlet } from 'react-router-dom';
import MainNavbar from '../components/main-navbar/MainNavbar.component';

const MainLayout = () => {

  return(
    <>
      <MainNavbar />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
