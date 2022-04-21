import React from 'react';
import NextLink from 'next/link';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';

import { Theme } from '../utils/theme-provider';

type LinkProps = {
  children: React.ReactNode;
  href: string;
  noNextLink?: boolean;
};

function Link({ children, href, noNextLink }: LinkProps) {
  if (!noNextLink) {
    return (
      <NextLink href={href}>
        <a className="underlined after:underlined-after after:hover:scale-x-100 after:focus:scale-100">
          {children}
        </a>
      </NextLink>
    );
  }

  return (
    <a
      className="underlined after:underlined-after after:hover:scale-x-100 after:focus:scale-100"
      href={href}
    >
      {children}
    </a>
  );
}

function Navbar() {
  const [mounted, setMounted] = React.useState(false);
  const { theme: chosenTheme, systemTheme, setTheme } = useTheme();

  const theme = chosenTheme === 'system' ? systemTheme : chosenTheme;

  // When mounted on client, now we can show the UI
  React.useEffect(() => setMounted(true), []);

  return (
    <nav className="fixed top-0 z-10 flex w-full justify-center bg-slate-100/80 backdrop-blur dark:bg-slate-800/80">
      <div className="flex w-1/2 items-center justify-between p-4">
        <ul className="flex space-x-8">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/works">Works</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li className="flex items-end space-x-2">
            <Link href="https://github.com/nithiwatter/my-portfolio" noNextLink>
              Source
            </Link>
            <FontAwesomeIcon icon={faGithubAlt} size="lg" />
          </li>
        </ul>

        <button
          title="Toggle theme"
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
    </nav>
  );
}

export default Navbar;
