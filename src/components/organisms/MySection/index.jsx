import React, { useState, useEffect, useContext } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { ReceiptPaper } from "components";
import * as S from "./style";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import styled, { css } from "styled-components";

export const MySection = () => {
  const week = new Array(7).fill(0).map((_, index) => {
    const { $d } = dayjs().weekday(index);
    return (
      JSON.parse(localStorage.getItem(dayjs($d).format("YYYY-MM-DD"))) || []
    );
  });

  const [allTodos, setAllTodos] = useState(week);

  const navigate = useNavigate();

  return (
    <Container>
      <ScrollMenu>
        {allTodos.map((todos) => {
          return (
            <ReceiptPaper
              onClick={() => {
                console.log("영수증 작성");
                navigate(`/receipt`, { state: { todos } });
              }}
              todos={todos}
              key={uuidv4()}
            />
          );
        })}
      </ScrollMenu>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar {
    display: none;
  }
  .react-horizontal-scrolling-menu--scroll-container {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    dispaly: flex;
    flex-direction: row;
    gap: 5rem;
  }
`;
