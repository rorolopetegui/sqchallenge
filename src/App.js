import { AddTodo, TodoList, Modal } from './components';
import logo from './logo.png';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Todo List
      </header>
      <AddTodo />
      <TodoList />
      <Modal />
    </div>
  );
}

export default App;
