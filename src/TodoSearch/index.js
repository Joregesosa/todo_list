import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css'
function TodoSearch() {
    const {SearchValue, SetSearchValue} = React.useContext(TodoContext);

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