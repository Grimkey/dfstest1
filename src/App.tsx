import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';

import Header from './components/header';
import TodoList from './components/todolist';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <TodoList/>
      </div>
    );
  }
}

export default App;
