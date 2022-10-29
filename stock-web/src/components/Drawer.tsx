import { Theme } from '@mui/material';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { makeStyles } from '@mui/styles';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  navLink: {
    color: 'inherit',
    textDecoration: 'none',
  },
}));

export const PermanentDrawer = ({ routes, open, onChangeRoute }: any) => {
  const classes = useStyles({ open });
  const { pathname } = useLocation();

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      open={open}
      anchor="left"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <Divider />
      <List>
        {routes.map((route: any, index: number) => (
          <ListItem key={route.key}>
            <ListItemButton
              onClick={() => onChangeRoute(route.title)}
              component={NavLink}
              to={route.path}
              selected={route.path === pathname}
            >
              <ListItemIcon>
                <route.icon />
              </ListItemIcon>
              <ListItemText primary={route.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
