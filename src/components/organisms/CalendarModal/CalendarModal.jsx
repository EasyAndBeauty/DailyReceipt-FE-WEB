import dayjs from "dayjs";
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
export function CalendarModal({ selectedDate, onSelectDayOfWeek, setCalendarOn }) {
  const initialDate = {
    year: Number(dayjs(selectedDate).format("YYYY")),
    month: Number(dayjs(selectedDate).format("MM")),
  };
  const [yearMonth, setYearMonth] = useState(initialDate);

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
        setCalendarOn={setCalendarOn}
        selectedDate={selectedDate}
      />
    </S.CalendarContainer>
  );
}
