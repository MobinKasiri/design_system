"use client";

import { Box, Typography } from "@mui/material";
import Development from "/under_development.svg";
import Image from "../image";
import { ThemeRegistry } from "../../../provider";

const UnderDevelopment = () => {
  return (
    <ThemeRegistry>
      <Box className="w-full flex flex-col justify-center items-center">
        <Box
          sx={(theme) => ({
            position: "relative",
            width: 325,
            height: 250,
            [theme?.breakpoints?.up("tabletM")]: { width: 500, height: 350 },
            [theme?.breakpoints?.up("desktopS")]: { width: 650, height: 420 },
          })}
        >
          <Image src={Development} alt="under-development" fill={true} />
        </Box>
        <Box className="mt-[50px] flex justify-center items-center flex-col">
          <Typography variant="subtitle1">این صفحه در دست ساخت است!</Typography>
        </Box>
      </Box>
    </ThemeRegistry>
  );
};

export default UnderDevelopment;
