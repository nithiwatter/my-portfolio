import React from 'react';
import NextLink from 'next/link';
import { SunIcon } from '@heroicons/react/outline';

type LinkProps = {
  children: React.ReactNode;
  href: string;
};

function Link({ children, href }: LinkProps) {
  return (
    <NextLink href={href}>
      <a className="underlined after:underlined-after text-slate-600 hover:text-black after:hover:scale-x-100 focus:text-black after:focus:scale-100">
        {children}
      </a>
    </NextLink>
  );
}

function Navbar() {
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

        <button className="rounded-md bg-slate-600 p-2 hover:bg-slate-800 focus:ring-2 focus:ring-offset-2">
          <SunIcon className="h-8 w-8 text-white" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
