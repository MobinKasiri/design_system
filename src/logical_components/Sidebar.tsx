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
import { useLocation, useNavigate } from "react-router-dom";
import GoogleIcon from "../components/common/googleIcon";

interface SidebarItem {
  title: string;
  icon: string;
  href: string;
  children?: SidebarItem[];
}

const SideBar = ({ routes }: { routes: SidebarItem[] }) => {
  return (
    <Box
      sx={(theme) => ({
        position: "fixed",
        borderLeft: "1px solid",
        width: "240px",
        borderColor: theme.palette.grey["300"],
        height: "100dvh",
        mt: 8,
      })}
    >
      <List
        disablePadding
        dense={false}
        sx={{ direction: "rtl", position: "sticky", top: "64px" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {routes.map((singleRoute) => (
          <div key={singleRoute.title}>
            <SingleRouteItem route={singleRoute} />
            {singleRoute.title && <Divider />}
          </div>
        ))}
      </List>
    </Box>
  );
};

export default SideBar;
const SingleRouteItem = ({ route }: { route: SidebarItem }) => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const { pathname } = useLocation();
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
                    <SingleRouteItem route={anotherRoute} />
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
