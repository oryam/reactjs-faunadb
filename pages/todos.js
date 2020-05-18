import api from '../src/utils/todo.api'
import Todos from '../src/components/todo.component'

export class TodosPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    const todos = this.props.todos;
    return (
      <div>
        <h2>Todo list</h2>
        <Todos values={todos}></Todos>
      </div>
    );
  }
}

export async function getStaticProps() {
// export async function getServerSideProps() {
  const todos = await api.list();

  return {
    props: {
      todos
    }
  }
}

export default TodosPage;
