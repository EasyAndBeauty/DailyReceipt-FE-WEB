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

export function TodoHeader({ selectedDate, onSelectDayOfWeek }) {
  const [calendarOn, setCalendarOn] = useState(false);
  let navigate = useNavigate();

  const goPage = (url) => {
    navigate(url);
  };

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
            <FontAwesomeIcon
              icon={faCalendarDays}
              size="2x"
              color="#aaaaaa"
            ></FontAwesomeIcon>
          </S.Btn>
          <S.Btn onClick={goPage.bind(this, "/my")}>
            <FontAwesomeIcon
              icon={faReceipt}
              size="2x"
              color="#aaaaaa"
            ></FontAwesomeIcon>
          </S.Btn>
        </div>
      </S.Container>
      {calendarOn && (
        <>
          <CalendarModal
            selectedDate={selectedDate}
            onSelectDayOfWeek={onSelectDayOfWeek}
          />
          <S.Dimmed onClick={() => setCalendarOn(false)} />
        </>
      )}
    </>
  );
}
