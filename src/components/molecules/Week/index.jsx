import { DayOfWeek } from "components";
import * as S from "./style";

/**
 * Week component
 *
 * 상단 헤더에 사용되는 컴포넌트
 * 현재 더미데이터로 date 정보를 이용하고 있습니다
 *
 * @returns {JSX.Element} - 요일 컴포넌트들을 배치한 컴포넌트
 */
export function Week() {
  const week = [24, 25, 26, 27, 28, 29, 30];
  return (
    <S.Container>
      {week.map((date, index) => (
        <DayOfWeek key={index} dayOfweek={index} date={date} />
      ))}
    </S.Container>
  );
}
