import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faClose,
  faPencil,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";
import { TimerImage } from "components";
import { POMODORO_TIME } from "constants";
import styled, { css } from "styled-components";

/**
 * Todo Item
 *
 * tood을 보여주는 컴포넌트 입니다
 * todo의 변경점을 useDataFetch hook으로 넘겨 반영합니다.
 *
 * @param {*} param0
 * @returns
 */
const TodoItem = ({
  todo,
  onRemove,
  onEdit,
  hasRunningTimer,
  setRunningTimer,
  resetRunningTimer,
}) => {
  const [isEditing, setIsEditing] = useState(true); // 편집 여부
  const [taskValue, setTaskValue] = useState(todo.task); // 편집한 task값
  const [isRunning, setIsRunning] = useState(null); // timer 멈추기!
  const [count, setCount] = useState(POMODORO_TIME);
  const { task, isDone } = todo;

  const [done, setDone] = useState(isDone);

  const handleClickCheckCircleToggle = () => {
    onEdit({ ...todo, isDone: !done }, todo.id);
    setDone(!done);
  };

  const handleClickTimerButton = () => {
    if (hasRunningTimer === todo.id) {
      setIsRunning(!isRunning);
      resetRunningTimer();

      return;
    }

    if (!hasRunningTimer) {
      setIsRunning(!isRunning);
      setRunningTimer(todo.id);

      return;
    }
  };
  const handleClickToDoRemoveButton = () => onRemove(todo.id);
  const handleClickToDoEditButton = () => {
    setIsEditing(!isEditing);
    onEdit({ ...todo, task: taskValue }, todo.id);
  };

  const onChangeTaskValue = (e) => {
    setTaskValue(e.target.value);
  };

  useEffect(() => {
    if (isRunning === false) {
      onEdit({ ...todo, timer: todo.timer + POMODORO_TIME - count }, todo.id);
      setCount(POMODORO_TIME);
    }
  }, [isRunning]);
  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={handleClickCheckCircleToggle}>
        {done && `✔️`}
      </CheckCircle>
      <TodoItemText
        defaultValue={taskValue || ""}
        disabled={isEditing}
        onChange={onChangeTaskValue}
      />
      <TimerButton onClick={handleClickToDoEditButton}>
        {isEditing && <FontAwesomeIcon icon={faPencil} />}
        {!isEditing && <FontAwesomeIcon icon={faSquareCheck} />}
      </TimerButton>
      <TimerButton onClick={handleClickTimerButton}>
        {isRunning && (
          <TimerImage
            isRunning={isRunning}
            setIsRunning={setIsRunning}
            count={count}
            setCount={setCount}
          />
        )}
        {!isRunning && <FontAwesomeIcon icon={faClock} />}
      </TimerButton>
      <TimerButton onClick={handleClickToDoRemoveButton}>
        <FontAwesomeIcon icon={faClose} />
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

const TodoItemText = styled.input`
  flex: 1;
  font-size: 1rem;
  color: #ced4da;
  outline: none;
  border: none;
  background-color: transparent;

  ${(props) =>
    props.done &&
    css`
      color: black;
    `}

  &:disabled {
    color: #000000;
    opacity: 1;
  }
`;

const TimerButton = styled.div`
  padding: 0.25rem;
  line-height: 1rem;
  cursor: pointer;
`;
