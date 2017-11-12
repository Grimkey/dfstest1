import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './todolist.css';

import TodoListItem from './todolistitem';
import NewTodoItem from './newtodoitem';

interface TodoListState {
  List: string[];
}

class TodoList extends React.Component<{}, TodoListState> {
  constructor(props: {}) {
    super(props);
    this.NewItemAdded = this.NewItemAdded.bind(this);
    this.state = {List: ['Start your pomodoro session.']};
  }

  renderList(): JSX.Element[] {
    const listItems = this.state.List.map((entry, index) =>
        <TodoListItem key={index} entry={entry}/>
    );

    return listItems;
  }

  render() {
    return (
      <div className="todolist">
        <p>TODO List</p>
        <div className="col-lg-12">
          <NewTodoItem onNewItem={i => this.NewItemAdded(i)} />
          {this.renderList()}
        </div>
      </div>
    );
  }

  private NewItemAdded(text: string) {
    this.state.List.push(text);
    this.setState({
      List: this.state.List,
    });
  }
}

export default TodoList;
