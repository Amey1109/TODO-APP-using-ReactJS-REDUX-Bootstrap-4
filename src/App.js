import React from "react";
import TodoApp from "./components/TodoApp";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/todoApp/:name" component={TodoApp} />
          <Route path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
