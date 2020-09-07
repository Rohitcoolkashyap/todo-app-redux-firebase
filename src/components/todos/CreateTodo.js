import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Box, Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { createTodo } from "../../actions/todoActions";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),

      width: "25ch",
    },
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    width: "55ch",
  },
}));

export default function CreateTodo(props) {
  const todos = useSelector((state) => state.todoCreate);
  const { todo, loading, error } = todos;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const classes = useStyles();
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createTodo(title, content));
    props.history.push("/");
  }

  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <Box
        className="create"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <TextField
          className={classes.textField}
          onChange={(e) => setTitle(e.target.value)}
          id="standard-full-width"
          placeholder="title"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          className={classes.textField}
          onChange={(e) => setContent(e.target.value)}
          id="standard-full-width"
          width=""
          placeholder="content"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button
          className="create__button"
          margin="dense"
          type="submit"
          variant="contained"
          color="primary"
        >
          create
        </Button>
      </Box>
    </form>
  );
}
