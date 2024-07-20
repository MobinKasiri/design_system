import { Theme } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";

export const fontName = "inherit";

export const typography = (theme: Theme): TypographyOptions => ({
  fontFamily: fontName,
  allVariants: {
    margin: "0",
    fontFamily: fontName,
    lineHeight: "normal",
  },
  h1: {
    fontSize: "32px",
    fontWeight: 900,
    lineHeight: "54px",

    [theme?.breakpoints?.up("desktopS")]: {
      fontSize: "48px",
      fontWeight: 900,
      lineHeight: "80px",
    },
  },
  h2: {
    fontSize: "28px",
    fontWeight: 900,
    lineHeight: "48px",

    [theme?.breakpoints?.up("desktopS")]: {
      fontSize: "40px",
      fontWeight: 900,
      lineHeight: "68px",
    },
  },
  h3: {
    fontSize: "24px",
    fontWeight: 900,
    lineHeight: "42px",

    [theme?.breakpoints?.up("desktopS")]: {
      fontSize: "36px",
      fontWeight: 900,
      lineHeight: "60px",
    },
  },
  h4: {
    fontSize: "18px",
    fontWeight: 700,
    lineHeight: "32px",

    [theme?.breakpoints?.up("desktopS")]: {
      fontSize: "32px",
      fontWeight: 700,
      lineHeight: "54px",
    },
  },
  h5: {
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "28px",

    [theme?.breakpoints?.up("desktopS")]: {
      fontSize: "28px",
      fontWeight: 700,
      lineHeight: "48px",
    },
  },
  h6: {
    fontSize: "14px",
    fontWeight: 700,
    lineHeight: "24px",

    [theme?.breakpoints?.up("desktopS")]: {
      fontSize: "24px",
      fontWeight: 700,
      lineHeight: "40px",
    },
  },
  subtitle1: {
    fontSize: "18px",
    fontWeight: 500,
    lineHeight: "32px",

    [theme?.breakpoints?.up("desktopS")]: {
      fontSize: "20px",
      fontWeight: 500,
      lineHeight: "32px",
    },
  },
  subtitle2: {
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "28px",

    [theme?.breakpoints?.up("desktopS")]: {
      fontSize: "18px",
      fontWeight: 500,
      lineHeight: "30px",
    },
  },
  subtitle3: {
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "28px",

    [theme?.breakpoints?.up("desktopS")]: {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "28px",
      fontFamily: fontName,
    },
  },
  body1: {
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "28px",

    [theme?.breakpoints?.up("desktopS")]: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "24px",
    },
  },
  body2: {
    fontSize: "12px",
    fontWeight: 500,
    lineHeight: "20px",

    [theme?.breakpoints?.up("desktopS")]: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "24px",
    },
  },
  body3: {
    fontSize: "10px",
    fontWeight: 500,
    lineHeight: "18px",
    fontFamily: fontName,

    [theme?.breakpoints?.up("desktopS")]: {
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: "20px",
    },
  },
  label1: {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "24px",
    fontFamily: fontName,

    [theme?.breakpoints?.up("desktopS")]: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "24px",
    },
  },
  label2: {
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "20px",
    fontFamily: fontName,

    [theme?.breakpoints?.up("desktopS")]: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "20px",
    },
  },
  label3: {
    fontSize: "10px",
    fontWeight: 400,
    lineHeight: "18px",
    fontFamily: fontName,

    [theme?.breakpoints?.up("desktopS")]: {
      fontSize: "10px",
      fontWeight: 400,
      lineHeight: "18px",
    },
  },
  buttonLarge: {
    fontFamily: fontName,
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "28px",
  },
  buttonMedium: {
    fontFamily: fontName,
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "24px",
  },
  buttonSmall: {
    fontFamily: fontName,
    fontSize: "12px",
    fontWeight: 500,
    lineHeight: "20px",
  },
});
