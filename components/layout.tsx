import React from 'react';

import NavBar from './navbar';
import ModelLoader from './modelLoader';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="pb-12">
      <NavBar />
      <div className="model-background absolute top-0 w-full">
        <ModelLoader />
      </div>
      {children}
    </div>
  );
}

export default Layout;
