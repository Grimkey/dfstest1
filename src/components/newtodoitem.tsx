import * as React from 'react';

export interface NewTodoItemProps {
    onNewItem: (i: string) => void;
}

export interface NewTodoItemState {
    newListValue: string;
}

export class NewTodoItem extends React.Component<NewTodoItemProps, NewTodoItemState> {
    constructor(props: NewTodoItemProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { newListValue: ''};
    }

    render() {
        return (
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Add a todo item..."
                    value={this.state.newListValue}
                    onChange={e => this.setState({newListValue: e.target.value})}
                />
                <span className="input-group-btn">
                    <button
                        className="btn btn-default"
                        type="button"
                        onClick={() => this.handleChange()}
                    >Go!
                    </button>
                </span>
            </div>
        );
    }

    private handleChange() {
        console.log(`Value: ${this.state.newListValue}`);
        this.props.onNewItem(this.state.newListValue);
        this.setState({newListValue: ''});
    }
}

export default NewTodoItem;
