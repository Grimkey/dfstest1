import * as React from 'react';

export interface TodoListItemProps {
    entry: string;
}

function TodoListItem({entry}: TodoListItemProps) {
    return (
        <div className="input-group">
            <span className="input-group-addon">
                <input type="checkbox" aria-label="..." />
            </span>
            <input type="text" className="form-control" aria-label="..." readOnly={true} value={entry}/>
        </div>
    );
}

export default TodoListItem;
