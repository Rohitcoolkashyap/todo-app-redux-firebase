import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

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
}));
export default function Navbar() {
  const classes = useStyles();
  return (
    <AppBar className="navbar" position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          <Link className="links" to="/">
            Todo List
          </Link>
        </Typography>
        <Button color="inherit">
          <Link className="links" to="/create">
            Add todo
          </Link>
        </Button>

        <Button color="inherit">
          <Link className="links" to="/login">
            Login
          </Link>
        </Button>
        <Button color="inherit">
          <Link className="links" to="/signup">
            register
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
