import React from 'react';
import clsx from 'clsx';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';

import { Theme } from '../utils/theme-provider';

type LinkProps = {
  children: React.ReactNode;
  href: string;
  active?: boolean;
  noNextLink?: boolean;
};

function Link({ children, href, active, noNextLink }: LinkProps) {
  if (!noNextLink) {
    return (
      <NextLink href={href}>
        <a
          className={clsx('underlined', {
            'after:underlined-after after:hover:scale-x-100 after:focus:scale-100':
              !active,
            'active after:active-after': active,
          })}
        >
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
  const router = useRouter();
  const { theme: chosenTheme, systemTheme, setTheme } = useTheme();

  const theme = chosenTheme === 'system' ? systemTheme : chosenTheme;

  // When mounted on client, now we can show the UI
  React.useEffect(() => setMounted(true), []);

  return (
    <nav className="fixed top-0 z-10 flex w-full justify-center bg-slate-100/80 backdrop-blur dark:bg-slate-800/80">
      <div className="flex w-1/2 items-center justify-between p-4">
        <ul className="flex space-x-8">
          <li>
            <Link href="/" active={router.asPath === '/'}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/works" active={router.asPath === '/works'}>
              Works
            </Link>
          </li>
          <li>
            <Link href="/posts" active={router.asPath === '/posts'}>
              Posts
            </Link>
          </li>
          <li className="flex items-end space-x-2">
            <Link
              href="https://github.com/nithiwatter/my-portfolio"
              active={false}
              noNextLink
            >
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
            <div className="m-2 flex h-8 w-8 items-center justify-center text-white ">
              <FontAwesomeIcon icon={faMoon} size="lg" />
            </div>
          ) : (
            <div className="m-2 flex h-8 w-8 items-center justify-center text-slate-800">
              <FontAwesomeIcon icon={faSun} size="lg" />
            </div>
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
