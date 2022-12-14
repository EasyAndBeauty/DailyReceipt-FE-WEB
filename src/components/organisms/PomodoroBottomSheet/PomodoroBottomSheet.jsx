import { useState, useEffect } from "react";
import { BottomSheetTemplate, TwotBtn } from "components";
import { POMODORO_TIME } from "helper/constants";
import { getHour, getMin, getSec } from "helper/getTime";
import useInterval from "hooks/useInterval";
import { TIME_HOUR } from "helper/constants";
import * as S from "./PomodoroBottomSheet.styles";

/**
 * PomodoroBottomSheet
 *
 * 뽀모도로 아이콘을 누르면 올라와야함
 * 첫 시작 위치가 botoom -10% - height
 * 끝나는 위치가 bottom -10% + height
 * stop을 눌렀을때 bottom sheet가 내려감
 *
 * 1. bottom sheet를 내렸을때 => 타이머가 저장이 되어 있어야하고, 다시 눌렀을때 해당 누적시간이 불러와짐
 * 2. play 중 pause를 눌렀을때 => 타이머가 저장이 되어 있어야하고, 다시 눌렀을때 다시 타이머가 진행
 *
 *
 * @param {Boolean} isOpen 뽀모도로 아이콘을 눌렀을때 bottom sheet가 올라오는지 여부
 * @param {Function} onClick 뽀모도로 아이콘을 눌렀을때 bottom sheet가 올라오는지 여부를 변경하는 함수
 * @param {Object} todo 누른 todo 객체
 * @param {Function} setTodo 누른 todo 객체를 변경해 반영하는 함수
 *
 * @returns {JSX.Element} PomodoroBottomSheet
 */

export function PomodoroBottomSheet({ isOpen, onClick, todo, onEdit }) {
  const { task, timer, todoId } = todo || {};

  const [accTime, setAccTime] = useState(timer);
  const [desiptText, setDesiptText] = useState(
    "play를 눌러 타이머를 시작하세요"
  );
  const [count, setCount] = useState(POMODORO_TIME);
  const [isRunning, setIsRunning] = useState(null);
  const [btnText, setBtnText] = useState("play");
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
            집중한시간 {getHour(accTime) > 0 && getHour(accTime) + ":"}
            {getMin(accTime)}:{getSec(accTime)}
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

/**
 * Time
 *
 * 25분 시간을 표시하는 컴포넌트입니다,
 *
 * @param {Number} count timer 시간값
 * @returns {String} 시간을 표시하는 문자열
 */
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
