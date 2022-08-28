import { useState } from "react";
import useInterval from "hooks/useInterval";
import * as S from "./style";
import ReactLoading from "react-loading";

export function TimerImage({ isRunning, setIsRunning, count, setCount }) {
  const [delay, setDelay] = useState(500); // 여기에 몇 ms씩에 반복할지 작성하면 됩니다! => 나중에 상수로 만들면 좋을듯 합니다?

  useInterval(
    () => {
      setCount((prv) => prv - 1);
      if (count === 0) {
        // 최대 카운트가 0이면 다시 25분으로 초기화해줍니다.
        setIsRunning(false);
        setCount(25);
      }
    },
    isRunning ? delay : null
  );

  return (
    <S.TimerContainer>
      <ReactLoading
        type="spinningBubbles"
        color="black"
        height={16}
        width={16}
      />
      <S.CountNumber>{count}</S.CountNumber>
    </S.TimerContainer>
  );
}
