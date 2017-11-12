import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './todolist.css';

interface TodoListState {
  List: string[];
}

class TodoList extends React.Component<{}, TodoListState> {
  constructor(props: {}) {
    super(props);
    this.state = {List: ['Start your pomodoro session.']};
  }

  renderList(): JSX.Element[] {
    const listItems = this.state.List.map((entry, index) =>
      this.renderListItem(entry, index)
    );

    return listItems;
  }

  renderListItem(entry: string, index: number) {
    return (
      <div key={index} className="input-group">
        <span className="input-group-addon">
          <input type="checkbox" aria-label="..." />
        </span>
        <input type="text" className="form-control" aria-label="..." readOnly={true} value={entry}/>
      </div>
    );
  }
  render() {
    return (
      <div className="todolist">
        <p>TODO List</p>
        <div className="col-lg-12">
          <div className="input-group">
            <input id="addbox" type="text" className="form-control" placeholder="Add a todo item..." />
            <span className="input-group-btn">
              <button className="btn btn-default" type="button" onClick={() => this.buttonHandler()}>Go!</button>
            </span>
          </div>
          {this.renderList()}
        </div>
      </div>
    );
  }

  private buttonHandler() {
      const addbox = document.getElementById('addbox') as HTMLInputElement;
      if (addbox === null) {
        console.log('addbox is null');
        return true;
      }

      const text = addbox.value;
      if (text === null) {
        console.log('text is null');
        return true;
      }

      this.state.List.push(text);
      this.setState({
        List: this.state.List,
      });

      return true;
  }
}

export default TodoList;
