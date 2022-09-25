import { useState } from "react";
import { Calendar } from "components";
import { ReactComponent as SmallArrowIcon } from "assets/svg/arrow-s.svg";
import * as S from "./CalendarModal.styles";

/**
 * CalendarModal
 *
 * 달력 모달 컴포넌트,
 * 달력에 투두가 있는 날짜는 표시된다.
 *
 * @returns {JSX.Element} 달력 모달 컴포넌트
 */
export function CalendarModal({ selectedDate, onSelectDayOfWeek }) {
  const [yearMonth, setYearMonth] = useState({
    year: selectedDate.getFullYear(),
    month: selectedDate.getMonth() + 1,
  });

  const changeMonth = (next) => {
    if (next) {
      const nextMonth = yearMonth.month + 1;
      if (nextMonth > 12) {
        setYearMonth({
          year: yearMonth.year + 1,
          month: 1,
        });
        return;
      }
      setYearMonth({
        year: yearMonth.year,
        month: nextMonth,
      });
      return;
    }

    //prev
    const prevMonth = yearMonth.month - 1;
    if (prevMonth < 1) {
      setYearMonth({
        year: yearMonth.year - 1,
        month: 12,
      });
      return;
    }
    setYearMonth({
      year: yearMonth.year,
      month: prevMonth,
    });
  };

  return (
    <S.CalendarContainer>
      <S.CalendarHeader>
        <S.PrevBtn onClick={() => changeMonth(0)}>
          <SmallArrowIcon />
        </S.PrevBtn>
        <S.CalendarTitle>
          {yearMonth.year}. {yearMonth.month}.
        </S.CalendarTitle>
        <S.NextBtn onClick={() => changeMonth(1)}>
          <SmallArrowIcon />
        </S.NextBtn>
      </S.CalendarHeader>
      <Calendar
        onSelectDayOfWeek={onSelectDayOfWeek}
        year={yearMonth.year}
        month={yearMonth.month}
      />
      {/*투두 기록을 어디에서 가져오는지 확인하기(투두 있는 날 표시)*/}
      {/*날짜를 누르면 해당하는 날짜로 이동하기 => 일요일 기준으로 이동?*/}
    </S.CalendarContainer>
  );
}
