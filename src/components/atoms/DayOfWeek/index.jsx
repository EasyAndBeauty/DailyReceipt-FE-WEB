import { findDayOfWeek } from "utils/findDayOfWeek";
import * as S from "./style";

/**
 * DayOfWeek component
 *
 * week component에서 사용되는 요일 컴포넌트
 * 고정위치 이기 때문에 자신이 받은 index를 이용해서 요일을 구한다 (findDayOfWeek)
 * 선택된 요일은 엑티브가 됨 (버튼으로 구현해도 상관 없을것 같습니다. 현재 API 요청에 따라 고민해봐야 할듯합니다)
 *
 *
 * @param {number} dayOfweek - 요일의 index
 * @param {number} date - 요일의 날짜
 * @param {boolean} isSelected - 선택된 요일인지 아닌지
 *
 */

export function DayOfWeek({ dayOfweek, date, isSelected = false }) {
  const onClick = () => {
    console.log(date, "를 서버로 보냅니다.");
  };

  return (
    <S.Container isSelected={isSelected} onClick={onClick}>
      <S.Text isSelected={isSelected}>{findDayOfWeek(dayOfweek)}</S.Text>
      <S.Text isSelected={isSelected}>{date}</S.Text>
    </S.Container>
  );
}
