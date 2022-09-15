import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";
import { ReceiptPaper } from "components";
import * as S from "./MySection.styles";

/**
 * MySection
 *
 * My page의 중간 부분입니다.
 * 영수증을 작성할 수 있는 버튼과, 영수증을 보여주는 컴포넌트가 있습니다.
 *
 * */
export const MySection = () => {
  const week = new Array(7).fill(0).map((_, index) => {
    const { $d } = dayjs().weekday(index);
    return JSON.parse(localStorage.getItem(dayjs($d).format("YYYY-MM-DD")));
  });

  const [allTodos] = useState(week.filter((todo) => todo !== null));
  const navigate = useNavigate();

  return (
    <S.Container>
      <ScrollMenu>
        {allTodos.map((todos, idx) => {
          return (
            <S.PaperContainer key={idx}>
              <ReceiptPaper
                onClick={() => {
                  console.log("영수증 작성");
                  navigate(`/receipt`, { state: { todos } });
                }}
                todos={todos}
                key={uuidv4()}
              />
            </S.PaperContainer>
          );
        })}
      </ScrollMenu>
    </S.Container>
  );
};
