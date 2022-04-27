import React from 'react';

type HeroWrapperProps = {
  children: React.ReactNode;
};

function HeroWrapper({ children }: HeroWrapperProps) {
  return (
    <div className="pointer-events-none relative z-10 flex justify-center pt-20">
      {children}
    </div>
  );
}

export default HeroWrapper;
