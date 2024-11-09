import { Box, Fade, Menu as MuiMenu, MenuItem, MenuProps } from "@mui/material";
import { ReactNode, useState } from "react";
import { ThemeRegistry } from "../provider";

interface CustomMenuProps {
  triggerEl: ReactNode;
  itemsList?: ReactNode[];
  children?: ReactNode;
  menuProps?: MenuProps;
}
const Menu = ({
  triggerEl,
  children,
  itemsList,
  menuProps,
}: CustomMenuProps) => {
  const [anchorEl, anchorElSet] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    anchorElSet(event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const handleClose = () => {
    anchorElSet(null);
  };

  return (
    <ThemeRegistry>
      <Box sx={{ display: "inline-block" }} onClick={handleClick}>
        {triggerEl}
      </Box>
      <MuiMenu
        {...menuProps}
        MenuListProps={{
          sx: { p: 0, "& li": { p: 0 }, ...menuProps?.MenuListProps?.sx },
          "aria-labelledby": "fade-button",
          ...menuProps?.MenuListProps,
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {itemsList
          ? itemsList?.map((e) => (
              <MenuItem onClick={handleClose}>{e}</MenuItem>
            ))
          : children}
      </MuiMenu>
    </ThemeRegistry>
  );
};

export default Menu;
