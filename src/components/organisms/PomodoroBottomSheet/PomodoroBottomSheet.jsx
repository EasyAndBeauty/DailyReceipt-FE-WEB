import { useState, useEffect } from "react";
import { BottomSheetTemplate, TwotBtn } from "components";
import { POMODORO_TIME } from "helper/constants";
import useInterval from "hooks/useInterval";
import { TIME_HOUR } from "helper/constants";
import * as S from "./PomodoroBottomSheet.styles";

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
    <p>
      {min}:{sec}
    </p>
  );
}

function Descipt({ text }) {
  return <S.DesciptText>{text}</S.DesciptText>;
}

export function PomodoroBottomSheet({ isOpen, onClick, todo, onEdit, todos }) {
  const { task, timer, todoId } = todo || {};

  const [accTime, setAccTime] = useState(timer ?? 0);

  const [desiptText, setDesiptText] = useState(
    "play를 눌러 타이머를 시작하세요"
  );

  const [count, setCount] = useState(POMODORO_TIME);

  const [isRunning, setIsRunning] = useState(null); // timer 멈추기!

  const [btnText, setBtnText] = useState("play");
  const [activeBtn, setActiveBtn] = useState(2);
  const [delay] = useState(TIME_HOUR);

  const onClickPlayOrPause = (type) => {
    switch (type) {
      case "play":
        setIsRunning(true);
        setBtnText("pause");
        setDesiptText(
          `조금 더 집중한 이 시간이 ${"\n"} 더 빛나는 내일을 만들어 줄거예요`
        );
        if (count === 0) {
          setCount(POMODORO_TIME);
        }
        break;
      case "pause":
        setIsRunning(false);
        setBtnText("play");
        setDesiptText("play를 눌러 타이머를 재개하세요");
        break;
      default:
        break;
    }
  };

  useInterval(
    () => {
      setCount((prv) => prv - 1000);
      if (count === 1000) {
        onClickPlayOrPause("pause");
      }
    },
    isRunning ? delay : null
  );

  useEffect(() => {
    if (isRunning === false) {
      const remainTime = timer + POMODORO_TIME - count;

      onEdit(todoId, {
        ...todo,
        timer: remainTime,
      });
      setAccTime(remainTime);
    }

    if (isOpen === false) {
      setCount(POMODORO_TIME);
    }
  }, [isRunning, isOpen]);

  return (
    <BottomSheetTemplate isOpen={isOpen}>
      <S.Container isOpen={isOpen}>
        <S.TaskText>TODO : {task}</S.TaskText>
        {timer && (
          <S.AccumulateText>
            집중한시간 {getMin(accTime)}:{getSec(accTime)}
          </S.AccumulateText>
        )}
        <S.TimerText>
          <Time count={count} />
        </S.TimerText>
        <S.DesciptText>{desiptText}</S.DesciptText>
        <TwotBtn
          onClick1={() => {
            onClick();
            isRunning && onClickPlayOrPause("pause");
          }}
          onClick2={() => {
            onClickPlayOrPause(btnText);
          }}
          btnName1={"Stop"}
          btnName2={btnText}
          activeBtn={btnText === "play" ? 2 : 1}
        />
      </S.Container>
    </BottomSheetTemplate>
  );
}
