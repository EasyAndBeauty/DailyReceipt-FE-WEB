import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TodoHeader, Week, SquareBtn } from "components"; // 절대 경로를 설정했기때문에 폴더 이름만 넣어줘도 된다 (현재 경로의 의미 : src 밑에 components에서 파일을 가져온다는 뜻)
import * as S from "./style";

export function TodoPage() {
  const [todoList, setTodoList] = useState([
    {
      id: 1, // 제곧내
      task: "오늘은 뭘 할라나", // 유저가 적은 투두리스트
      date: 20220826, // 입력날짜  year + month + day ex) 20220826
      isDone: false, // 상태 (완료, 미완료)
      timer: 25, // 뽀모도로 타이머(분 단위)
    },
  ]); // 초기값을 설정해줘야한다

  const [selectedDate, setSelectedDate] = useState(new Date().getDay()); // 선택된 날짜를 설정해줘야한다

  const navigate = useNavigate(); // 이동하는 함수를 설정해줘야한다

  const onSubmitTodoList = () => {
    console.log("투두리스트를 보내며, 페이지 라우트를 합니다.");
    navigate("/checkout", { state: { todoList } }); //
  };

  return (
    <S.Container>
      <TodoHeader />
      <Week />
      <SquareBtn onClick={onSubmitTodoList} children={"Give me the chekc!"} />
    </S.Container>
  );
}
