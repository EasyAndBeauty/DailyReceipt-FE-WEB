import { useState } from "react";
import ReactLoading from "react-loading";
import useInterval from "hooks/useInterval";
import { INTERVAL_PER_SECOND } from "helper/constants";
import * as S from "./TimerImage.styles";

/**
 * TimerImage
 *
 * 포모도르가 작동하는 컴포넌트입니다
 * useInterval hook를 사용하여 시간을 카운트합니다
 *
 * @param {Boolean} isRunning 타이머가 실행중인지 여부
 * @param {Function} setIsRunning 타이머를 실행하거나 정지하는 함수
 * @param {Number} count 카운트 값
 * @param {Function} setCount 카운트 값을 변경하는 함수
 * @returns
 */
export function TimerImage({ isRunning, setIsRunning, count, setCount }) {
  const [delay] = useState(INTERVAL_PER_SECOND); // 여기에 몇 ms씩에 반복할지 작성하면 됩니다! => 나중에 상수로 만들면 좋을듯 합니다?

  useInterval(
    () => {
      setCount((prv) => prv - 1);
      if (count === 1) {
        // 최대 카운트가 0이면 다시 25분으로 초기화해줍니다.
        setIsRunning(false);
      }
    },
    isRunning ? delay : null,
  );

  return (
    <S.TimerContainer>
      <ReactLoading type="spinningBubbles" color="#aaaaaa" height={20} width={20} />
      <S.CountNumber>{count}</S.CountNumber>
    </S.TimerContainer>
  );
}
