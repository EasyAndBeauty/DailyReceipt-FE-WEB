import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faClose, faPencil } from "@fortawesome/free-solid-svg-icons";
import styled, { css } from "styled-components";

const TodoItem = ({ todo, onRemove }) => {
  const { task, isDate } = todo;

  const [done, setDone] = useState(isDate);

  const handleClickCheckCircleToggle = () => setDone(!done);

  // TODO : 로직 구현 예정
  const handleClickTimerButton = () => console.log("Timer Start");
  const handleClickToDoRemoveButton = () => onRemove(todo.id);
  const handleClickToDoEditButton = () => console.log("PUT / TodoItem 수정!");

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={handleClickCheckCircleToggle}>
        {done && `✔️`}
      </CheckCircle>

      <TodoItemText done={done}>
        <TodoItemText>{task}</TodoItemText>
      </TodoItemText>
      <TimerButton onClick={handleClickToDoEditButton}>
        <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
      </TimerButton>
      <TimerButton onClick={handleClickTimerButton}>
        {/* 타이머 기능 추가되면 삭제 예정 */}
        <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
      </TimerButton>
      <TimerButton onClick={handleClickToDoRemoveButton}>
        <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
      </TimerButton>
    </TodoItemBlock>
  );
};

export default TodoItem;

const TodoItemBlock = styled.li`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
`;

const CheckCircle = styled.div`
  margin-right: 1rem;
  width: 1rem;
  height: 1rem;
  border: 1px solid #ced4da;
  border-radius: 1rem;
  font-size: 1rem;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #000000;
      color: #000000;
    `}
`;

const TodoItemText = styled.div`
  flex: 1;
  font-size: 1rem;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

const TimerButton = styled.div`
  padding: 0.25rem;
  line-height: 1rem;
  cursor: pointer;
`;
