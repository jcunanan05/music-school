import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  flex: {
    flexGrow: 1
  },

  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

const Navbar = (props) => {
  const { classes } = props;

  return (
    <AppBar 
      position="static" 
      color="default">
      <Toolbar>
        <IconButton 
          className={classes.menuButton}
          color="inherit" 
          aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography 
          variant="title" 
          color="inherit"
          className={classes.flex}>
          Weston
        </Typography>  
      </Toolbar> 
    </AppBar>
  );
}

export default withStyles(styles)(Navbar);