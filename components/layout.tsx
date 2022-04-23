import React from 'react';
import Head from 'next/head';
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
    <>
      <Head>
        <meta name="description" content="Nithiwat's homepage" />
        <title>Nithiwat Seesillapachai (Ter) - Portfolio Website</title>
      </Head>
      <div className="pb-12">
        <NavBar />
        <div className="model-background absolute top-0 z-0 w-full">
          <ModelLoader />
        </div>
        {children}
      </div>
    </>
  );
}

export default Layout;
