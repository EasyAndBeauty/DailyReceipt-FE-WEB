import { ReceiptTodo, ReceiptPaperInfo, ReceiptBarcode, ReceiptQuotes } from "components";
import * as S from "./ReceiptPaperContents.styles";

/**
 * ReceiptPaperContents
 *
 * 영수증의 내용이 들어가는 컴포넌트입니다
 *
 * @param {Array} todos todo 리스트
 * @param {string} quote 명언
 * @returns
 */
export function ReceiptPaperContents({ todos, quote }) {
  const line = "-----------------------------------";
  let timerTotal = 0;
  return (
    <S.Paper>
      <S.Title>RECEIPT</S.Title>
      <ReceiptPaperInfo />
      <div>{line}</div>
      <S.TodoContainer>
        {todos.map((todo) => {
          timerTotal += parseInt(todo.timer);
          return <ReceiptTodo key={todo.todoId}>{todo}</ReceiptTodo>;
        })}
      </S.TodoContainer>
      <div>{line}</div>
      <S.TotalContainer>
        <div>
          <span>ITEM COUNT :</span>
          <span>{todos.length}</span>
        </div>
        <div>
          <span>TOTAL :</span>
          <span>
            {Math.floor(timerTotal / 60)}:{(timerTotal % 60).toString().padStart(2, "0")}
          </span>
        </div>
      </S.TotalContainer>
      <div>{line}</div>
      <ReceiptQuotes quote={quote} />
      <div>{line}</div>
      <ReceiptBarcode />
      <div>{line}</div>
    </S.Paper>
  );
}
