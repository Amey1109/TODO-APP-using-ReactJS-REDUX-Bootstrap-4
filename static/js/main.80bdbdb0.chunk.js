(this.webpackJsonptodo_advanced=this.webpackJsonptodo_advanced||[]).push([[0],{38:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(0),s=n.n(c),r=n(17),i=n.n(r),l=n(14),o=n(10);function d(t){return Object(a.jsx)("div",{children:Object(a.jsx)("nav",{class:"navbar navbar-light bg-light",children:Object(a.jsx)("div",{class:"container-fluid",children:Object(a.jsxs)("a",{class:"navbar-brand",href:"#",children:[Object(a.jsx)("img",{src:"https://img.icons8.com/fluent/48/000000/todo-list.png",alt:"",width:"30",height:"27",class:"d-inline-block align-top",style:{margin:"2%",marginRight:"6%"}}),"Welcome ",t.name]})})})})}var b=n(25),p=n(15),j={ADD_TODO:"ADD_TODO",DELETE_TASK:"DELETE_TASK",TASK_COMPLETED:"TASK_COMPLETED"};var u=Object(l.b)({todo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case j.ADD_TODO:var n=[].concat(Object(p.a)(t),[{Task:e.payload,isChecked:!1}]);return n;case j.DELETE_TASK:var a=[].concat(Object(p.a)(t.slice(0,e.payload)),Object(p.a)(t.slice(e.payload+1)));return a;case j.TASK_COMPLETED:var c=[].concat(Object(p.a)(t.slice(0,e.payload)),[Object(b.a)(Object(b.a)({},t[e.payload]),{},{isChecked:!t[e.payload].isChecked})],Object(p.a)(t.slice(e.payload+1)));return c;default:return t}}}),h=n(8),O=n(9),m=n(12),f=n(11),y=function(t){Object(m.a)(n,t);var e=Object(f.a)(n);function n(t){var a;return Object(h.a)(this,n),(a=e.call(this,t)).handleClick=function(){a.props.addTask(a.state.Task),a.setState({Task:""})},a.state={Task:""},a}return Object(O.a)(n,[{key:"render",value:function(){var t=this;return Object(a.jsxs)("div",{style:{alignItems:"center",textAlign:"center",marginTop:"3%"},children:[Object(a.jsx)("input",{style:{fontStyle:"italic"},type:"text",placeholder:"What needs to be done??",value:this.state.Task,onChange:function(e){t.setState({Task:e.target.value})}}),Object(a.jsx)("button",{class:"btn btn-outline-primary",style:{marginLeft:"1%"},onClick:function(){t.handleClick()},children:"Add Task"})]})}}]),n}(s.a.Component),v=Object(o.b)((function(t){return{Data:t}}),(function(t){return{addTask:function(e){return t({type:"ADD_TODO",payload:e})}}}))(y),g=function(t){Object(m.a)(n,t);var e=Object(f.a)(n);function n(){return Object(h.a)(this,n),e.apply(this,arguments)}return Object(O.a)(n,[{key:"render",value:function(){var t=this;return Object(a.jsxs)("div",{style:{display:"block",marginBottom:"2%"},children:[Object(a.jsx)("input",{style:{display:"inline-block",marginLeft:"2%"},type:"checkbox",checked:this.props.propsIsChecked,onClick:function(){t.props.taskCompleted(t.props.propsInd)}}),this.props.propsIsChecked?Object(a.jsx)("strike",{style:{display:"inline-block",marginLeft:"3%",color:"#9ea7aa"},children:Object(a.jsx)("h4",{children:this.props.propsTask})}):Object(a.jsx)("h4",{style:{display:"inline-block",marginLeft:"3%"},children:this.props.propsTask}),Object(a.jsx)("div",{style:{marginBottom:"2%",display:"inline-block",position:"absolute",right:"0%",left:"75%"},children:Object(a.jsx)("button",{class:"btn btn-outline-danger",onClick:function(){t.props.deleteTask(t.props.propsInd)},children:"Delete"})})]})}}]),n}(s.a.Component),k=Object(o.b)((function(t){return{Data:t}}),(function(t){return{taskCompleted:function(e){return t({type:"TASK_COMPLETED",payload:e})},deleteTask:function(e){return t({type:"DELETE_TASK",payload:e})}}}))(g),x=function(t){Object(m.a)(n,t);var e=Object(f.a)(n);function n(t){var a;return Object(h.a)(this,n),(a=e.call(this,t)).state={filter:"all"},a}return Object(O.a)(n,[{key:"render",value:function(){var t=this,e=this.props.Data.todo.filter((function(e,n){return"all"===t.state.filter||("completed"===t.state.filter?e.isChecked:!e.isChecked)})).map((function(t,e){return Object(a.jsx)(k,{propsTask:t.Task,propsIsChecked:t.isChecked,propsInd:e})}));return Object(a.jsxs)("div",{style:{display:"block",marginTop:"2%"},children:[Object(a.jsxs)("div",{style:{display:"block",marginLeft:"38%",marginTop:"2%"},class:"btn-group",role:"group","aria-label":"Basic outlined example",children:[Object(a.jsx)("button",{class:"btn btn-outline-success",value:"all",onClick:function(e){t.setState({filter:e.target.value})},children:"All"}),Object(a.jsx)("button",{class:"btn btn-outline-primary",value:"completed",onClick:function(e){t.setState({filter:e.target.value})},children:"Completed"}),Object(a.jsx)("button",{class:"btn btn-outline-warning",value:"uncompleted",onClick:function(e){t.setState({filter:e.target.value})},children:"Incompleted"})]}),Object(a.jsx)("div",{style:{margin:"2%",marginLeft:"10%",marginTop:"2%"},children:e})]})}}]),n}(s.a.Component),T=Object(o.b)((function(t){return{Data:t}}))(x),C={todo:[]};function D(t){var e=Object(l.c)(u,C);return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(d,{name:t.match.params.name}),Object(a.jsxs)(o.a,{store:e,children:[Object(a.jsx)(v,{}),Object(a.jsx)(T,{})]})]})}var E=n(19),A=n(3),L=function(t){Object(m.a)(n,t);var e=Object(f.a)(n);function n(t){var a;return Object(h.a)(this,n),(a=e.call(this,t)).state={name:""},a}return Object(O.a)(n,[{key:"render",value:function(){var t=this;return Object(a.jsx)("div",{style:{display:"inline-block",width:"32%",marginLeft:"31%",marginTop:"5%"},children:Object(a.jsxs)("form",{children:[Object(a.jsxs)("div",{class:"form-group",style:{margin:"2%"},children:[Object(a.jsx)("label",{style:{margin:"2%"},children:"Username"}),Object(a.jsx)("input",{type:"text",name:"username",class:"form-control",style:{width:"100%"},placeholder:"Enter Username",onChange:function(e){t.setState({name:e.target.value})}})]}),Object(a.jsxs)("div",{class:"form-group",style:{margin:"2%"},children:[Object(a.jsx)("label",{style:{margin:"2%"},children:"Password"}),Object(a.jsx)("input",{style:{margin:"2%"},type:"password",name:"password",class:"form-control",placeholder:"Password"})]}),Object(a.jsx)(E.b,{to:"/todoApp/".concat(this.state.name),children:Object(a.jsx)("button",{style:{margin:"2%",marginLeft:"38%"},type:"submit",class:"btn btn-primary",children:"Submit"})})]})})}}]),n}(s.a.Component);var S=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(E.a,{children:Object(a.jsxs)(A.c,{children:[Object(a.jsx)(A.a,{path:"/todoApp/:name",component:D}),Object(a.jsx)(A.a,{path:"/",component:L})]})})})};i.a.render(Object(a.jsx)(S,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.80bdbdb0.chunk.js.map