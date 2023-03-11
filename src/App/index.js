import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { useTodo } from './useTodo';

function App() {
  const {SearchedTodo,
    completeTodo,
    deleteTodo,
    openModal,
    newTodo,
    setOpenModal,
    searchValue,
    SetSearchValue,
    todosCompleted,
    totalTodos} = useTodo();
  
    return (
    <React.Fragment>

      <TodoCounter
        todosCompleted={todosCompleted}
        totalTodos={totalTodos}
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

      {openModal && (
        <Modal>
          <TodoForm
            newTodo = {newTodo}
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

export default App;
