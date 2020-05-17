function Todo(props) {
  const todo = props.todo;
  return (
    <div data-id={todo.ref['@ref'].id}>
      {todo.data.title}
    </div>
  )
}

function Todos(props) {
  const todos = props.values;
  return (<div>{todos.map((value, index) => (<Todo todo={value} key={index}></Todo>))}</div>)
}

export default Todos
