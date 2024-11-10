import { PaletteMode, PaletteOptions } from "@mui/material";
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
