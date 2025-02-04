import { Shadows, ThemeOptions } from "@mui/material";

export const customShadows = (theme: ThemeOptions): Shadows =>
  (theme?.shadows
    ? [
        ...theme?.shadows.map((item, index) => {
          switch (index) {
            case 1:
              return "0 1px 2px 0 rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15)";
            case 2:
              return "0 1px 2px 0 rgba(0, 0, 0, 0.3), 0 2px 6px 2px rgba(0, 0, 0, 0.15)";
            case 3:
              return "0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 4px 8px 3px rgba(0, 0, 0, 0.15)";
            case 4:
              return "0 2px 3px 0 rgba(0, 0, 0, 0.3), 0 6px 10px 4px rgba(0, 0, 0, 0.15)";
            case 5:
              return "0 4px 4px 0 rgba(0, 0, 0, 0.3), 0 8px 12px 6px rgba(0, 0, 0, 0.15)";

            default:
              return item;
          }
        }),
      ]
    : []) as Shadows;
