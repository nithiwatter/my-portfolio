import React from 'react';

import NavBar from './navbar';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <NavBar />
      <div>{children}</div>
    </div>
  );
}

export default Layout;
