import * as S from "./CalendarDay.styles";
export function CalendarDay({ day, today, selected, changeDay }) {
  return (
    <S.Day
      className={`${today ? "today" : ""} ${selected ? "selected" : ""}`}
      onClick={() => changeDay(day)}
    >
      <span>{day}</span>
    </S.Day>
  );
}
