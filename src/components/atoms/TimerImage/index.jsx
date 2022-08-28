import { useState, useEffect } from "react";
import useInterval from "hooks/useInterval";
import * as S from "./style";
import min25 from "assets/images/25min.png";
import min20 from "assets/images/20min.png";
import min15 from "assets/images/15min.png";
import min10 from "assets/images/10min.png";
import min5 from "assets/images/5min.png";

export function TimerImage() {
  const timeStamp = [min25, min20, min15, min10, min5];
  const [timerImage, setTimerImage] = useState(timeStamp[0]);
  const [count, setCount] = useState(25);
  const [isRunning, setIsRunning] = useState(false); // timer 멈추기!
  const [delay, setDelay] = useState(6000); // 여기에 몇 ms씩에 반복할지 작성하면 됩니다! => 나중에 상수로 만들면 좋을듯 합니다?

  const onTimerStart = () => {
    setIsRunning(!isRunning);
  };

  useInterval(
    () => {
      setCount(count - 1);

      // setTimerImage(timeStamp[Math.ceil(count / 5)]);
      // 아래로 카운트 되는걸 연산으로 어떻게 해야될지 모르겠어서 if문으로 했는데.. 더 좋은 방법이 있을까요?
      if (count === 25) {
        setTimerImage(timeStamp[0]);
      }
      // 20초에서 이미지가 바뀌었으면 좋겠는데 1초 뒤에 바뀌더라구요...왜일까요ㅠㅠ
      if (count === 21) {
        setTimerImage(timeStamp[1]);
      }
      if (count === 16) {
        setTimerImage(timeStamp[2]);
      }
      if (count === 11) {
        setTimerImage(timeStamp[3]);
      }
      if (count === 6) {
        setTimerImage(timeStamp[4]);
      }
      if (count === 0) {
        // 최대 카운트가 0이면 다시 25분으로 초기화해줍니다.
        setIsRunning(false);
        setCount(25);
        setTimerImage(timeStamp[0]);
      }
    },
    isRunning ? delay : null
  );

  return (
    <>
      <S.TimerContainer onClick={onTimerStart}>
        <S.TimerImage src={timerImage} alt={"temp"} />
        <S.CountNumber>{count}</S.CountNumber>
      </S.TimerContainer>
    </>
  );
}
