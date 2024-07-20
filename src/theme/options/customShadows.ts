import { Shadows, Theme } from "@mui/material";

export const customShadows = (theme: Theme): Shadows =>
  [...theme?.shadows.map((shadow) => shadow)] as Shadows;
