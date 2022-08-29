import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = ({ todos, onRemove, onEdit }) => {
  const [hasRunningTimer, setHasRuuningTimer] = useState("");

  const setRunningTimer = (key) => {
    setHasRuuningTimer(key);
    return;
  };

  const resetRunningTimer = () => {
    setHasRuuningTimer("");
    return;
  };

  console.log("todos", todos);

  return (
    <TodoListBlockStyle>
      {todos.map((todo) => (
        <TodoItem
          key={uuidv4()}
          id={todo.todoId}
          todo={todo}
          onRemove={onRemove}
          onEdit={onEdit}
          hasRunningTimer={hasRunningTimer}
          setRunningTimer={setRunningTimer}
          resetRunningTimer={resetRunningTimer}
        />
      ))}
    </TodoListBlockStyle>
  );
};

export default TodoListBlock;

const TodoListBlockStyle = styled.ul``;
