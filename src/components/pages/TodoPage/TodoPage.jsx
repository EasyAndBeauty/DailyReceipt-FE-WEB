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
import { useFetchTodos, usePostTodos, useDeleteTodos, useUpdateTodos } from "hooks/useTodos";
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
  const BaseCtx = useContext(BaseContext);
  const navigate = useNavigate();
  const { todos, fetchTodos } = useFetchTodos();
  const { postTodos } = usePostTodos();
  const { updateTodos } = useUpdateTodos();
  const { deleteTodos } = useDeleteTodos();
  const [selectedDate, setSelectedDate] = useState();
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(null);
  const [selectedTodo, setSelectedTodo] = useState(null);

  // const { postDataLogic, putDataLogic, deleteDataLogic } = useDataFetch({
  //   todos,
  //   fetchTodos,
  //   date: selectedDate,
  // });

  /**
   * 페이지 초기화
   */

  const Triangle = new Array(9).fill(0).map((_, idx) => {
    return <ReceiptPaperTriangle key={idx} isPaper={false} />;
  });

  const onSubmitTodoList = () => {
    if (!todos.length) {
      alert("항목을 작성해주세요");
    } else {
      const date = todos.map((todo) => todo.date);
      const receiptNumber = [...new Set(date)].reverse().findIndex((date) => {
        return dayjs(date).format("YYYY-MM-DD") === dayjs(selectedDate).format("YYYY-MM-DD");
      });
      navigate("/receipt", {
        state: { todos, date: selectedDate, receiptNumber: receiptNumber + 1 },
      });
    }
  };

  const onSelectDayOfWeek = (index) => {
    setSelectedDate(index);
    /**
     * 서버에 요청을 보내고, 응답을 받아서 처리한다.
     */
  };

  const selectedDayOfWeek = (Date) => {
    return Date.getDay();
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
          navigateUserPage={navigate("/my")}
        />
        <Week
          selectedDate={selectedDate}
          selectedDayOfWeek={selectedDayOfWeek(selectedDate)}
          onSelectDayOfWeek={onSelectDayOfWeek}
        />
        <S.Content>
          <TodoList
            todos={todos}
            onInsert={postTodos}
            onRemove={deleteTodos}
            onEdit={updateTodos}
            onOpenBottomSheet={onOpenBottomSheet}
          />
          <S.Bottom>
            <div>{Triangle}</div>
            <SquareBtn onClick={onSubmitTodoList} children={"Print the Receipt"} />
          </S.Bottom>
        </S.Content>
        <PomodoroBottomSheet
          isOpen={isBottomSheetOpen}
          todo={selectedTodo}
          onEdit={updateTodos}
          onClose={() => setIsBottomSheetOpen(false)}
        />
      </S.Container>
    </Fragment>
  );
}
