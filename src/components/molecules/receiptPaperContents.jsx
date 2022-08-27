import styled from "styled-components";
import { ReceiptTodo, ReceiptPaperInfo, ReceiptBarcode } from "components";

const testData = [
  {
    id: "jay@acount.com",
    task: "Sprint Homework",
    date: "20220826",
    isDone: true,
    timer: 180,
  },
  {
    id: "jay@acount.com",
    task: "Listening Music",
    date: "20220826",
    isDone: true,
    timer: 25,
  },
  {
    id: "jay@acount.com",
    task: "Work out",
    date: "20220826",
    isDone: true,
    timer: 80,
  },
  {
    id: "jay@acount.com",
    task: "Drawing",
    date: "20220826",
    isDone: true,
    timer: 70,
  },
  {
    id: "jay@acount.com",
    task: "Test Something",
    date: "20220826",
    isDone: true,
    timer: 60,
  },
];

export function ReceiptPaperContents() {
  const line = "-----------------------------------";
  let timerTotal = 0;

  return (
    <>
      <Paper>
        <Title>RECEIPT</Title>
        <ReceiptPaperInfo />
        <div>{line}</div>
        <TodoContainer>
          {testData.map((todo) => {
            timerTotal += todo.timer;
            return <ReceiptTodo>{todo}</ReceiptTodo>;
          })}
        </TodoContainer>
        <div>{line}</div>
        <TotalContainer>
          <div>
            <span>ITEM COUNT :</span>
            <span>{testData.length}</span>
          </div>
          <div>
            <span>TOTAL :</span>
            <span>
              {Math.floor(timerTotal / 60)}:{timerTotal % 60}
            </span>
          </div>
        </TotalContainer>
        <div>{line}</div>
        <Quotes>api넣기</Quotes>
        <div>{line}</div>
        <ReceiptBarcode />
        <div>{line}</div>
      </Paper>
    </>
  );
}

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Paper = styled(Center)`
  width: 360px;
  //height: 600px; //임시
  box-sizing: border-box;
  padding: 20px;
  background-color: white;
  font-size: 16px;
  font-family: "Courier Prime", monospace; //한글 폰트 추가하기
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
const Quotes = styled.div`
  margin: 16px 0;
`;
