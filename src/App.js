import { Table } from './components';
import logo from './logo.png';
import MockData from './utils/MockData';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Todo List
      </header>
      <Table data={MockData} headers={['title', 'description', 'isDone']} objectName="Todo" />
      
    </div>
  );
}

export default App;
