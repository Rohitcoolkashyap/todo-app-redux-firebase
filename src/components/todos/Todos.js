import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import { Typography, Container } from "@material-ui/core";
import { useSelector, useDispatch, connect } from "react-redux";
import { listTodos } from "../../actions/todoActions";
import { compose } from "redux";
import { firestoreConnect, firebaseConnect } from "react-redux-firebase";
class Todos extends React.Component {
  // const { todos, loading, error } = todosList;
  // const dispatch = useDispatch();
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }

  // useEffect(() => {
  //   db.collection("todos")
  //     .doc("1")
  //     .onSnapshot((res) => {
  //       const data = res._document.proto.fields.todos.arrayValue.values;
  //       setTodos(data.map((e) => e.mapValue.fields.stringValue));
  //     });
  // }, [db]);
  // const [todos, setTodos] = useState([
  //   {
  //     subject: "maths",
  //     text: "hello man idaj ajdajd",
  //   },
  //   {
  //     subject: "maths",
  //     text: "hello man idaj ajdajd",
  //   },
  //   {
  //     subject: "maths",
  //     text: "hello man idaj ajdajd",
  //   },
  // ]);
  render() {
    const { todos } = this.props;
    console.log(todos);

    return (
      <Container maxWidth="lg">
        <Typography variant="h3">todo list</Typography>
        <Todo todos={todos}/>
         {this.state.todos.map((todo, index) => (
          <Todo key={index} text={todo.title} content={todo.content} />
       ))} 
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    todos: state.firestore.ordered.todos,
  };
};

export default compose(
  firestoreConnect(() => ["todos"]),
  connect(mapStateToProps)
)(Todos);
