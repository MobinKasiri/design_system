import { SimplePaletteColorOptions } from "@mui/material";
import { ColorPartial } from "@mui/material/styles/createPalette";

type paletteColorOptions = SimplePaletteColorOptions & ColorPartial;

export const primary: paletteColorOptions = {
  main: "#E66D24",
  100: "#F7C39E",
  200: "#F5A46D",
  300: "#F2863E",
  400: "#E66D24",
  500: "#BF5626",
  600: "#8F401F",
  700: "#5E2D0F",
};

export const secondary: paletteColorOptions = {
  main: "#183A67",
  100: "#A2B4CC",
  200: "#7390B2",
  300: "#476D9C",
  400: "#13457A",
  500: "#183A67",
  600: "#0D2A4C",
  700: "#0C1C33",
};

export const gray: paletteColorOptions = {
  main: "#888888",
  100: "#F2F2F2",
  200: "#E1E1E1",
  300: "#CACACA",
  400: "#ACACAC",
  500: "#888888",
  600: "#5D5D5D",
  700: "#414141",
};

export const pink: paletteColorOptions = {
  main: "#AD2474",
  50: "#FAE5F1",
  100: "#F4BFDD",
  200: "#EF95C7",
  300: "#ED6AB0",
  400: "#EC4A9C",
  500: "#ED2988",
  600: "#DB2782",
  700: "#C3267A",
  800: "#AD2474",
  900: "#862068",
  contrastText: "#fff",
};

export const error: paletteColorOptions = {
  main: "#D12D2E",
};

export const warning: paletteColorOptions = {
  main: "#EE6A20",
};

export const info: paletteColorOptions = {
  main: "#2A68B1",
};

export const success: paletteColorOptions = {
  main: "#317D3C",
};
