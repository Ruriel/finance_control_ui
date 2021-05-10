import { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MailIcon from '@material-ui/icons/Mail';
import MenuLink from '~/components/MenuLink'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  }
}));

export default function Menu() {
  const classes = useStyles();
  const [open, setOpen] = useState(false)
  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };
  return (
    <div className={classes.root}>
      <Fragment key={'left'}>
        <SwipeableDrawer
          anchor={'left'}
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          onClick={toggleDrawer(false)}
        >
          <MenuLink text={'Home'} link={'/'}><MailIcon /></MenuLink>
          <MenuLink text={'Page1'} link={'/page1'}><MailIcon /></MenuLink>
          <MenuLink text={'Page2'} link={'/page2'}><MailIcon /></MenuLink>
        </SwipeableDrawer>
      </Fragment>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Finance Control
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
