import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css'

function TodoCounter() {
    const { todosCompleted, totalTodos } = React.useContext(TodoContext);
    return (
        <h2 className="TodoCounter__title">Haz completado {todosCompleted} de {totalTodos} TODOs</h2>
    );
}

export { TodoCounter };