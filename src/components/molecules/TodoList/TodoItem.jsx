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
    if (isEditing === false) {
      onEdit(todo.id, { ...todo, task: taskValue });
    }
  };

  const onChangeTaskValue = (e) => {
    setTaskValue(e.target.value);
  };

  useEffect(() => {
    if (isRunning === false) {
      onEdit(todo.id, { ...todo, timer: todo.timer + POMODORO_TIME - count });
      setCount(POMODORO_TIME);
    }
  }, [isRunning]);
  return (
    <TodoItemBlock>
      <CheckCircle onClick={handleClickCheckCircleToggle} done={done} />
      <TodoItemText
        defaultValue={taskValue || ""}
        disabled={isEditing}
        onChange={onChangeTaskValue}
      />
      <ButtonContainer>
        <TimerButton onClick={handleClickToDoRemoveButton}>
          <FontAwesomeIcon icon={faClose} color={"#a65c5c"} />
        </TimerButton>
        <TimerButton onClick={handleClickToDoEditButton}>
          {isEditing && <FontAwesomeIcon icon={faPencil} color={"#aaaaaa"} />}
          {!isEditing && (
            <FontAwesomeIcon icon={faSquareCheck} color={"#aaaaaa"} />
          )}
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
          {!isRunning && <FontAwesomeIcon icon={faClock} color={"#aaaaaa"} />}
        </TimerButton>
      </ButtonContainer>
    </TodoItemBlock>
  );
};

export default TodoItem;

const TodoItemBlock = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;
  box-sizing: border-box;
`;

const CheckCircle = styled.div`
  width: 16px;
  height: 16px;
  border: 3px solid ${(props) => props.theme.gray};
  border-radius: 16px;
  cursor: pointer;
  background-color: ${(props) =>
    props.done ? props.theme.green : props.theme.bk};
  border-color: ${(props) => (props.done ? props.theme.gray : props.theme.wt)};
`;

const TodoItemText = styled.input`
  width: 60%;
  margin-left: 8px;
  font-size: 1rem;
  color: ${(props) => props.theme.gray};
  outline: none;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.wt};
  background-color: transparent;

  &:disabled {
    color: ${(props) => props.theme.wt};
    border: none;
    opacity: 1;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-left: 8px;
`;

const TimerButton = styled.div`
  width: 20px;
  height: 20px;
  margin-left: 8px;
  padding: 4px;
  line-height: 1rem;
  cursor: pointer;

  &:first-child {
    transform: scale(1.3) translateY(0.5px) translateX(1px);
  }
`;
