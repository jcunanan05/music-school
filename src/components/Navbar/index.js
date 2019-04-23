import React from 'react'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  logo: {
    marginLeft: '1rem',
  },
}

function Navbar({ classes }) {
  return (
    <AppBar color="default">
      <Toolbar variant="dense">
        <IconButton color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography className={classes.logo} variant="h6" color="inherit">
          <span role="img" aria-label="Music Note">
            🎵
          </span>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(Navbar)
