import React from 'react';

const Todos = ({todos, deleteTodo}) => {
    let todoList = todos.length ? todos.map(todo => {
        return(
            <div onClick={() => deleteTodo(todo.id)} key= { todo.id }>
                {todo.content}
            </div>
        )
    }) : <div>
        You have no todos left!
    </div>;
    return(
        <div>
            {todoList}
        </div>
    )
}

export default Todos;