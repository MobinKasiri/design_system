import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from "@mui/material";

interface MuiMenuOptions {
  defaultProps?: ComponentsProps["MuiMenu"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiMenu"];
  variants?: ComponentsVariants<Theme>["MuiMenu"];
}

export const MuiMenu = (theme: Theme): MuiMenuOptions => ({
  styleOverrides: {
    paper: {
      boxShadow: theme?.shadows?.[5],
      borderRadius: 8,
    },
  },
});
