import React from "react";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import Todos from "./components/todos/Todos";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import CreateTodo from "./components/todos/CreateTodo";

function App() {
  return (
    <Container className="app" maxWidth="xl">
      <BrowserRouter>
        <Navbar />

        <Switch>

          <Route path="/" exact>
            <Todos />
          </Route>
          <Route exact path="/login" component={Signin}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/create" component={CreateTodo}></Route>
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
