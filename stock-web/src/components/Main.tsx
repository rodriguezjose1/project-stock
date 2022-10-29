import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { drawerItems } from '../data/drawer.items';
import { getNavbarHeader } from '../data/navbar-headers';
import { PermanentDrawer } from './Drawer';
import Navbar from './Navbar';

const useStyles = makeStyles((theme: Theme) => ({
  content: ({ open }: any) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    ...(!open && {
      marginLeft: `-${240}px`,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    }),
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
}));

const Main = ({ routes }: any) => {
  const [open, setOpen] = useState(false);
  const [header, setHeader] = useState('');
  const { pathname } = useLocation();

  const classes = useStyles({ open });

  const onChangeRoute = (title: string) => {
    setHeader(title);
  };

  useEffect(() => {
    setHeader(getNavbarHeader(pathname));
  }, [pathname]);

  const onClickMenu = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <Navbar onClickMenu={onClickMenu} open={open} header={header} />
      <PermanentDrawer
        routes={drawerItems}
        open={open}
        onChangeRoute={onChangeRoute}
      />
      <div className={classes.content}>
        <div className={classes.toolbar}></div>
        <Routes>
          {routes.map((route: any) => (
            <Route
              key={route.key}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export { Main };
