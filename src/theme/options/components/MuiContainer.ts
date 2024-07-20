import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from "@mui/material";

interface MuiCardContainerOptions {
  defaultProps?: ComponentsProps["MuiContainer"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiContainer"];
  variants?: ComponentsVariants<Theme>["MuiContainer"];
}

export const MuiContainer = (theme: Theme): MuiCardContainerOptions => ({
  styleOverrides: {
    maxWidthLg: {
      paddingLeft: "16px",
      paddingRight: "16px",
      [theme?.breakpoints?.up("tabletM")]: {
        paddingLeft: "24px",
        paddingRight: "24px",
      },
      [theme?.breakpoints?.up("tabletL")]: {
        paddingLeft: "32px",
        paddingRight: "32px",
      },
      [theme?.breakpoints?.up("desktopS")]: {
        paddingLeft: "48px",
        paddingRight: "48px",
      },
      [theme?.breakpoints?.up("desktopM")]: {
        paddingLeft: "56px",
        paddingRight: "56px",
      },
      [theme?.breakpoints?.up("desktopL")]: {
        paddingLeft: "60px",
        paddingRight: "60px",
      },
      [theme?.breakpoints?.up("desktopS")]: {
        maxWidth: "1440px",
      },
    },
  },
});
