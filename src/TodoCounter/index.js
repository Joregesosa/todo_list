import React from "react";
import './TodoCounter.css'

function TodoCounter({ todosCompleted, totalTodos }) {
    // const { todosCompleted, totalTodos } = React.useContext(TodoContext);
    return (
        <h2 className="TodoCounter__title">Haz completado {todosCompleted} de {totalTodos} TODOs</h2>
    );
}

export { TodoCounter };