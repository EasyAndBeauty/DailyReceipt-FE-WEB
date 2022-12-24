import * as S from "./Week.style";
import { findDayOfWeek } from "utils/findDayOfWeek";
import { useState } from "react";

const dayjs = require("dayjs");
const weekday = require("dayjs/plugin/weekday");
const isoWeek = require("dayjs/plugin/isoWeek");
const weekOfYear = require("dayjs/plugin/weekOfYear");

// day extend
dayjs.extend(weekday);
dayjs.extend(isoWeek);
dayjs.extend(weekOfYear);

/**
 * Week component
 *
 * 상단 헤더에 사용되는 컴포넌트
 * 선택한 날짜에 해당하는 일주일을 렌더링합니다.
 *
 * @param {Date} selectedDate - 선택된 날짜(Date 오브젝트) (일요일이 0,토요일이 6)
 * @param {Function} onSelectDayOfWeek - 선택된 날짜의 index정보를 받아와서 요일을 선택하는 함수
 *
 * @returns {JSX.Element} - 요일 컴포넌트들을 배치한 컴포넌트
 */

export function Week({ selectedDate, onSelectDayOfWeek }) {
  /**
   * 선택한 날짜의 일주일 정보를 획득 후, 컴포넌트에서 사용하기 편한 배열로 변환하여 반환합니다.
   *
   * @returns {Array} - 요일 컴포넌트들을 배치한 컴포넌트
   *
   * @type {number} index - 요일의 인덱스 (일요일이 0,토요일이 6)
   * @type {number} date - 날짜(ex.25, 26....)
   * @type {string} day - 요일(ex. SUN, MON...)
   * @type {Date} 해당 날의 원본 JS Date오브젝트 (ex. Mon Dec 19 2022 00:00:00 GMT+0900 (일본 표준시))
   *
   * */
  const week = new Array(7)
    .fill(0)
    .map((_, index) => {
      return dayjs(selectedDate).weekday(index);
    })
    .map((item) => {
      return {
        key: item.get("day"),
        date: item.get("date"),
        day: findDayOfWeek(item.get("day")),
        fullDate: item.toDate(),
      };
    });

  /**
   * 인덱스에서 오늘의 날짜를 구한 후, JS의 Date오브젝트를 Todo Page의 State에 저장합니다.
   *
   * @param {number} index  요일의 인덱스(일요일이 0,토요일이 6)
   */
  const handleOnClick = (index) => {
    onSelectDayOfWeek(week[index].fullDate);
  };

  return (
    <S.Container>
      {week.map((item) => {
        return (
          <S.DayContainer
            isActive={item.key === selectedDate.getDay()}
            onClick={() => handleOnClick(item.key)}
            key={item.key}
          >
            <S.DayText>{item.date}</S.DayText>
            <S.DayText>{item.day}</S.DayText>
          </S.DayContainer>
        );
      })}
    </S.Container>
  );
}
