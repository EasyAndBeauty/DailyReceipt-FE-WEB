import { ReceiptPaperTriangle, ReceiptPaperContents } from "components";
import * as S from "./ReceiptPaper.styles";

/**
 * ReceiptPaper
 *
 * 영수증의 내용이 들어가 종이 처럼 보이는 컴포넌트입니다
 *
 * @param {Array} todos todo 리스트
 * @param {Function} onInsert navigate 함수
 * @returns {JSX.Element} ReceiptPaperTriangle 영수증의 삼각형 모양 컴포넌트
 * @returns {JSX.Element} ReceiptPaperContents 영수증의 내용이 들어가는 컴포넌트
 */

export function ReceiptPaper({ todos, onClick = null }) {
  return (
    <S.Container id={"receipt"} onClick={onClick}>
      <div>
        <S.TrianglePosition y="6px">
          <ReceiptPaperTriangle />
        </S.TrianglePosition>
        <ReceiptPaperContents todos={todos} />
        <S.TrianglePosition y="-7px">
          <ReceiptPaperTriangle />
        </S.TrianglePosition>
      </div>
    </S.Container>
  );
}
