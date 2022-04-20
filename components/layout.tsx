import React from 'react';

import NavBar from './navbar';
import ModelLoader from './modelLoader';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <NavBar />
      <div className="absolute top-0 h-[80vh] w-full">
        <ModelLoader />
      </div>
      <div className="relative z-10 min-h-[200vh]">{children}</div>
    </div>
  );
}

export default Layout;
