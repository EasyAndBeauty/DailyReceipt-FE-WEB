import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TodoHeader, Week, SquareBtn } from "components"; // 절대 경로를 설정했기때문에 폴더 이름만 넣어줘도 된다 (현재 경로의 의미 : src 밑에 components에서 파일을 가져온다는 뜻)
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
  const [todoList, setTodoList] = useState([
    {
      id: 1, // 제곧내
      task: "오늘은 뭘 할라나", // 유저가 적은 투두리스트
      date: 20220826, // 입력날짜  year + month + day ex) 20220826
      isDone: false, // 상태 (완료, 미완료)
      timer: 25, // 뽀모도로 타이머(분 단위)
    },
  ]);

  const [selectedDate, setSelectedDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
    dayOfWeek: new Date().getDay(),
  });

  const navigate = useNavigate();

  const onSubmitTodoList = () => {
    console.log("투두리스트를 보내며, 페이지 라우트를 합니다.");
    navigate("/checkout", { state: { todoList } });
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
    <S.Container>
      <TodoHeader />
      <Week
        selectedDayOfWeek={selectedDate.dayOfWeek}
        onSelectDayOfWeek={onSelectDayOfWeek}
      />
      <SquareBtn onClick={onSubmitTodoList} children={"Give me the check!"} />
    </S.Container>
  );
}
