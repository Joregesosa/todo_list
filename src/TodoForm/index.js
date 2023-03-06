import React from "react";
import './TodoForm.css';
import { TodoContext } from "../TodoContext";

function TodoForm() {
    const { setOpenModal, newTodo } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodo] = React.useState('');
    const onCancel = () => {

        setOpenModal(false);
    }
    const onChange = (event) => {
        setNewTodo(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault();
        newTodo(newTodoValue);
        setOpenModal(false);
    }
    return (

        <form onSubmit={onSubmit}>
            <label>Nuevo ToDo</label>
            <textarea
                required
                placeholder="Ir al supermercado"
                onChange={onChange}>

            </textarea>
            <div>

                <button
                    type="button"
                    onClick={onCancel}>
                    Cancelar
                </button>

                <button
                    type="submit">
                    Agregar
                </button>

            </div>
        </form>

    );
}

export { TodoForm }