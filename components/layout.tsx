import React from 'react';
import dynamic from 'next/dynamic';

import NavBar from './navbar';

const ModelLoader = dynamic(() => import('./modelLoader'), {
  loading: () => null,
  ssr: false,
});

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="pb-12">
      <NavBar />
      <div className="model-background absolute top-0 z-0 w-full">
        <ModelLoader />
      </div>
      {children}
    </div>
  );
}

export default Layout;
