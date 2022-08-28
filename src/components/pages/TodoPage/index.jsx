import { useState, useRef, Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TodoHeader, Week, SquareBtn, TodoList } from "components";
import { getTodoList } from "controllers/todoController";

import * as S from "./style";
import useDataFetch from "hooks/useDataFetch";
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
  const [selectedDate, setSelectedDate] = useState({
    Date: new Date(),
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
    dayOfWeek: new Date().getDay(),
  });
  const [modalOn, setModalOn] = useState(false);
  const { todos, postUseData, postLocalData, deleteLocalData } = useDataFetch({
    Date: selectedDate.Date,
  });

  const navigate = useNavigate();

  const onSubmitTodoList = () => {
    console.log("투두리스트를 보내며, 페이지 라우트를 합니다.");
    navigate("/checkout", { state: { todos } });
  };

  const onSelectDayOfWeek = (dayOfWeek) => {
    setSelectedDate((pre) => ({
      ...pre,
      dayOfWeek,
    }));

    /**
     * 서버에 요청을 보내고, 응답을 받아서 처리한다.
     */
  };

  return (
    <Fragment>
      <S.Container>
        <TodoHeader />
        <Week
          selectedDayOfWeek={selectedDate.dayOfWeek}
          onSelectDayOfWeek={onSelectDayOfWeek}
        />
        <S.Content>
          <TodoList
            todos={todos}
            onInsert={postLocalData}
            onRemove={deleteLocalData}
          />
        </S.Content>
      </S.Container>
      <S.Bottom>
        <SquareBtn onClick={onSubmitTodoList} children={"Give me the check!"} />
      </S.Bottom>
    </Fragment>
  );
}
