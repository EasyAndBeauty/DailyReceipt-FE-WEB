import dayjs from "dayjs";
import { useEffect, useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import {
  TodoHeader,
  Week,
  SquareBtn,
  TodoList,
  ReceiptPaperTriangle,
  PomodoroBottomSheet,
} from "components";
import { useFetchTodos, useTodo } from "hooks/useTodos";
import { TODAY } from "helper/constants";
import * as S from "./TodoPage.styles";

/**
 * TodoPage component
 *
 * Todo Page의 layout을 담당하는 컴포넌트 + TodoPage의 비지니스 로직을 담당한다
 * 현재 더미데이터로 TodoList 정보를 이용하고 있습니다
 *@type {string} selectedDate - "YYYY-MM-DD" 형식의 날짜
 *@type {nubmer} index - 요일의 인덱스
 *
 * @returns  {JSX.Element} - TodoPage의 layout을 담당하는 컴포넌트
 */

export function TodoPage() {
  // const BaseCtx = useContext(BaseContext);
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(TODAY);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(null);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const { todos, fetchTodoList } = useFetchTodos();
  const { addTodo, updateTodo, removeTodo } = useTodo(fetchTodoList);

  /**
   * 페이지 초기화
   */
  useEffect(() => {
    (async () => {
      await fetchTodoList(selectedDate);
    })();
  }, [fetchTodoList, selectedDate]);

  const Triangle = new Array(9).fill(0).map((_, idx) => {
    return <ReceiptPaperTriangle key={idx} isPaper={false} />;
  });

  const onSubmitTodoList = () => {
    if (!todos.length) {
      alert("항목을 작성해주세요");
    } else {
      navigate("/receipt", {
        state: { todos, date: selectedDate },
      });
    }
  };

  const onSelectDayOfWeek = (date) => {
    setSelectedDate(date);
  };

  const selectedDayOfWeek = (index) => {
    return dayjs(index).format("d");
  };

  const onOpenBottomSheet = (todo) => {
    setIsBottomSheetOpen(!isBottomSheetOpen);
    setSelectedTodo(todo);
  };

  return (
    <Fragment>
      <S.Container>
        <TodoHeader
          selectedDate={selectedDate}
          onSelectDayOfWeek={onSelectDayOfWeek}
          navigateUserPage={() => navigate("/my")}
        />
        <Week
          selectedDate={selectedDate}
          selectedDayOfWeek={selectedDayOfWeek(selectedDate)}
          onSelectDayOfWeek={onSelectDayOfWeek}
        />
        <S.Content>
          <TodoList
            todos={todos}
            onInsert={addTodo}
            onRemove={removeTodo}
            onEdit={updateTodo}
            onOpenBottomSheet={onOpenBottomSheet}
            selectedDate={selectedDate}
          />
          <S.Bottom>
            <div>{Triangle}</div>
            <SquareBtn onClick={onSubmitTodoList} children={"Print the Receipt"} />
          </S.Bottom>
        </S.Content>
        <PomodoroBottomSheet
          isOpen={isBottomSheetOpen}
          todo={selectedTodo}
          onEdit={updateTodo}
          onClose={() => setIsBottomSheetOpen(false)}
        />
      </S.Container>
    </Fragment>
  );
}
