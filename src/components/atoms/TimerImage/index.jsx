import { useState, useEffect } from "react";
import useInterval from "hooks/useInterval";
import min25 from "assets/images/25min.png";
import min20 from "assets/images/20min.png";
import min15 from "assets/images/15min.png";
import min10 from "assets/images/10min.png";
import min5 from "assets/images/5min.png";
import congrat from "assets/images/congrat.png";

/**
 * 5/10/15/20/25분 단위로 줄어드는 시간에 맞춰 이미지 변화시키는 함수
 * transition을 이용해서 자연스럽게 이미지가 바뀌게끔 하고 싶은데 어떻게 해야될지 모르겠어요.ㅠ
 * 아직 라우팅에 서툴러서 이 내용을 브라우저단에서 확인하고 싶은데 어떻게 해야할지 잘 모르겠네여..미생을 구해쥬세여 선배님들 ㅎㅎ ㅠ
 */

export function TimerImage() {
  const timeStamp = [min5, min10, min15, min20, min25];
  const [timerImage, setTimerImage] = useState(timeStamp[0]);
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false); // timer 멈추기!
  const [delay, setDelay] = useState(500); // 여기에 몇 ms씩에 반복할지 작성하면 됩니다! => 나중에 상수로 만들면 좋을듯 합니다?

  const onTimerStart = () => {
    setIsRunning(true);
  };

  useInterval(
    () => {
      setCount(count + 1);
      setTimerImage(timeStamp[Math.floor(count / 5)]);
      if (count === 25) {
        // 최대 카운트가 25이면 다시 초기화해줍니다.
        setIsRunning(false);
        setCount(0);
        setTimerImage(congrat);
      }
    },
    isRunning ? delay : null
  );

  return (
    <div onClick={onTimerStart}>
      <img src={timerImage} alt={"temp"} />
    </div>
  );
}
