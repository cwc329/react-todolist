(this["webpackJsonpreact-todolist"]=this["webpackJsonpreact-todolist"]||[]).push([[0],{22:function(t,e,n){},23:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(0),i=n.n(c),o=n(12),r=n.n(o),d=(n(22),n(2)),l=n(16),s=n(8),u=n(3),j=(n(23),n(4));function b(){var t=Object(u.a)(["\n  margin: 10px auto;\n"]);return b=function(){return t},t}var _=j.a.form(b());function f(t){var e=t.handlers,n=t.inputsContent;return Object(a.jsxs)(_,{onSubmit:e.addTodo,children:[Object(a.jsx)("input",{type:"text",name:"todo",onChange:e.inputChange,value:n}),Object(a.jsx)("button",{children:"Add"})]})}function O(){var t=Object(u.a)(["\n  margin: 5px 3px;\n"]);return O=function(){return t},t}function g(){var t=Object(u.a)(["\n  \n  max-width: 500px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  & .todo__card__content {\n    text-decoration: ",";\n  }\n"]);return g=function(){return t},t}var m=j.a.div(g(),(function(t){return t.isCompleted?"line-through":"none"})),h=j.a.button(O());function C(t){t.StyleContext;var e=t.todo,n=t.handlers;return Object(a.jsxs)(m,{className:"todo__card","data-id":e.id,isCompleted:e.isCompleted,children:[e.isEditing&&Object(a.jsx)("textarea",{onChange:n.editInputChange,defaultValue:e.content}),e.isEditing&&Object(a.jsxs)("div",{className:"todo__card__controls",children:[Object(a.jsx)(h,{className:"todo__card__controls__cancelBtn",onClick:n.cancelEditing,children:"Cancel"}),Object(a.jsx)(h,{className:"todo__card__controls__changeBtn",onClick:n.changeTodo,children:"Change"})]}),!e.isEditing&&Object(a.jsx)("div",{className:"todo__card__content",children:e.content}),!e.isEditing&&Object(a.jsxs)("div",{className:"todo__card__controls",children:[Object(a.jsx)(h,{className:"todo__card__controls__statusBtn",onClick:n.changeStatus,children:e.isCompleted?e.isCompleted&&"Undone":"Done"}),Object(a.jsx)(h,{className:"todo__card__contorls__editBtn",onClick:n.editBtnClick,children:"Edit"}),Object(a.jsx)(h,{className:"todo__card__controls__deleteBtn",onClick:n.deleteTodo,children:"Delete"})]})]})}function p(){var t=Object(u.a)(["\n  width: 500px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n"]);return p=function(){return t},t}function x(){var t=Object(u.a)(["\n  max-width: 1920px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-item: center;\n"]);return x=function(){return t},t}var v=j.a.div(x()),N=j.a.div(p());var E=function(){var t=Object(c.useState)([]),e=Object(s.a)(t,2),n=e[0],i=e[1],o=Object(c.useState)({content:"",editingContent:""}),r=Object(s.a)(o,2),u=r[0],j=r[1],b=Object(c.useState)("all"),_=Object(s.a)(b,2),O=_[0],g=_[1],m=Object(c.useRef)(1),p={addTodo:function(t){t.preventDefault(),u.content&&(i([].concat(Object(l.a)(n),[{id:m.current,content:u.content,isCompleted:!1,isEditing:!1}])),j({content:""}),m.current++)},inputChange:function(t){j(Object(d.a)(Object(d.a)({},u),{},{content:t.target.value}))},changeStatus:function(t){var e=Number(t.target.closest(".todo__card").attributes["data-id"].value);i(n.map((function(t){return t.id!==e?t:Object(d.a)(Object(d.a)({},t),{},{isCompleted:!t.isCompleted})})))},deleteTodo:function(t){var e=Number(t.target.closest(".todo__card").attributes["data-id"].value);i(n.filter((function(t){return t.id!==e})))},editBtnClick:function(t){var e=Number(t.target.closest(".todo__card").attributes["data-id"].value);i(n.map((function(t){return t.id!==e?Object(d.a)(Object(d.a)({},t),{},{isEditing:!1}):Object(d.a)(Object(d.a)({},t),{},{isEditing:!0})}))),j(Object(d.a)(Object(d.a)({},u),{},{editingContent:t.target.value}))},editInputChange:function(t){j(Object(d.a)(Object(d.a)({},u),{},{editingContent:t.target.value}))},changeTodo:function(t){if(u.editingContent){var e=Number(t.target.closest(".todo__card").attributes["data-id"].value);i(n.map((function(t){return t.id!==e?t:Object(d.a)(Object(d.a)({},t),{},{content:u.editingContent,isEditing:!1})}))),j(Object(d.a)(Object(d.a)({},u),{},{editingContent:""}))}},cancelEditing:function(t){var e=Number(t.target.closest(".todo__card").attributes["data-id"].value);i(n.map((function(t){return t.id!==e?t:Object(d.a)(Object(d.a)({},t),{},{isEditing:!1})}))),j(Object(d.a)(Object(d.a)({},u),{},{editingContent:""}))},filtersChange:function(t){var e=t.target.attributes["data-filter"].value;g("all"===e?"all":"true"===e)},clearAll:function(){i([])}};return Object(c.useEffect)((function(){console.log(u)}),[u]),Object(a.jsxs)(v,{className:"App",children:[Object(a.jsx)(f,{handlers:p,inputsContent:u.content}),Object(a.jsxs)("div",{className:"filters",children:[Object(a.jsx)(h,{className:"filters__allBtn","data-filter":"all",onClick:p.filtersChange,children:"All"}),Object(a.jsx)(h,{className:"filters__completedBtn","data-filter":!0,onClick:p.filtersChange,children:"Completed"}),Object(a.jsx)(h,{className:"filters__uncompletedBtn","data-filter":!1,onClick:p.filtersChange,children:"Uncompleted"})]}),Object(a.jsxs)(N,{className:"todos",children:[Object(a.jsxs)("div",{className:"todos__header",children:[Object(a.jsx)("span",{className:"todos__header__title",children:"My Todos"}),Object(a.jsx)(h,{className:"todos__header__clearAllBtn",onClick:p.clearAll,children:"Clear All Todos"})]}),n.filter((function(t){return"all"===O||(O?t.isCompleted:!t.isCompleted)})).map((function(t){return Object(a.jsx)(C,{todo:t,handlers:p},t.id)}))]})]})},k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),i(t),o(t)}))};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(E,{})}),document.getElementById("root")),k()}},[[26,1,2]]]);
//# sourceMappingURL=main.53323b8f.chunk.js.map