import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faClose, faPencil, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as CheckIcon } from "assets/svg/todo_check_icon.svg";
import * as S from "./TodoListBlock.styles";

/**
 * Todo Item
 *
 * tood을 보여주는 컴포넌트 입니다
 * todo의 변경점을 useDataFetch hook으로 넘겨 반영합니다.
 *
 * @param {*} param0
 * @returns
 */
function TodoItem({ todo, onRemove, onEdit, onOpenBottomSheet }) {
  const [isEditing, setIsEditing] = useState(true); // 편집 여부
  const [taskValue, setTaskValue] = useState(todo.task); // 편집한 task값
  const { isDone } = todo;
  const [done, setDone] = useState(isDone);

  const handleClickCheckCircleToggle = () => {
    onEdit({ ...todo, isDone: !done });
    setDone(!done);
  };

  const handleClickTimerButton = () => {
    onOpenBottomSheet(todo);
  };

  const handleClickToDoEditButton = () => {
    setIsEditing(!isEditing);
    if (isEditing === false) {
      onEdit({ ...todo, task: taskValue });
    }
  };

  const handleClickToDoRemoveButton = () => {
    onRemove(todo);
  };

  const onChangeTaskValue = (e) => {
    setTaskValue(e.target.value);
  };

  return (
    <S.TodoItemBlock>
      <S.CheckCircle onClick={handleClickCheckCircleToggle} done={done}>
        {done && <CheckIcon />}
      </S.CheckCircle>
      <S.TodoItemText
        defaultValue={taskValue || ""}
        disabled={isEditing}
        onChange={onChangeTaskValue}
      />
      <S.ButtonContainer>
        <S.TimerButton onClick={handleClickToDoRemoveButton}>
          <FontAwesomeIcon icon={faClose} color={"#a65c5c"} />
        </S.TimerButton>
        <S.TimerButton onClick={handleClickToDoEditButton}>
          {isEditing && <FontAwesomeIcon icon={faPencil} color={"#aaaaaa"} />}
          {!isEditing && <FontAwesomeIcon icon={faSquareCheck} color={"#aaaaaa"} />}
        </S.TimerButton>
        <S.TimerButton onClick={handleClickTimerButton}>
          <FontAwesomeIcon icon={faClock} color={"#aaaaaa"} />
        </S.TimerButton>
      </S.ButtonContainer>
    </S.TodoItemBlock>
  );
}

/**
 * Todo List Block
 *
 * todoList를 보여주는 컴포넌트 입니다.
 * todoList의 변경점을 useDataFetch hook으로 넘겨 반영합니다.
 *
 * @param {Array} todos - todo list
 * @param {Function} onRemove - todo 삭제
 * @param {Function} onEdit - todo 수정
 * @param {Function} onOpenBottomSheet - 하단 포모도로 창 오픈
 * @returns
 */

export function TodoListBlock({ todos, onRemove, onEdit, onOpenBottomSheet }) {
  const [hasRunningTimer, setHasRuuningTimer] = useState("");

  const setRunningTimer = (key) => {
    setHasRuuningTimer(key);
  };

  const resetRunningTimer = () => {
    setHasRuuningTimer("");
  };

  useEffect(() => {
    setHasRuuningTimer("");
  }, [todos]);

  return (
    <S.TodoListBlockStyle>
      {todos?.length > 0 &&
        todos.map((todo) => (
          <TodoItem
            key={todo.todoId}
            id={todo.todoId}
            todo={todo}
            onRemove={onRemove}
            onEdit={onEdit}
            hasRunningTimer={hasRunningTimer}
            setRunningTimer={setRunningTimer}
            resetRunningTimer={resetRunningTimer}
            onOpenBottomSheet={onOpenBottomSheet}
          />
        ))}
    </S.TodoListBlockStyle>
  );
}
