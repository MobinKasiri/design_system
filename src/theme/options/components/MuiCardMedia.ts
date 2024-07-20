import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from "@mui/material";

interface MuiCardMediaOptions {
  defaultProps?: ComponentsProps["MuiCardMedia"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiCardMedia"];
  variants?: ComponentsVariants<Theme>["MuiCardMedia"];
}

export const MuiCardMedia: MuiCardMediaOptions = {
  styleOverrides: {
    root: { borderRadius: 8 },
  },
};
