import React, { useMemo } from "react";
import { ThemeProvider } from "@mui/material";
import { theme as getTheme } from "../theme";
import { useDesignSystemStore } from "../store";

interface themeRegistryProps {
  children: React.ReactNode;
}

const ThemeRegistry = ({ children }: themeRegistryProps) => {
  const { mode } = useDesignSystemStore();
  const theme = useMemo(() => getTheme(mode), [mode]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeRegistry;
