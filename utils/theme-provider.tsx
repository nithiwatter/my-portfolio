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

const { Provider: ThemeStateProvider, useValue: useThemeState } =
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
  // lazy initialize this to the currently stored theme
  const [theme, setTheme] = React.useState<Theme>(readThemeFromLocalStorage);

  // logic for setting theme
  // 1) update local state
  // 2) update localStorage
  // 3) update tailwind theme via document
  // need to memoize this to otherwise the function identity would change every time - triggering rerenders
  const toggleTheme = React.useCallback((theme: Theme) => {
    setTheme(theme);
    localStorage.setItem(themeKey, theme);
  }, []);

  return (
    <ThemeStateProvider value={theme}>
      <ThemeDispatchProvider value={toggleTheme}>
        {children}
      </ThemeDispatchProvider>
    </ThemeStateProvider>
  );
}

export { ThemeProvider, useThemeState, useThemeDispatch };
