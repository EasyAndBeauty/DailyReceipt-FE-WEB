import { findDayOfWeek } from "utils/findDayOfWeek";
import * as S from "./DayOfWeek.styles";

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
 * @param {seletedDayOfWeek} selectedDayOfWeek - 선택된 요일의 index
 * @param {Function} onSelectDayOfWeek - 선택된 요일의 index를 받아와서 요일을 선택하는 함수
 *
 */
const checkIsActive = (dayOfweek, selectedDayOfWeek) => {
  return dayOfweek === selectedDayOfWeek;
};

export function DayOfWeek({
  dayOfweek,
  date,
  dateInfo,
  selectedDayOfWeek,
  onSelectDayOfWeek,
}) {
  const onClick = (dateInfo) => {
    onSelectDayOfWeek(new Date(dateInfo));
  };

  return (
    <S.Container
      isActive={checkIsActive(dayOfweek, selectedDayOfWeek)}
      onClick={() => onClick(dateInfo)}
    >
      <S.Text>{date}</S.Text>
      <S.Text>{findDayOfWeek(dayOfweek)}</S.Text>
    </S.Container>
  );
}
