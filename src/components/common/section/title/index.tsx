import { Box, BoxProps, SxProps } from "@mui/material";
import React from "react";
import { primary } from "../../../../colors/colors";
import { ThemeRegistry } from "../../../../provider";

const staticStyles: SxProps = {
  display: "grid",
  gridTemplateColumns: "4px auto",
  columnGap: 1,
};

interface sectionTitleProps extends BoxProps {
  children: React.ReactNode;
  lineStyles?: SxProps;
}

const SectionTitle = ({
  sx,
  lineStyles,
  children,
  ...rest
}: sectionTitleProps) => {
  return (
    <ThemeRegistry>
      <Box {...rest} sx={{ ...staticStyles, ...sx }}>
        <Box
          sx={{
            width: "4px",
            height: 1,
            borderRadius: 5,
            background: primary["500"],
            ...lineStyles,
          }}
        />
        {children}
      </Box>
    </ThemeRegistry>
  );
};

export default SectionTitle;
