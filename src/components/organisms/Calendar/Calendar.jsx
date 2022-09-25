import { useEffect, useState } from "react";
import * as S from "./Calendar.styles";

export function Calendar({ onSelectDayOfWeek, year, month }) {
  const now = new Date();
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
        // 1일 이전이나 말일 이후 빈칸
        if (day === 0) return <S.Day key={index} />;

        // 오늘 날짜
        if (
          now.getFullYear() === year &&
          now.getMonth() + 1 === month &&
          now.getDate() === day
        ) {
          return (
            <S.Day
              key={index}
              className="today"
              onClick={() => onSelectDayOfWeek(new Date(year, month - 1, day))}
            >
              <span>{day}</span>
            </S.Day>
          );
        }

        // 디폴트
        return (
          <S.Day
            key={index}
            onClick={() => onSelectDayOfWeek(new Date(year, month - 1, day))}
          >
            <span>{day}</span>
          </S.Day>
        );
      })}
    </S.DayContainer>
  );
}
