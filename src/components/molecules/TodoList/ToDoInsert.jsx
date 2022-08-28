import React, { useState } from "react";
import styled from "styled-components";

const ToDoInsert = ({ onInsert }) => {
  const [todoInput, setTodoInput] = useState("");

  const handleChangeContentValue = (e) => {
    setTodoInput(e.target.value);
  };

  const onClickTodoItemCreateButton = (e) => {
    if (todoInput.trim() !== "") {
      e.preventDefault();
      onInsert(todoInput);
      setTodoInput("");
    }
  };

  return (
    <InsertForm>
      <Input
        autoFocus
        placeholder="add a new task"
        onChange={handleChangeContentValue}
        value={todoInput}
      />
      <InputButton onClick={onClickTodoItemCreateButton}>✔️</InputButton>
    </InsertForm>
  );
};

export default ToDoInsert;

const InsertForm = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  margin-right: 10px;
  padding: 12px;
  width: 100%;
  font-size: 16px;
  border: none;
  border-bottom: 2px solid #dee2e6;
  outline: none;
  &:focus {
    border-bottom: 2px solid #000000;
  }
`;

const InputButton = styled.button`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #dee2e6;

  &:hover {
    background-color: #a1a8b0;
  }
`;
