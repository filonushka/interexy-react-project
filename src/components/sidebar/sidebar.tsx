import * as React from "react";
import {
  Drawer as MuiDrawer,
  AppBarProps as MuiAppBarProps,
  Link,
  CssBaseline,
  ListItemIcon,
  ListItem,
  ListItemButton,
  Toolbar,
  List,
  IconButton,
} from "@mui/material";
import { ChevronLeft, Menu as MenuIcon } from "@mui/icons-material";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import { sideBarList } from "../../const";

const drawerWidth = 240;

// interface IDrawerProps extends DrawerProps {
//   openedSideBarWidth: number;
//   closedSideBarWidth: number;
// }

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => {
    switch (prop) {
      case "isSideBarOpen":
      case "openedSideBarWidth":
      case "closedSideBarWidth":
        return false;
      default:
        return true;
    }
  },
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

interface ISideBarProps {
  isSideBarOpen: boolean;
  setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Sidebar({ isSideBarOpen, setIsSideBarOpen }: ISideBarProps) {
  const handleSideBarOpen = () => {
    setIsSideBarOpen(true);
  };

  const handleSideBarClose = () => {
    setIsSideBarOpen(false);
  };

  const MyDrawerHeader = () => {
    return (
      <DrawerHeader>
        {isSideBarOpen ? (
          <IconButton onClick={handleSideBarClose}>
            <ChevronLeft htmlColor="#2c2b30" />
          </IconButton>
        ) : (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleSideBarOpen}
            edge="start"
          >
            <MenuIcon htmlColor="#2c2b30" />
          </IconButton>
        )}
      </DrawerHeader>
    );
  };

  const MyLinksList = () => {
    return (
      <List>
        {sideBarList.map((text, index) => (
          <ListItem key={text.name} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: isSideBarOpen ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: isSideBarOpen ? 3 : "auto",
                  justifyContent: "center",
                  color: "inherit",
                }}
              >
                <Link
                  href={`${text.path}`}
                  underline="hover"
                  sx={{ color: "inherit" }}
                >
                  {text.icon}
                </Link>
              </ListItemIcon>
              <Link
                href={`${text.path}`}
                underline="hover"
                sx={{
                  opacity: isSideBarOpen ? 1 : 0,
                  width: isSideBarOpen ? 240 : 0,
                  color: "inherit",
                }}
              >
                {text.name}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    );
  };

  return (
    <Drawer variant="permanent" open={isSideBarOpen}>
      <MyDrawerHeader />
      <MyLinksList />
    </Drawer>
  );
}

export default Sidebar;
