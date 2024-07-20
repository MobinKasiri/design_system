import { Box, BoxProps, Link, Typography } from "@mui/material";
import { gray } from "../../../colors/colors";
import React from "react";
import { ThemeRegistry } from "../../../provider";

interface stepBarArrayChildProps {
  title: string;
  href?: string;
}

interface stepBarProps extends BoxProps {
  array: stepBarArrayChildProps[];
  linkComponent: React.ElementType<any, keyof React.JSX.IntrinsicElements>;
}

const BreadCrumb = ({
  linkComponent,
  array,
  className,
  ...rest
}: stepBarProps) => {
  return (
    <ThemeRegistry>
      <Box
        width={1}
        {...rest}
        className={`flex items-center gap-x-2 ${className || ""}`}
      >
        {array?.map((item, index) => {
          const isLast = index + 1 === array?.length;

          const color = isLast ? gray["700"] : gray["500"];

          return (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gapX: 1,
              }}
              key={index}
            >
              {item?.href ? (
                <Link
                  {...(linkComponent
                    ? {
                        component: linkComponent,
                      }
                    : {})}
                  whiteSpace="nowrap"
                  href={item?.href}
                  color={color}
                  variant="body2"
                >
                  {item?.title}
                </Link>
              ) : (
                <Typography whiteSpace="nowrap" color={color} variant="body2">
                  {item?.title}
                </Typography>
              )}

              {!isLast ? (
                <span
                  className="material-symbols-rounded text-[20px]"
                  style={{ color: gray["500"] }}
                >
                  keyboard_arrow_left
                </span>
              ) : null}
            </Box>
          );
        })}
      </Box>
    </ThemeRegistry>
  );
};

export default BreadCrumb;
