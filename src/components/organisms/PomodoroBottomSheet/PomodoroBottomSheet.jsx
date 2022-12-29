import { useState, useEffect } from "react";
import { BottomSheetTemplate, TwotBtnTemplate, TextBtn, TimerAlertModal } from "components";
import { getHour, getMin, getSec } from "helper/formatter";
import useInterval from "hooks/useInterval";
import { SECOND, POMODORO_TIME, INTERVAL_SECOND } from "helper/constants";
import * as S from "./PomodoroBottomSheet.styles";

/**
 * PomodoroBottomSheet
 *
 * 뽀모도로 아이콘을 누르면 올라오는 타이머
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

export function PomodoroBottomSheet({ isOpen, onClose, todo, onEdit }) {
  const { task, timer } = todo || {};
  const [alertVisible, setAlertVisible] = useState(false);
  const [accTime, setAccTime] = useState(timer);
  const [count, setCount] = useState(POMODORO_TIME);
  const [isRunning, setIsRunning] = useState(null);
  const [displayText, setDisplayText] = useState("play를 눌러 타이머를 시작하세요");
  const [btnText, setBtnText] = useState("play");

  // 초기화
  useEffect(() => {
    setAccTime(timer);
    if (!isOpen) {
      setCount(POMODORO_TIME);
    }
  }, [isOpen, timer]);

  const togglePlay = async (type) => {
    switch (type) {
      case "play":
        setIsRunning(true);
        setBtnText("pause");
        setDisplayText(`조금 더 집중한 이 시간이 ${"\n"} 더 빛나는 내일을 만들어 줄거예요`);
        if (count === 0) {
          setCount(POMODORO_TIME);
        }
        break;
      case "pause":
        setIsRunning(false);
        setBtnText("play");
        setDisplayText("play를 눌러 타이머를 재개하세요");
        const newAccTime = Number(timer) + POMODORO_TIME - count;
        await onEdit({ ...todo, timer: newAccTime });
        setAccTime(newAccTime);
        break;
      default:
        break;
    }
  };

  useInterval(
    () => {
      setCount((prv) => prv - SECOND);
      if (count <= 0) {
        togglePlay("pause");
      }
    },
    isRunning ? INTERVAL_SECOND : null,
  );

  const showTimerAlertModal = () => {
    document.body.style.overflow = "hidden";
    setAlertVisible(true);
  };

  const closeTimerAlertModal = () => {
    document.body.style.overflow = "unset";
    setAlertVisible(false);
  };

  return (
    <BottomSheetTemplate isOpen={isOpen}>
      <S.Container isOpen={isOpen}>
        <S.TaskText>TODO : {task}</S.TaskText>
        {!isRunning && (
          <S.AccumulateText>
            집중한 시간 {getHour(accTime) > 0 && getHour(accTime) + ":"}
            {getMin(accTime)}:{getSec(accTime)}
          </S.AccumulateText>
        )}
        <S.TimerText>
          <Time count={count} />
        </S.TimerText>
        <S.DesciptText>{displayText}</S.DesciptText>
        <TwotBtnTemplate lineColor="wt">
          <TextBtn
            onClick={() => {
              isRunning && togglePlay("pause");
              showTimerAlertModal();
            }}
            color="red"
          >
            Stop
          </TextBtn>
          <TextBtn
            onClick={() => {
              togglePlay(btnText);
            }}
            type={btnText === "play" ? "bold" : ""}
            color="wt"
          >
            {btnText}
          </TextBtn>
        </TwotBtnTemplate>
        {alertVisible && (
          <TimerAlertModal onStop={onClose} onClose={closeTimerAlertModal} task={task} />
        )}
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
