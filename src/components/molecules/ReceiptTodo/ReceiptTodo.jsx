import * as S from "./ReceiptTodo.styles";

export function ReceiptTodo({ children: { task, timer } }) {
  return (
    <S.Container>
      <S.Info />
      <S.Todo>
        <S.Task>{task}</S.Task>
        <S.Timer>
          {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, "0")}
        </S.Timer>
      </S.Todo>
    </S.Container>
  );
}
