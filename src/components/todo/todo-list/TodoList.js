import React, {useState} from "react";
import "./TodoList.css"
import TodoItem from "./todo-item/TodoItem";
import AddTodo from "./add-todo/AddTodo";

function TodoList(props) {

    const [filter, setFilter] = useState('all');

    function getFilteredTodos() {
        switch (filter) {
            case 'completed':
                return props.todos.filter(todo => todo.completed)
            case 'new':
                return props.todos.filter(todo =>
                    Math.abs(new Date(todo.date).getHours() - new Date().getHours()) < 1
                )
            default:
                return props.todos
        }
    }

    return (
        <div>
            <AddTodo onCreate={props.onCreate}/>
            <div className="row">
                <div className="col-md-12">
                    <div className="main-todo-input-wrap">
                        <div className="main-todo-input fl-wrap todo-listing">
                            <div className="p-3 bg-white">
                                {
                                    getFilteredTodos().length ?
                                        getFilteredTodos().map(todo => {
                                            return <TodoItem key={todo.id} todo={todo} onChange={props.onToggle}
                                                             removeTodo={props.onRemove}/>
                                        }) :
                                        (props.loading ? null :
                                            <h1 className="text-center text-muted" style={{fontWeight: "normal"}}>Todos
                                                not
                                                found!</h1>)
                                }
                            </div>
                            {props.todos.length && !props.loading ? <div className="row justify-content-center">
                                <p className={filter === 'all' ? 'text active' : 'text'} onClick={() => setFilter('all')}>All</p>
                                <p className={filter === 'new' ? 'text active' : 'text'} onClick={() => setFilter('new')}>New</p>
                                <p className={filter === 'completed' ? 'text active' : 'text'} onClick={() => setFilter('completed')}>Completed</p>
                            </div> : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodoList;