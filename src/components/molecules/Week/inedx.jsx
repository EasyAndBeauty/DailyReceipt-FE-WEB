import { DayOfWeek } from "components";
import * as S from "./style";

/**
 * Week
 *
 * Week를 보여주는 컴포넌트 입니다.
 *
 */
export function Week() {
  const week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <S.Container>
      {week.map((day, index) => (
        <DayOfWeek key={index}>{day}</DayOfWeek>
      ))}
    </S.Container>
  );
}
