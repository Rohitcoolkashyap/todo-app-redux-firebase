const {
  TODO_LIST_REQUEST,
  TODO_LIST_SUCCESS,
  TODO_LIST_FAIL,
  TODO_CREATE_REQUEST,
  TODO_CREATE_SUCCESS,
  TODO_CREATE_FAIL,
} = require("../constants/todoConstants");
let data;
const listTodos = () => async (dispatch) => {
  try {
    dispatch({ type: TODO_LIST_REQUEST });
    data = [
      { title: "rohit2", content: "hello guys whatsup" },
      { title: "rohit2", content: "hello guys whatsup" },
      { title: "rohit2", content: "hello guys whatsup" },
      { title: "rohit2", content: "hello guys whatsup" },
    ];
    dispatch({ type: TODO_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: TODO_LIST_FAIL, payload: error.message });
  }
};

const createTodo = (title, content) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
  
    dispatch({ type: TODO_CREATE_REQUEST });
    const firestore = getFirestore();
    firestore
      .collection("todos")
      .add({
        title,
        content,
        authorFirstName: "ram",
        authorLastName: "raj",
        authorId: 323,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: TODO_CREATE_SUCCESS, payload: { title, content } });
      })
      .catch((e) => {
        dispatch({ type: TODO_CREATE_FAIL, payload: e.message });
      });
  };
};


export { listTodos, createTodo }
