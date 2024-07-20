import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from "@mui/material";

interface MuiMenuOptions {
  defaultProps?: ComponentsProps["MuiMenu"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiMenu"];
  variants?: ComponentsVariants<Theme>["MuiMenu"];
}

export const MuiMenu = (theme: Theme): MuiMenuOptions => ({
  styleOverrides: {
    paper: {
      boxShadow: theme?.shadows?.[1],
      borderRadius: 12,
    },
    list: {
      padding: 16,
    },
    root: {
      background: "rgba(0,0,0,0.1)",
    },
  },
});
