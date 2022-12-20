import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReceipt, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { CalendarModal, HeaderText } from "components";
import * as S from "./TodoHeader.styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

/**
 * TodoHeader component
 *
 * 상단 헤더의 layout을 담당하는 컴포넌트
 * month 값을 받아와 헤더를 담당한다
 *
 * @param {string} month - month
 *
 */

export function TodoHeader({ selectedDate, onSelectDayOfWeek, navigateUserPage }) {
  const [calendarOn, setCalendarOn] = useState(false);

  const selectedMonth = (Date) => {
    return Date.toLocaleDateString("en-US", {
      month: "long",
    });
  };

  return (
    <>
      <S.Container>
        <HeaderText>{selectedMonth(selectedDate)}</HeaderText>
        <div>
          <S.Btn onClick={() => setCalendarOn(true)}>
            <FontAwesomeIcon icon={faCalendarDays} size="2x" color="#aaaaaa" />
          </S.Btn>
          <S.Btn onClick={() => navigateUserPage()}>
            <FontAwesomeIcon icon={faReceipt} size="2x" color="#aaaaaa" />
          </S.Btn>
        </div>
      </S.Container>
      {calendarOn && (
        <>
          <CalendarModal
            selectedDate={selectedDate}
            onSelectDayOfWeek={onSelectDayOfWeek}
            setCalendarOn={setCalendarOn}
          />
          <S.Dimmed onClick={() => setCalendarOn(false)} />
        </>
      )}
    </>
  );
}
