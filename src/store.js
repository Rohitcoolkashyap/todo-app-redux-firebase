import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import firebase from "./config/fbConfig";

// import authReducer from "./reducers/authReducer";
import { todoListReducer, todoCreateReducer } from "./reducers/todoReducer";
import fbConfig from "./config/fbConfig";

import {
  createFirestoreInstance,
  reduxFirestore,
  getFirestore,
} from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import "firebase/firestore";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
const rrfConfig = {
  userProfile: "todos",
  useFirestoreForProfile: true,
};
const reducer = combineReducers({
  //   auth: authReducer,
  todoList: todoListReducer,
  todoCreate: todoCreateReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancer(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(firebase)
  )
);
const rffProps = {
  firebase,
  useFirestoreForProfile: true,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

export { store, rffProps };
