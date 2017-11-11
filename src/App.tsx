import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';

import Hello from './components/Hello';
import Header from './components/header';
import TodoList from './components/todolist';
import CompleteList from './components/completelist';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Hello name="TypeScript" enthusiasmLevel={10} />
        <TodoList/>
        <CompleteList/>
      </div>
    );
  }
}

export default App;
