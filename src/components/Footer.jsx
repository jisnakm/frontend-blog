import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  footer: {
    top: 'auto',
    bottom: 0,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <div>
      {/* Your main content */}
      {/* ... */}
      
      {/* Footer */}
      <AppBar position="fixed" className={classes.footer}>
        <Toolbar>
          <Typography variant="body1">
            This is the footer content.
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Footer;
