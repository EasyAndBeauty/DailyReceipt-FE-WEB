import styled from "styled-components";
import {
  ReceiptTodo,
  ReceiptPaperInfo,
  ReceiptBarcode,
  ReceiptQuotes,
} from "components";

export function ReceiptPaperContents({ todos }) {
  const line = "-----------------------------------";
  let timerTotal = 0;
  return (
    <Paper>
      <Title>RECEIPT</Title>
      <ReceiptPaperInfo />
      <div>{line}</div>
      <TodoContainer>
        {todos.map((todo, index) => {
          timerTotal += todo.timer;
          return <ReceiptTodo key={todo.todoId + index}>{todo}</ReceiptTodo>;
        })}
      </TodoContainer>
      <div>{line}</div>
      <TotalContainer>
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
      </TotalContainer>
      <div>{line}</div>
      <ReceiptQuotes />
      <div>{line}</div>
      <ReceiptBarcode />
      <div>{line}</div>
    </Paper>
  );
}

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Paper = styled(Center)`
  width: 360px;
  box-sizing: border-box;
  padding: 20px;
  background-color: ${(props) => props.theme.wt};
  font-size: 16px;
  font-family: "Courier Prime", "Gothic A1", monospace, sans-serif; //한글 폰트 추가하기
  letter-spacing: -0.5px;
  line-height: 1.4;
  color: #2f2f2f;
`;

const Title = styled.h1`
  margin: 16px 0;
  font-size: 28px;
`;

const TodoContainer = styled(Center)`
  margin: 16px 0;
  width: 92%;
`;

const TotalContainer = styled.div`
  width: 92%;
  margin: 8px 0;

  > div {
    display: flex;
    justify-content: space-between;
  }
`;
