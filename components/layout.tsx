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
      <div className="model-background absolute top-0 w-full">
        <ModelLoader />
      </div>
      <div className="relative z-10 min-h-[200vh]">{children}</div>
    </div>
  );
}

export default Layout;
