import React from 'react';
import GlobalHeader from './globalheader';
import { Outlet } from 'react-router-dom';


const Layout: React.FC = () => {
  return (
    <>
      <header>
        <GlobalHeader />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;