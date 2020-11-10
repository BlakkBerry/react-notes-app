import React from "react";
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import './TodoItem.css'


function TodoItem({ todo, onChange, removeTodo }) {
    const classes = ['label-text']

    if (todo.completed) {
        classes.push('done');
    }

    return (
        <div className="d-flex align-items-center">
            <label>
                <input type="checkbox"
                       className="option-input radio"
                       onChange={() => onChange(todo.id)}
                       checked={todo.completed}
                />
                <span className={classes.join(' ')}>{todo.title}</span>
            </label>
            <span className="close ml-3" onClick={() => removeTodo(todo.id)}><FontAwesomeIcon icon={faTimes}/></span>
        </div>
    );
}

export default TodoItem;