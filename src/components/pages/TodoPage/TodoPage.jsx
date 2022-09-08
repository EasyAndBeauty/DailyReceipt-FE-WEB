import { useState, Fragment, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  TodoHeader,
  Week,
  SquareBtn,
  TodoList,
  ReceiptPaperTriangle,
} from "components";
import useDataFetch from "hooks/useDataFetch";
import BaseContext from "store/baseContext";
import * as S from "./TodoPage.styles";
/**
 * TodoPage component
 *
 * Todo Page의 layout을 담당하는 컴포넌트 + TodoPage의 비지니스 로직을 담당한다
 * 현재 더미데이터로 TodoList 정보를 이용하고 있습니다
 *
 * @returns  {JSX.Element} - TodoPage의 layout을 담당하는 컴포넌트
 */

export function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { postDataLogic, putDataLogic, deleteLocalData } = useDataFetch({
    todos,
    setTodos,
    date: selectedDate,
  });

  const Triangle = new Array(9).fill(0).map((_, idx) => {
    return <ReceiptPaperTriangle key={idx} />;
  });

  const BaseCtx = useContext(BaseContext);

  const navigate = useNavigate();

  const onSubmitTodoList = () => {
    if (!todos.length) {
      alert("항목을 작성해주세요");
    } else {
      navigate("/receipt", { state: { todos, date: selectedDate } });
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

  useEffect(() => {
    BaseCtx.setIsBase(true);
  }, []);

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
            onInsert={postDataLogic}
            onRemove={deleteLocalData}
            onEdit={putDataLogic}
          />
        </S.Content>

        <S.Bottom>
          <div>{Triangle}</div>
          <SquareBtn
            onClick={onSubmitTodoList}
            children={"Print the Receipt ->"}
          />
        </S.Bottom>
      </S.Container>
    </Fragment>
  );
}
