import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { v4 as uuidv4 } from "uuid";
import { ReceiptPaper } from "components";
import * as S from "./MySection.styles";
import { useReceiptClient } from "controllers/receiptController";
import { useEffect } from "react";

/**
 * MySection
 *
 * My page의 중간 부분입니다.
 * 영수증을 작성할 수 있는 버튼과, 영수증을 보여주는 컴포넌트가 있습니다.
 *
 * */
export const MySection = () => {
  const {
    state: { allTodos },
  } = useLocation();

  const navigate = useNavigate();

  // const [totalTodos, setTotalTodos] = useState(() => {
  //   const result = [];
  //   const date = allTodos.map((todo) => todo.date);
  //   const uniqueDate = [...new Set(date)];
  //   uniqueDate.forEach((date) => {
  //     const sameDateTodos = allTodos.filter((todo) => todo.date === date);
  //     result.push(sameDateTodos);
  //   });
  //   return result;
  // });

  const {getPinnedReceipts} = useReceiptClient()
  const [totalTodos, setTotalTodos] = useState([])
  const setAllTodos = async (todos) => {
    const data = await getPinnedReceipts()
    setTotalTodos(data)
  }

  useEffect(() => {
    setAllTodos()
  },[])

  return (
    <S.Container>
      <S.ScrollMenu>
        {totalTodos.map((todoDate, idx) => {
          const { todos } = todoDate;
          return (
            <S.PaperContainer key={idx}>
              <S.CreatedDate>2022. 08. 20</S.CreatedDate>
              <ReceiptPaper
                onClick={() => {
                  navigate(`/receipt`, { state: { todos } });
                }}
                todos={Array.from(todos)}
                key={uuidv4()}
              />
            </S.PaperContainer>
          );
        })}
      </S.ScrollMenu>
    </S.Container>
  );
};
