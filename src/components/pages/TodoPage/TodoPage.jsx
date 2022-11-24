import { useState, Fragment, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  TodoHeader,
  Week,
  SquareBtn,
  TodoList,
  ReceiptPaperTriangle,
  PomodoroBottomSheet,
} from "components";
import useDataFetch from "hooks/useDataFetch";
import BaseContext from "store/baseContext";
import dayjs from "dayjs";
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
  const [allTodos, setAllTodos] = useState([]);
  const [todos, setTodos] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(null);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const { postDataLogic, putDataLogic, deleteDataLogic } = useDataFetch({
    todos,
    setTodos,
    setAllTodos,
    date: selectedDate,
  });

  const Triangle = new Array(9).fill(0).map((_, idx) => {
    return <ReceiptPaperTriangle key={idx} isPaper={false} />;
  });

  const BaseCtx = useContext(BaseContext);

  const navigate = useNavigate();

  const onSubmitTodoList = () => {
    if (!todos.length) {
      alert("항목을 작성해주세요");
    } else {
      const date = allTodos.map((todo) => todo.date);
      const receiptNumber = [...new Set(date)].reverse().findIndex((date) => {
        return dayjs(date).format("YYYY-MM-DD") === dayjs(selectedDate).format("YYYY-MM-DD");
      });
      navigate("/receipt", {
        state: { todos, date: selectedDate, receiptNumber: receiptNumber + 1 },
      });
    }
  };

  const onSelectDayOfWeek = (DateTime) => {
    setSelectedDate(DateTime);
    /**
     * 서버에 요청을 보내고, 응답을 받아서 처리한다.
     */
  };

  const selectedDayOfWeek = (Date) => {
    return Date.getDay();
  };

  const navigateUserPage = () => {
    navigate("/my", { state: { allTodos } });
  };

  const onOpenBottomSheet = (todo) => {
    setIsBottomSheetOpen(!isBottomSheetOpen);
    setSelectedTodo(todo);
  };

  useEffect(() => {
    BaseCtx.setIsBase(true);
  }, []);

  return (
    <Fragment>
      <S.Container>
        <TodoHeader
          selectedDate={selectedDate}
          onSelectDayOfWeek={onSelectDayOfWeek}
          navigateUserPage={navigateUserPage}
        />
        <Week
          selectedDate={selectedDate}
          selectedDayOfWeek={selectedDayOfWeek(selectedDate)}
          onSelectDayOfWeek={onSelectDayOfWeek}
        />
        <S.Content>
          <TodoList
            todos={todos}
            onInsert={postDataLogic}
            onRemove={deleteDataLogic}
            onEdit={putDataLogic}
            onOpenBottomSheet={onOpenBottomSheet}
          />
        </S.Content>
        <S.Bottom>
          <div>{Triangle}</div>
          <SquareBtn onClick={onSubmitTodoList} children={"Print the Receipt"} />
        </S.Bottom>
        <PomodoroBottomSheet
          isOpen={isBottomSheetOpen}
          todo={selectedTodo}
          onEdit={putDataLogic}
          onClick={() => setIsBottomSheetOpen(false)}
        />
      </S.Container>
    </Fragment>
  );
}
