import React from 'react';
import NextLink from 'next/link';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';

import {
  Theme,
  useThemeState,
  useThemeDispatch,
} from '../utils/theme-provider';

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
  console.log('render navbar');
  const theme = useThemeState();
  const toggleTheme = useThemeDispatch();

  return (
    <div className="flex justify-center">
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
            // null assert that theme is non-null
            toggleTheme(theme!);
          }}
        >
          {!theme ? (
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
