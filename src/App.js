import './App.css';
import Addtodo from './components/Addtodo';
import Todos from './components/Todos';

function App() {
  return (
    <div className="container">

      <Addtodo/>
      <Todos/>

    </div>
  );
}

export default App;
