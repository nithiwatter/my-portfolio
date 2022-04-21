import React from 'react';
import clsx from 'clsx';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import type { NextRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faBriefcase,
  faHome,
  faKeyboard,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import {
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  MenuLink,
} from '@reach/menu-button';

import { Theme } from '../utils/theme-provider';

type LinkProps = {
  children: React.ReactNode;
  href: string;
  active?: boolean;
  noNextLink?: boolean;
};

type NavMenuProps = {
  router: NextRouter;
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

function NavMenu({ router }: NavMenuProps) {
  return (
    <Menu>
      <MenuButton title="Navigation" className="base-button mr-2 sm:hidden">
        <div className="m-2 flex h-8 w-8 items-center justify-center text-white dark:text-slate-800">
          <FontAwesomeIcon icon={faBars} size="lg" />
        </div>
      </MenuButton>
      <MenuList className="menu-list">
        <MenuItem onSelect={() => router.push('/')}>
          <FontAwesomeIcon
            icon={faHome}
            size="1x"
            className="mr-2 text-slate-500"
          />
          Home
        </MenuItem>
        <MenuItem onSelect={() => router.push('/works')}>
          <FontAwesomeIcon
            icon={faBriefcase}
            size="1x"
            className="mr-2 text-slate-500"
          />
          Works
        </MenuItem>
        <MenuItem onSelect={() => router.push('/posts')}>
          <FontAwesomeIcon
            icon={faKeyboard}
            size="1x"
            className="mr-2 text-slate-500"
          />
          Posts
        </MenuItem>
        <MenuLink as="a" href="https://github.com/nithiwatter/my-portfolio">
          <FontAwesomeIcon
            icon={faGithubAlt}
            size="1x"
            className="mr-2 text-slate-500"
          />
          Source
        </MenuLink>
      </MenuList>
    </Menu>
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
      <div className="flex w-full items-center justify-end p-4 sm:justify-between lg:w-1/2">
        <ul className="hidden space-x-8 sm:flex">
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

        <NavMenu router={router} />

        <button
          title="Toggle theme"
          onClick={() => {
            setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light);
          }}
        >
          {!mounted ? (
            <div className="m-2 h-8 w-8" />
          ) : theme === Theme.Light ? (
            <div className="m-2 flex h-8 w-8 items-center justify-center text-white">
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
