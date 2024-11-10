import {
  Box,
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import GoogleIcon from "../components/common/googleIcon";

import React from "react";

interface CommonProps {
  navigate: (href: string) => void;
  pathname: string;
}
interface SidebarItem {
  title: string;
  icon?: string;
  href?: string;
  children?: SidebarItem[];
}

interface SidebarItemProps extends CommonProps {
  route: SidebarItem;
}

interface SidebarProps extends CommonProps {
  routes: SidebarItem[];
}

const SidebarItem = ({ route, navigate, pathname }: SidebarItemProps) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    if (Array.isArray(route.children)) {
      setOpen(!open);
    }
    if (route.href) {
      navigate(route.href);
    }
  };

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton
          sx={(theme) => ({
            py: "12px",
            color: theme.palette.grey["800"],
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            bgcolor:
              route.href == pathname ? theme.palette.primary["50"] : undefined,
            "&:hover": {
              bgcolor: theme.palette.primary["50"],
            },
          })}
          onClick={handleClick}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            {route.icon ? (
              <GoogleIcon
                fontSize={24}
                sx={(theme) => ({
                  color: theme?.palette?.gray?.["500"],
                })}
                iconName={route.icon}
              />
            ) : null}

            <Typography
              sx={{
                display: "flex",
                fontSize: "1rem",
                alignItems: "start",
              }}
              variant={route?.children ? "body1" : "body2"}
            >
              {route.title}
            </Typography>
          </Box>

          {route.children ? (
            <GoogleIcon
              iconName="keyboard_arrow_left"
              className="transition-all"
              sx={(theme) => ({
                transform: open ? "rotateZ(-90deg)" : "none",
                color: theme?.palette?.gray?.["500"],
              })}
            />
          ) : null}
        </ListItemButton>
      </ListItem>

      <Divider />

      <Collapse in={open} timeout="auto" unmountOnExit>
        {Array.isArray(route.children) ? (
          <List component="div" disablePadding>
            {route?.children?.map((route) => {
              return (
                <Box key={route.title}>
                  <SidebarItem
                    navigate={navigate}
                    pathname={pathname}
                    route={route}
                  />
                </Box>
              );
            })}
          </List>
        ) : null}
      </Collapse>
    </>
  );
};

const SideBar = ({ routes, navigate, pathname }: SidebarProps) => {
  return (
    <List
      disablePadding
      dense={false}
      sx={{ direction: "rtl", position: "sticky", top: "64px" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {routes.map((route) => (
        <Box key={route.title}>
          <SidebarItem navigate={navigate} pathname={pathname} route={route} />
        </Box>
      ))}
    </List>
  );
};

export default SideBar;
