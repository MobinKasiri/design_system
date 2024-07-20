import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from "@mui/material";
import { fontName } from "../typography";

interface MuiLinkOptions {
  defaultProps?: ComponentsProps["MuiLink"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiLink"];
  variants?: ComponentsVariants<Theme>["MuiLink"];
}

export const MuiLink: MuiLinkOptions = {
  styleOverrides: {
    root: { textDecoration: "none", fontFamily: fontName },
  },
};
