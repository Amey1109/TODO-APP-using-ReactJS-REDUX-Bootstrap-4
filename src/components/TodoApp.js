import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Header from "./Header";
import Reducer from "../reducers/Reducer";
import AddTodo from "./AddTodo";
import VisibilityFilter from "./VisibilityFilter";

const state = {
    todo:[]
  
};
//Root for all the Todo App
export default function TodoApp(props) {
  const store = createStore(Reducer, state);
  return (
    <div className="container">
      {/* Getting the name from Router */}
      <Header name={props.match.params.name} /> 
      <Provider store={store}>
        <AddTodo />
        <VisibilityFilter/>
      </Provider>
    </div>
  );
}
