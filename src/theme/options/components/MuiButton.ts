import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from "@mui/material";

interface MuiButtonOptions {
  defaultProps?: ComponentsProps["MuiButton"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiButton"];
  variants?: ComponentsVariants<Theme>["MuiButton"];
}

export const MuiButton: MuiButtonOptions = {
  defaultProps: {
    variant: "contained",
    size: "medium",
  },
  styleOverrides: {
    root: { borderRadius: "8px", whiteSpace: "nowrap", dir: "ltr" },
    sizeLarge: {
      padding: "10px 20px",
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "28px",
    },
    sizeMedium: {
      padding: "8px 16px",
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "24px",
    },
    sizeSmall: {
      padding: "4px 10px",
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: "20px",
    },
  },
};
