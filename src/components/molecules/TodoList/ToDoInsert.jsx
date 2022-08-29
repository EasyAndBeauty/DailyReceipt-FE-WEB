import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

const ToDoInsert = ({ onInsert }) => {
  const [todoInput, setTodoInput] = useState("");

  const handleChangeContentValue = (e) => {
    setTodoInput(e.target.value);
  };

  const onClickTodoItemCreateButton = (e) => {
    if (todoInput.trim() !== "") {
      e.preventDefault();
      const todoItem = { task: todoInput, timer: 1, isDone: false };
      onInsert(todoItem);
      setTodoInput("");
    }
  };

  return (
    <InsertForm>
      <Input
        autoFocus
        placeholder="Add a New Task"
        onChange={handleChangeContentValue}
        value={todoInput}
      />
      <InputButton onClick={onClickTodoItemCreateButton}>
        {" "}
        <FontAwesomeIcon icon={faCheck} color={"#81c944"} />
      </InputButton>
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
  padding: 8px;
  width: 100%;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, 0);
  color: ${(props) => props.theme.wt};
  border: none;
  border-bottom: 3px solid ${(props) => props.theme.wt};
  border-radius: 0;
  outline: none;

  &:focus {
    border-bottom-color: ${(props) => props.theme.green};
  }
`;

const InputButton = styled.div`
  transform: scale(1.5);
  padding: 12px;
`;
