import { Box, BoxProps, SxProps } from "@mui/material";
import React from "react";
import { primary } from "../../../../colors/colors";
import { ThemeRegistry } from "../../../../provider";

interface sectionHeadProps extends BoxProps {
  children: React.ReactNode;
}

const staticBoxStyle: SxProps = {
  width: "fit-content",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  mx: "auto",
};

const lineStyle: SxProps = {
  height: "4px",
  width: "150%",
  borderRadius: 5,
  background: primary["500"],
};

const SectionHead = ({ children, sx, ...rest }: sectionHeadProps) => {
  return (
    <ThemeRegistry>
      <Box {...rest} sx={{ ...staticBoxStyle, ...sx }}>
        <Box whiteSpace={"nowrap"} className="mx-auto mb-2">
          {children}
        </Box>
        <Box sx={lineStyle} />
      </Box>
    </ThemeRegistry>
  );
};

export default SectionHead;
