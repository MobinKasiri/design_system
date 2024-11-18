import {
  Box,
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemButton,
  Skeleton,
  Typography,
} from "@mui/material";
import GoogleIcon from "../components/common/googleIcon";
import { ThemeRegistry } from "../provider";

import React from "react";

export interface CommonProps {
  navigate: (url: string) => void;
  pathname: string;
}
export interface SidebarItem {
  title?: string;
  icon?: string;
  url?: string;
  menuChildren?: SidebarItem[];
  menuOrder?: number;
  id: number;
}

export interface SidebarItemProps extends CommonProps {
  route: SidebarItem;
}

export interface SidebarProps extends CommonProps {
  routes: SidebarItem[];
  loading?: boolean;
}

const SidebarItem = ({ route, navigate, pathname }: SidebarItemProps) => {
  const haveIActiveChild = () => {
    return (
      route.menuChildren?.[0] &&
      pathname !== "/" &&
      JSON.stringify(route.menuChildren).includes(pathname)
    );
  };

  const [open, setOpen] = React.useState(haveIActiveChild());

  const handleClick = () => {
    if (route.menuChildren?.length) {
      setOpen((prev) => !prev);
      return;
    }
    if (route.url) {
      navigate(route.url);
    }
  };

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton
          sx={(theme) => ({
            py: "12px",
            color: theme.palette.gray["800"],
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            bgcolor:
              route.url == pathname || haveIActiveChild()
                ? theme.palette.primary["50"]
                : undefined,
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
            {route.title ? (
              <Typography
                sx={{
                  display: "flex",
                  fontSize: "1rem",
                  alignItems: "start",
                }}
                variant={route?.menuChildren ? "body1" : "body2"}
              >
                {route.title}
              </Typography>
            ) : null}
          </Box>

          {route.menuChildren?.length ? (
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
        {route.menuChildren?.length ? (
          <List component="div" disablePadding>
            {route?.menuChildren?.map((route) => {
              return (
                <Box key={route?.id}>
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

const SkeletonItem = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", width: 1 }}>
      <Skeleton animation="wave" variant="circular" width={40} height={40} />
      <Skeleton
        animation="wave"
        sx={{ width: "calc(100% - 48px)", borderRadius: 2 }}
        variant="rectangular"
        height={36}
      />
    </Box>
  );
};

const SkeletonComponent = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 2.5 }}>
      {Array.from(Array(10)).map(() => (
        <SkeletonItem />
      ))}
    </Box>
  );
};

const SideBar = ({ routes, navigate, pathname, loading }: SidebarProps) => {
  return (
    <ThemeRegistry>
      <List
        disablePadding
        dense={false}
        sx={{ direction: "rtl" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {loading ? <SkeletonComponent /> : null}
        {routes?.length
          ? routes.map((route) => (
              <Box key={route.id}>
                <SidebarItem
                  navigate={navigate}
                  pathname={pathname}
                  route={route}
                />
              </Box>
            ))
          : null}
      </List>
    </ThemeRegistry>
  );
};

export default SideBar;
