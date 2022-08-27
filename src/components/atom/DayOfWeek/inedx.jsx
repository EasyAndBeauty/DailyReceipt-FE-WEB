import * as S from "./style";

/**
 * DayOFWeek
 *
 * Week component에서 사용할 단일 컴포넌트 입니다.
 *
 * @param {string} dayOfWeek - 요일(ex. Mon, Tue)
 * @param {string} date - 날짜(ex. 01, 02, 03, ...)
 * @param {Boolean} isSelected - 선택되었는지 여부
 *
 */
export function DayOfWeek({ dayOfweek, date, isSelected }) {
  const onClick = () => {
    console.log(date, "를 서버로 보냅니다.");
  };

  <S.Container isSelected={isSelected} onClick={onClick}>
    <p>{dayOfweek}</p>
    <p>{date}</p>
  </S.Container>;
}
