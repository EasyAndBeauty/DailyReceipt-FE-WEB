import { useState, Fragment } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  TodoHeader,
  Week,
  SquareBtn,
  TodoList,
  ReceiptPaperTriangle,
} from "components";
import useDataFetch from "hooks/useDataFetch";
import * as S from "./style";
/**
 * TodoPage component
 *
 * Todo Page의 layout을 담당하는 컴포넌트 + TodoPage의 비지니스 로직을 담당한다
 * 현재 더미데이터로 TodoList 정보를 이용하고 있습니다
 *
 * @returns  {JSX.Element} - TodoPage의 layout을 담당하는 컴포넌트
 */
export function TodoPage() {
  // 예시입니다.
  const [todos, setTodos] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [modalOn, setModalOn] = useState(false);
  const { putLocalData, postLocalData, deleteLocalData } = useDataFetch({
    todos,
    setTodos,
    date: selectedDate,
  });

  const { state } = useLocation();
  console.log(state?.email);

  const navigate = useNavigate();

  const onSubmitTodoList = () => {
    if (!todos.length) {
      alert("항목을 작성해주세요");
    } else {
      navigate("/receipt", { state: { todos } });
    }
  };

  const onSelectDayOfWeek = (DateTime) => {
    setSelectedDate(DateTime);
    /**
     * 서버에 요청을 보내고, 응답을 받아서 처리한다.
     */
  };

  const selectedMonth = (Date) => {
    return Date.toLocaleDateString("en-US", {
      month: "long",
    });
  };
  const selectedDayOfWeek = (Date) => {
    return Date.getDay();
  };

  return (
    <Fragment>
      <S.Container>
        <TodoHeader month={selectedMonth(selectedDate)} />
        <Week
          selectedDayOfWeek={selectedDayOfWeek(selectedDate)}
          onSelectDayOfWeek={onSelectDayOfWeek}
        />
        <S.Content>
          <TodoList
            todos={todos}
            onInsert={postLocalData}
            onRemove={deleteLocalData}
            onEdit={putLocalData}
          />
        </S.Content>
      </S.Container>
      <S.Bottom>
        <div>
          <ReceiptPaperTriangle />
          <ReceiptPaperTriangle />
          <ReceiptPaperTriangle />
          <ReceiptPaperTriangle />
          <ReceiptPaperTriangle />
          <ReceiptPaperTriangle />
          <ReceiptPaperTriangle />
          <ReceiptPaperTriangle />
          <ReceiptPaperTriangle />
        </div>
        <SquareBtn onClick={onSubmitTodoList} children={"Print the Receipt"} />
      </S.Bottom>
    </Fragment>
  );
}
