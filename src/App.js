import './App.css';
import Form from './components/Form';
import Header from './components/HeaderList';
import TodoItems from './components/TodoItems';

function App() {
  return (
    <div>
      <Header></Header>
      <Form></Form>
      <TodoItems></TodoItems>
    </div>
  )
}

export default App;
