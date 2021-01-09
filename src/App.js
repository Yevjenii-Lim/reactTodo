import './App.css';
import ButtonsContainer from './components/Buttons';
// import Form from './components/Form';
import Header from './components/HeaderList';
import TodoItems from './components/TodoItems';

function App() {
  return (
    <div>
      <Header></Header>
      {/* <Form></Form> */}
      <TodoItems></TodoItems>
      <ButtonsContainer></ButtonsContainer>
    </div>
  )
}

export default App;
