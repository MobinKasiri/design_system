import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from "@mui/material";

interface MuiTextFieldProps {
  defaultProps?: ComponentsProps["MuiTextField"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiTextField"];
  variants?: ComponentsVariants<Theme>["MuiTextField"];
}

export const MuiTextField: MuiTextFieldProps = {
  defaultProps: {
    InputProps: {
      sx: { borderRadius: 2, width: 1 },
    },
  },
};
