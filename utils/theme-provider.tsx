import React from 'react';

import { createSimpleContext } from './providers';

const themeKey = 'portfolio-theme';

enum Theme {
  Dark = 'dark',
  Light = 'light',
}

type ThemeProviderProps = {
  children: React.ReactNode;
};

const { Provider: ThemeStateProvider, useOptionalValue: useThemeState } =
  createSimpleContext<Theme>('ThemeState');
const { Provider: ThemeDispatchProvider, useValue: useThemeDispatch } =
  createSimpleContext<(theme: Theme) => void>('ThemeDispatch');

function readThemeFromLocalStorage() {
  const theme = localStorage.getItem(themeKey);

  if (!theme) {
    return Theme.Light;
  }

  // can be sure that every read/write to localStorage is of type Theme
  return theme as Theme;
}

function ThemeProvider({ children }: ThemeProviderProps) {
  // start with null - will later read from localStorage
  const [theme, setTheme] = React.useState<Theme | null>(null);

  React.useEffect(() => {
    console.log('reading from localStorage');
    const theme = readThemeFromLocalStorage();
    setTheme(theme);
  }, []);

  // logic for setting theme
  // 1) update local state
  // 2) update localStorage
  // 3) update tailwind theme via document
  // need to memoize this to otherwise the function identity would change every time - triggering rerenders
  const toggleTheme = React.useCallback((theme: Theme) => {
    const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light;
    setTheme(newTheme);
    localStorage.setItem(themeKey, newTheme);

    // update the html document according to tailwind
    const root = window.document.documentElement;
    root.classList.remove(theme);
    root.classList.add(newTheme);
  }, []);

  return (
    <ThemeStateProvider value={theme}>
      <ThemeDispatchProvider value={toggleTheme}>
        {children}
      </ThemeDispatchProvider>
    </ThemeStateProvider>
  );
}

export { Theme, ThemeProvider, useThemeState, useThemeDispatch };
