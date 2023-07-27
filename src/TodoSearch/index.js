import React from "react";
import './TodoSearch.css'
function TodoSearch({SearchValue, SetSearchValue}) {

    const onChangeTodoSearch = (event) => {
        SetSearchValue(event.target.value);
    }
    return (
        <input className="TodoSearch"
            placeholder="Buscar Tarea"
            value={SearchValue}
            onChange={onChangeTodoSearch} />

    )
}

export { TodoSearch };