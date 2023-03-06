import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUI() {
    const { SearchedTodo, completeTodo, deleteTodo, openModal, setOpenModal } = React.useContext(TodoContext);
    return (
        <React.Fragment>

            <TodoCounter />

            <TodoSearch />

            <TodoList>
                {SearchedTodo.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>



            {openModal && (
                <Modal>
                    <TodoForm
                        setOpenModal={setOpenModal}
                    />
                </Modal>
            )}



            <CreateTodoButton
                setOpenModal={setOpenModal}
            />

        </React.Fragment>
    );
}
export { AppUI }