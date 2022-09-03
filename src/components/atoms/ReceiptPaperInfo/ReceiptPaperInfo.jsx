import * as S from "./ReceiptPaperInfo.styles";

/**
 * ReceiptPaperInfo
 *
 * 영수증을 정보(날짜)를 보여주는 컴포넌트입니다
 *
 */

export function ReceiptPaperInfo() {
  const date = new Date();
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.getDate();
  const year = date.getFullYear();
  const timeArr = date.toLocaleString("ko-KR").split(" ").at(-1).split(":");
  const time = timeArr.map((el) => el.padStart(2, "0")).join(":");

  return (
    <S.Info>
      <div>
        {month} {day}, {year} {time}
      </div>
    </S.Info>
  );
}
