import React, {useState, useEffect} from "react";
import TodoList from "./todo-list/TodoList";
import Loader from "../main-layout/loader/Loader";

function TodoPage() {

    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8000/todos')
            .then(response => response.json())
            .then(todos => {
                setTodos(todos);
                setLoading(false);
            })
    }, [])

    function toggleTodo(id) {

        fetch(`http://localhost:8000/todos/${id}`)
            .then(response => response.json())
            .then(todo => {
                const requestOptions = {
                    method: 'PUT',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        title: todo.title,
                        completed: !todo.completed,
                        date: todo.date
                    })
                };

                fetch(`http://localhost:8000/todos/${todo.id}`, requestOptions)
                    .then(response => response.json())
                    .then(res => {
                        setTodos(todos.map(todo => {
                            if (todo.id === res.id) {
                                todo = res
                            }
                            return todo
                        }));
                    })
            })
    }

    function createTodo(title) {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: title,
                completed: false,
                date: new Date()
            })
        };

        fetch("http://localhost:8000/todos", requestOptions)
            .then(response => response.json())
            .then(todo => {
                setTodos(
                    todos.concat([todo])
                );
            })
    }

    function removeTodo(id) {

        const requestOptions = {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
        };

        fetch(`http://localhost:8000/todos/${id}`, requestOptions)
            .then(response => {
                setTodos(todos.filter(todo => todo.id !== id));
            })

    }

    return (
        <div className="container-fluid">
            <TodoList todos={todos} onToggle={toggleTodo} onRemove={removeTodo} onCreate={createTodo}
                      loading={loading}/>
            <div className="row flex justify-content-center">
                {loading && <Loader/>}
            </div>
        </div>
    );
}

export default TodoPage;