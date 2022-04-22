import React from 'react';

function useCheckMounted() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  return { mounted };
}

export { useCheckMounted };
