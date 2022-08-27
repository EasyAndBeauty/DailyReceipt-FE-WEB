import { useState } from "react";
let present = 25;
let [timerUrl, changeTimerUrl] = useState(["./25min.png"]);

<img src={timerUrl} />;
/**
 * 5/10/15/20/25분 단위로 줄어드는 시간에 맞춰 이미지 변화시키는 함수
 * transition을 이용해서 자연스럽게 이미지가 바뀌게끔 하고 싶은데 어떻게 해야될지 모르겠어요.ㅠ
 * 아직 라우팅에 서툴러서 이 내용을 브라우저단에서 확인하고 싶은데 어떻게 해야할지 잘 모르겠네여..미생을 구해쥬세여 선배님들 ㅎㅎ ㅠ
 */
function 타이머시간바꾸기() {
    present -= 1;
    if (present % 5 == 0 && preent != 0) {
        changeTimerUrl(`./${present}min.png`);
    } else if (present == 0) {
        changeTimerUrl("./congrat.png");
    }
}
let timer = setInterval(function () {
    if (present <= 0) {
        clearInterval(timer);
    } else {
        타이머시간바꾸기();
    }
}, 1000);
