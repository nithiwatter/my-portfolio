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
  faEye,
  faEyeSlash,
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
// cannot import reach CSS here - it uses attribute selectors, which
// have the same speficity as tailwind selectors - these would get overridden
// as they were applied first in the global styles in _app.tsx

import { useCheckMounted } from '../utils/hooks';
import {
  AnimationState,
  useAnimationState,
  useAnimationDispatch,
} from '../utils/animation-provider';
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
            'after:underlined-after after:hover:scale-x-100 after:focus:scale-x-100':
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
      className="underlined after:underlined-after after:hover:scale-x-100 after:focus:scale-x-100"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

function NavMenu({ router }: NavMenuProps) {
  return (
    <Menu>
      <MenuButton
        title="Navigation"
        className="base-button mr-2 flex h-12 w-12 items-center justify-center p-2 text-white dark:text-slate-800 sm:hidden"
      >
        <FontAwesomeIcon icon={faBars} size="lg" fixedWidth />
      </MenuButton>
      <MenuList className="menu-list">
        <MenuItem onSelect={() => router.push('/')}>
          <FontAwesomeIcon
            icon={faHome}
            size="1x"
            className="mr-2 text-slate-500"
            fixedWidth
          />
          Home
        </MenuItem>
        <MenuItem onSelect={() => router.push('/works')}>
          <FontAwesomeIcon
            icon={faBriefcase}
            size="1x"
            className="mr-2 text-slate-500"
            fixedWidth
          />
          Works
        </MenuItem>
        <MenuItem onSelect={() => router.push('/posts')}>
          <FontAwesomeIcon
            icon={faKeyboard}
            size="1x"
            className="mr-2 text-slate-500"
            fixedWidth
          />
          Posts
        </MenuItem>
        <MenuLink
          as="a"
          href="https://github.com/nithiwatter/my-portfolio"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithubAlt}
            size="1x"
            className="mr-2 text-slate-500"
            fixedWidth
          />
          Source
        </MenuLink>
      </MenuList>
    </Menu>
  );
}

function Navbar() {
  // When mounted on client, now we can show the UI
  const { mounted } = useCheckMounted();
  const toggleAnimationState = useAnimationDispatch();
  const router = useRouter();
  const { theme: chosenTheme, systemTheme, setTheme } = useTheme();
  const animationState = useAnimationState();

  const theme = chosenTheme === 'system' ? systemTheme : chosenTheme;

  return (
    <nav className="fixed top-0 z-20 flex w-full justify-center bg-slate-100/80 backdrop-blur dark:bg-slate-800/80">
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
          <li className="space-x-2">
            <Link
              href="https://github.com/nithiwatter/my-portfolio"
              active={false}
              noNextLink
            >
              Source
            </Link>
            <FontAwesomeIcon
              icon={faGithubAlt}
              size="lg"
              className="icon"
              fixedWidth
            />
          </li>
        </ul>

        <NavMenu router={router} />

        <div className="flex gap-2">
          <button
            title="Toggle animation"
            type="button"
            onClick={toggleAnimationState}
            className="flex h-12 w-12 items-center justify-center p-2 text-white dark:text-slate-800"
          >
            {!mounted ? null : animationState === AnimationState.On ? (
              <FontAwesomeIcon icon={faEyeSlash} size="lg" fixedWidth />
            ) : (
              <FontAwesomeIcon icon={faEye} size="lg" fixedWidth />
            )}
          </button>

          <button
            title="Toggle theme"
            type="button"
            onClick={() => {
              setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light);
            }}
            className="flex h-12 w-12 items-center justify-center p-2"
          >
            {!mounted ? null : theme === Theme.Light ? (
              <FontAwesomeIcon
                icon={faMoon}
                size="lg"
                className="text-white"
                fixedWidth
              />
            ) : (
              <FontAwesomeIcon
                icon={faSun}
                size="lg"
                className="text-slate-800"
                fixedWidth
              />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
