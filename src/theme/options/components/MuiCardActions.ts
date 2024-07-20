import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from "@mui/material";

interface MuiCardActionsOptions {
  defaultProps?: ComponentsProps["MuiCardActions"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiCardActions"];
  variants?: ComponentsVariants<Theme>["MuiCardActions"];
}

export const MuiCardActions: MuiCardActionsOptions = {
  styleOverrides: {
    root: { padding: 0, margin: 0 },
  },
};
