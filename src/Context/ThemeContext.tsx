import React, { createContext, Dispatch, SetStateAction } from "react";

export type Theme = "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  setTheme: () => {},
});

// You can optionally provide a default context value here if needed
// const defaultContextValue: ThemeContextValue = { theme: "light", setTheme: () => {} };

// ThemeContext.Provider can be used in other components where you want to provide the context
// Example: <ThemeContext.Provider value={defaultContextValue}>{children}</ThemeContext.Provider>
