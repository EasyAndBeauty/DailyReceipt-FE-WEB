import { useEffect, useState } from "react";
import * as S from "./Calendar.styles";

export function Calendar({ onSelectDayOfWeek, year, month }) {
  const startDay = new Date(year, month - 1, 1).getDay();
  const lastDay = new Date(year, month, 0).getDate();
  const [days, setDays] = useState([]);

  useEffect(() => {
    const dayArr = [];
    const needDays = startDay + lastDay;
    const n =
      needDays % 7 ? needDays + (7 - ((startDay + lastDay) % 7)) : needDays;

    for (let i = 0; i < n; i++) {
      if (i < startDay) {
        dayArr.push(0);
        continue;
      }

      if (i >= startDay && i < startDay + lastDay) {
        dayArr.push(i - startDay + 1);
        continue;
      }

      // 마지막 날짜 이후 dayArr.length가 7배수가 되도록 빈칸으로 채우기
      dayArr.push(0);
    }

    setDays(dayArr);
  }, [year, month]);

  return (
    <S.DayContainer>
      {days.map((day, index) => {
        if (day === 0) return <S.Day key={index} />;
        return (
          <S.Day key={index}>
            <span>{day}</span>
          </S.Day>
        );
      })}
    </S.DayContainer>
  );
}
