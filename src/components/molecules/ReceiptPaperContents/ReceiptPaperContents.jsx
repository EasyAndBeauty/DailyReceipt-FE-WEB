import {
  ReceiptTodo,
  ReceiptPaperInfo,
  ReceiptBarcode,
  ReceiptQuotes,
} from "components";
import * as S from "./ReceiptPaperContents.styles";

export function ReceiptPaperContents({ todos }) {
  const line = "-----------------------------------";
  let timerTotal = 0;
  return (
    <S.Paper>
      <S.Title>RECEIPT</S.Title>
      <ReceiptPaperInfo />
      <div>{line}</div>
      <S.TodoContainer>
        {todos.map((todo, index) => {
          timerTotal += todo.timer;
          return <ReceiptTodo key={todo.todoId + index}>{todo}</ReceiptTodo>;
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
            {Math.floor(timerTotal / 60)}:{timerTotal % 60}
          </span>
        </div>
      </S.TotalContainer>
      <div>{line}</div>
      <ReceiptQuotes />
      <div>{line}</div>
      <ReceiptBarcode />
      <div>{line}</div>
    </S.Paper>
  );
}
