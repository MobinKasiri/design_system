import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from "@mui/material";
import { gray, primary } from "../../../colors/colors";

interface MuiCardOptions {
  defaultProps?: ComponentsProps["MuiCard"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiCard"];
  variants?: ComponentsVariants<Theme>["MuiCard"];
}

export const MuiCard: MuiCardOptions = {
  styleOverrides: {
    root: {
      borderRadius: 16,
      padding: 16,
      boxShadow: "none",
      border: "solid",
      borderWidth: "1px",
      borderColor: gray["300"],
      backdropFilter: "blur(2px)",
      background: "rgba(255,255,255,0.3)",
      ":hover": {
        borderColor: primary["300"],
      },
      transition: "all 0.1s",
    },
  },
};
