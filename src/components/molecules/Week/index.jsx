import { DayOfWeek } from "components";
import * as S from "./style";

/**
 * Week component
 *
 * 상단 헤더에 사용되는 컴포넌트
 * 현재 더미데이터로 date 정보를 이용하고 있습니다
 *
 * @param {number} selectedDayOfWeek - 선택된 날짜의 index정보 (일요일이 0,토요일이 6)
 * @param {Function} onSelectDayOfWeek - 선택된 날짜의 index정보를 받아와서 요일을 선택하는 함수
 *
 * @returns {JSX.Element} - 요일 컴포넌트들을 배치한 컴포넌트
 */
export function Week({ selectedDayOfWeek, onSelectDayOfWeek }) {
  const week = [24, 25, 26, 27, 28, 29, 30];
  return (
    <S.Container>
      {week.map((date, index) => (
        <DayOfWeek
          key={index}
          dayOfweek={index}
          date={date}
          selectedDayOfWeek={selectedDayOfWeek}
          onSelectDayOfWeek={onSelectDayOfWeek}
        />
      ))}
    </S.Container>
  );
}
