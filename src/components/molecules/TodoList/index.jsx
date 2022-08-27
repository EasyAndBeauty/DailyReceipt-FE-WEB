import React, { useState, useRef } from "react";
import ToDoInsert from "./ToDoInsert";
import TodoListBlock from "./TodoListBlock";
import TodoTemplate from "./TodoTemplate";

export const TodoList = () => {
  // MOCK DATA -> 통신 후 삭제 예정
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "test 중입니다.",
      date: 20220827,
      isDate: false,
      timer: 25,
    },
    {
      id: 2,
      task: "test 중입니다2",
      date: 20220827,
      isDate: true,
      timer: 25,
    },
    {
      id: 3,
      task: "투두리스트 만들기",
      date: 20220827,
      isDate: true,
      timer: 25,
    },
  ]);

  const nextId = useRef(4);
  const onInsert = (task) => {
    const todo = {
      id: nextId.current,
      task,
      isDate: false,
    };
    setTodos(todos.concat(todo));
    nextId.current++;
  };

  return (
    <TodoTemplate>
      <ToDoInsert onInsert={onInsert} />
      <TodoListBlock todos={todos} />
    </TodoTemplate>
  );
};
