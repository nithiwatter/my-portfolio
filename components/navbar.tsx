import React from 'react';
import NextLink from 'next/link';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';

import { Theme } from '../utils/theme-provider';

type LinkProps = {
  children: React.ReactNode;
  href: string;
};

function Link({ children, href }: LinkProps) {
  return (
    <NextLink href={href}>
      <a className="underlined after:underlined-after after:hover:scale-x-100 after:focus:scale-100">
        {children}
      </a>
    </NextLink>
  );
}

function Navbar() {
  const [mounted, setMounted] = React.useState(false);
  const { theme: chosenTheme, systemTheme, setTheme } = useTheme();

  const theme = chosenTheme === 'system' ? systemTheme : chosenTheme;

  // When mounted on client, now we can show the UI
  React.useEffect(() => setMounted(true), []);

  return (
    <div className="sticky top-0 z-20 flex justify-center bg-slate-100/80 backdrop-blur dark:bg-slate-800/80">
      <div className="flex w-1/2 items-center justify-between p-4">
        <ul className="flex space-x-8">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Works</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>

        <button
          onClick={() => {
            setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light);
          }}
        >
          {!mounted ? (
            <div className="m-2 h-8 w-8" />
          ) : theme === Theme.Light ? (
            <SunIcon className="m-2 h-8 w-8 text-white" />
          ) : (
            <MoonIcon className="m-2 h-8 w-8 text-slate-800" />
          )}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
