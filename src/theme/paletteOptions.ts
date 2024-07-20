import {
  PaletteColorOptions,
  PaletteMode,
  PaletteOptions,
} from "@mui/material";
import {
  error,
  gray,
  info,
  pink,
  primary,
  secondary,
  success,
  warning,
} from "../colors/colors";

declare module "@mui/material/styles" {
  interface Palette {
    gray: PaletteColorOptions;
    pink: PaletteColorOptions;
  }
  interface PaletteOptions {
    gray?: PaletteColorOptions;
    pink?: PaletteColorOptions;
  }
}
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    gray: true;
    pink: true;
  }
}

const light: PaletteOptions = {
  primary,
  secondary,
  gray,
  error,
  warning,
  info,
  success,
  pink,
};

const dark: PaletteOptions = light;

const paletteOptions: Record<PaletteMode, PaletteOptions> = {
  light,
  dark,
};

export default paletteOptions;
