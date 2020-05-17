import api from '../src/utils/todo.api'

export class TodoComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    const todos = this.props.todos;
    return (
      <div>
        <h2>Todo list</h2>
        <div>{todos.map((todo) => (
          <div key={todo.ref['@ref'].id} data-id={todo.ref['@ref'].id}>{todo.data.title}</div>
        ))}</div>
      </div>
    );
  }
}

export async function getServerSideProps() {
  const todos = await api.list();

  return {
    props: {
      todos
    }
  }
}

export default TodoComponent;
