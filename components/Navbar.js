import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const styles = {
  flex: {
    flexGrow: 1
  },

  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

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
          Weston New Music School
        </Typography>

        <Button color="inherit">Home</Button>
        <Button color="inherit">About</Button>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Navbar);