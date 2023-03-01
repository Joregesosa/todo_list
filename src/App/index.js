
// import './App.css';
import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton'
import { UseLocalStorage } from '../TodoContext/useLocalStorage';
// custom hook


function App() {
  const [todoS, saveTodos] = UseLocalStorage('TodoApp_V1', []);
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

  // Eliminar todoS
  const deleteTodo = (key) => {
    const newTodos = todoS.filter(todo => todo.text != key);
    localStorage.setItem('TodoApp_V1', JSON.stringify(newTodos));
    saveTodos(newTodos);
  };

  // filtrar todoS
  let SearchedTodo = [];

  if (!searchValue.length >= 1) {

    SearchedTodo = todoS;

  } else {

    SearchedTodo = todoS.filter(todo => {
      const todoText = todo.text.toLocaleLowerCase();
      const searchingText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchingText);
    })

  }

  return (
    <React.Fragment>
      <TodoCounter
        totalTodos={totalTodos}
        todosCompleted={todosCompleted}
      />

      <TodoSearch
        SearchValue={searchValue}
        SetSearchValue={SetSearchValue}
      />


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

      <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;
