import React from "react";

export default function Header(props)
{
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="https://img.icons8.com/fluent/48/000000/todo-list.png"
              alt=""
              width="30"
              height="27"
              class="d-inline-block align-top"
              style={{margin:"2%",marginRight:"6%"}}
            />
           Welcome {props.name}
           
          </a>
        </div>
      </nav>
    </div>
  );
}
