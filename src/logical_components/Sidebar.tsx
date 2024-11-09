import {
  Box,
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";

import React from "react";
import GoogleIcon from "../components/common/googleIcon";

interface CommonProps {
  navigate: (href: string) => void;
  pathname: string;
}

interface SidebarItemProps extends CommonProps {
  route: SidebarItem;
}

interface SidebarProps extends CommonProps {
  routes: SidebarItem[];
}

interface SidebarItem {
  title: string;
  icon: string;
  href: string;
  children?: SidebarItem[];
}

const SingleRouteItem = ({ route, navigate, pathname }: SidebarItemProps) => {
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
            pr: "1rem",
            py: "12px",
            color: theme.palette.grey["800"],
            display: "flex",
            alignItems: "center",
            bgcolor:
              route.href == pathname ? theme.palette.primary["50"] : undefined,
            "&:hover": {
              bgcolor: theme.palette.primary["50"],
            },
          })}
          onClick={handleClick}
        >
          <GoogleIcon fontSize={24} iconName={route.icon} />
          <Typography
            sx={{
              display: "flex",
              fontSize: "1rem",
              alignItems: "start",
              pr: "12px",
            }}
          >
            {route.title}
          </Typography>
          {route.children &&
            (open ? (
              <GoogleIcon iconName="keyboard_arrow_down" />
            ) : (
              <GoogleIcon iconName="keyboard_arrow_left" />
            ))}
        </ListItemButton>
      </ListItem>

      {
        <Collapse in={open} timeout="auto" unmountOnExit>
          {Array.isArray(route.children) ? (
            <List component="div" disablePadding>
              {route?.children?.map((anotherRoute) => {
                return (
                  <Box
                    key={anotherRoute.title}
                    sx={{
                      paddingRight: 2,
                    }}
                  >
                    <SingleRouteItem
                      navigate={navigate}
                      pathname={pathname}
                      route={anotherRoute}
                    />
                  </Box>
                );
              })}
            </List>
          ) : null}
        </Collapse>
      }
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
      {routes.map((singleRoute) => (
        <div key={singleRoute.title}>
          <SingleRouteItem
            navigate={navigate}
            pathname={pathname}
            route={singleRoute}
          />
          {singleRoute.title && <Divider />}
        </div>
      ))}
    </List>
  );
};

export default SideBar;
