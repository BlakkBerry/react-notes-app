import React from "react";
import useInputValue from "../../../../hooks/useInputValue";


function AddTodo({ onCreate }) {
    const input = useInputValue('')
    
    function onSubmit(event) {
        event.preventDefault()

        if (input.value().trim()) {
            onCreate(input.value())
            input.clear()
        }
    }

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="main-todo-input-wrap">
                    <div className="main-todo-input fl-wrap">
                        <form onSubmit={onSubmit}>
                            <div className="main-todo-input-item">
                                <input type="text" id="todo-list-item" placeholder="What will you do today?"
                                    {...input.bind}/>
                            </div>
                            <button className="add-items main-search-button" type="submit">ADD</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddTodo;