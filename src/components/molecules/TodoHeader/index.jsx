import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReceipt, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { HeaderText } from "components";
import * as S from "./style";

/**
 * TodoHeader component
 *
 * 상단 헤더의 layout을 담당하는 컴포넌트
 * month 값을 받아와 헤더를 담당한다
 *
 */

export function TodoHeader({ month }) {
  return (
    <S.Container>
      <S.Btn
        onClick={() => {
          console.log("MyReceipt으로 갑니다.");
        }}
      >
        <FontAwesomeIcon icon={faReceipt} size="2x"></FontAwesomeIcon>
      </S.Btn>
      <HeaderText>{month}</HeaderText>
      <S.Btn
        onClick={() => {
          console.log("MyReceipt으로 갑니다.");
        }}
      >
        <FontAwesomeIcon icon={faCalendarDays} size="2x"></FontAwesomeIcon>
      </S.Btn>
    </S.Container>
  );
}
