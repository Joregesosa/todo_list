import React from "react";
import {useLocalStorage} from './useLocalStorage';

function useTodo() {
    const [todoS, saveTodos] = useLocalStorage('TodoApp_V1', []);
    // estado del buscador
    const [searchValue, SetSearchValue] = React.useState('');

    // contar todoS
    const totalTodos = todoS.length;

    // contar todoS Completados
    const todosCompleted = todoS.filter(todo => !!todo.completed).length

    // completar todoS
    const completeTodo = (key) => {
        const todoIndex = todoS.findIndex(todo => todo.text === key);
        const newTodos = [...todoS];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);

    };
     // completar todoS
     const newTodo = (key) => {
        
        const newTodos = [...todoS];
        newTodos.push({
            completed: false,
            text: key
        })
        saveTodos(newTodos);

    };

    // Eliminar todoS
    const deleteTodo = (key) => {
        const newTodos = todoS.filter(todo => todo.text !== key);
        localStorage.setItem('TodoApp_V1', JSON.stringify(newTodos));
        saveTodos(newTodos);
    };

    // filtrar todoS
    let SearchedTodo = [];

    //open modal
    const [openModal, setOpenModal] = React.useState(false);

    if (!searchValue.length >= 1) {

        SearchedTodo = todoS;

    } else {

        SearchedTodo = todoS.filter(todo => {
            const todoText = todo.text.toLocaleLowerCase();
            const searchingText = searchValue.toLocaleLowerCase();
            return todoText.includes(searchingText);
        })

    }

    return {
        SearchedTodo,
        completeTodo,
        deleteTodo,
        newTodo,
        openModal,
        setOpenModal,
        searchValue,
        SetSearchValue,
        todosCompleted,
        totalTodos
    };
}

export { useTodo };