import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@m'
import Navbar from './Navbar';

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});

const styles = {
  root: {
    flexGrow: 1
  }
}

const App = (props) => {
  const { classes } = props;
  
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Navbar />


      </div>
    </MuiThemeProvider>
  );
}

export default withStyles(styles)(App);