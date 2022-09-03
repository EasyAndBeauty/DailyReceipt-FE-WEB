import { ReceiptPaperTriangle, ReceiptPaperContents } from "components";
import * as S from "./ReceiptPaper.styles";
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
