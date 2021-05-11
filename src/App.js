import React from "react";
import TodoApp from "./components/TodoApp";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/todoApp/:name" component={TodoApp} />

          {/* Dummy Login */}
          <Route exact path="/TODO-APP-using-ReactJS-REDUX-Bootstrap-4" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
