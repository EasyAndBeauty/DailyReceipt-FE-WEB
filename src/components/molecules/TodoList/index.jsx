import React, { useState, useRef } from "react";
import ToDoInsert from "./ToDoInsert";
import TodoListBlock from "./TodoListBlock";
import TodoTemplate from "./TodoTemplate";

export const TodoList = ({ todos, onInsert, onRemove, onEdit }) => {
  return (
    <TodoTemplate>
      <ToDoInsert onInsert={onInsert} />
      <TodoListBlock todos={todos} onRemove={onRemove} onEdit={onEdit} />
    </TodoTemplate>
  );
};
