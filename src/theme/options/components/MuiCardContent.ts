import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from "@mui/material";

interface MuiCardContentOptions {
  defaultProps?: ComponentsProps["MuiCardContent"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiCardContent"];
  variants?: ComponentsVariants<Theme>["MuiCardContent"];
}

export const MuiCardContent: MuiCardContentOptions = {
  styleOverrides: {
    root: { padding: 0, ":last-child": { paddingBottom: 0 } },
  },
};
