import { useState, useEffect } from "react";
import { BottomSheetTemplate } from "components";
import { POMODORO_TIME } from "helper/constants";
import useInterval from "hooks/useInterval";
import { TIME_HOUR } from "helper/constants";
import { useRef } from "react";

/**
 * PomodoroBottomSheet
 *
 * 뽀모도로 아이콘을 누르면 올라와야함
 * 첫 시작 위치가 botoom -10% - height여야하고
 * 끝나는 위치가 bottom -10% + height여야함
 *
 * 내릴려 할때, 또는 stop을 눌렀을때 bottom sheet가 내려가야함
 *
 * 고민해 봐야하는것은, 1. bottom sheet를 내렸을때 => 타이머가 저장이 되어 있어야하고, 다시 눌렀을때 해당 타이머가 불러와져야함
 * 근데 현재 구조상, 타이머에 상태값이 있는게 아님, 직전값이 저장되어 있지 않아서, 찾아서 반환을 해야할것 같다.
 *
 *
 * @returns
 */

const getMin = (num) => {
  return String(Math.floor((num / (1000 * 60)) % 60)).padStart(2, "0");
};

const getSec = (num) => {
  return String(Math.floor((num / 1000) % 60)).padStart(2, "0");
};

function Time({ count }) {
  const [min, setMin] = useState(getMin(count));
  const [sec, setSec] = useState(getSec(count));

  useEffect(() => {
    setMin(getMin(count));
    setSec(getSec(count));
  }, [count]);

  return (
    <div>
      {min}:{sec}
    </div>
  );
}

export function PomodoroBottomSheet({ isOpen, onClick, todo, onEdit }) {
  const { task, timer } = todo || {};
  const [count, setCount] = useState(POMODORO_TIME);

  const [isRunning, setIsRunning] = useState(null); // timer 멈추기!

  const playOrPause = useRef(null);
  const [btnText, setBtnText] = useState("play");
  const [delay] = useState(TIME_HOUR);

  const onClickPlayOrPause = (type) => {
    switch (type) {
      case "play":
        setIsRunning(true);
        setBtnText("pause");
        break;
      case "pause":
        setIsRunning(false);
        setBtnText("play");
        break;
      default:
        break;
    }
  };

  useInterval(
    () => {
      setCount((prv) => prv - 1000);
      if (count === 0) {
        setIsRunning(false);
      }
    },
    isRunning ? delay : null
  );

  useEffect(() => {
    if (isRunning === false) {
      onEdit(todo.todoId, {
        ...todo,
        timer: todo.timer + POMODORO_TIME - count,
      });
    }

    if (isOpen === false) {
      setCount(POMODORO_TIME);
    }
  }, [isRunning, isOpen]);

  return (
    <BottomSheetTemplate isOpen={isOpen}>
      <div>TODO : {task}</div>
      {timer && <div>timer : {timer}</div>}
      <div>
        <Time count={count} />
      </div>
      <span>play를 눌러 타이머를 시작하세요</span>
      <div>-----------------------------------------------</div>
      <button onClick={onClick}>stop</button>
      <button
        onClick={() => {
          onClickPlayOrPause(playOrPause.current.textContent);
        }}
        ref={playOrPause}
      >
        {btnText}
      </button>
    </BottomSheetTemplate>
  );
}
