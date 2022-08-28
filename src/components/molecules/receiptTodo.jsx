import styled from "styled-components";

export function ReceiptTodo({ children: { task, timer } }) {
  return (
    <Container>
      <Info>
        <div></div>
      </Info>
      <Todo>
        <Task>{task}</Task>
        <Timer>
          {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, "0")}
        </Timer>
      </Todo>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const Info = styled.div``;
const Todo = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Task = styled.div``;

const Timer = styled.div``;
