import React from "react";
import './TodoCounter.css'

function TodoCounter({totalTodos, todosCompleted}){
    return (
        <h2 className="TodoCounter__title">Haz completado {todosCompleted} de {totalTodos} TODOs</h2>
    );
}

export {TodoCounter};