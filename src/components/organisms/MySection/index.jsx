import React, { useState, useEffect, useContext } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { ReceiptPaper } from "components";
import * as S from "./style";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

export const MySection = () => {
  const [allTodos, setAllTodos] = useState([
    {
      "2022-08-11": [
        {
          date: "2022-08-11",
          task: "영수증 작성",
          isDone: false,
          timer: 3,
          todoId: 1,
        },
        {
          date: "2022-08-11",
          task: "영수증 작성",
          isDone: false,
          timer: 3,
          todoId: 2,
        },
        {
          date: "2022-08-11",
          task: "영수증 작성",
          isDone: false,
          timer: 3,
          todoId: 3,
        },
      ],
    },
    {
      "2022-08-12": [
        {
          date: "2022-08-12",
          task: "영수증 작성",
          isDone: false,
          timer: 3,
          todoId: 4,
        },
        {
          date: "2022-08-12",
          task: "영수증 작성",
          isDone: false,
          timer: 3,
          todoId: 5,
        },
        {
          date: "2022-08-12",
          task: "영수증 작성",
          isDone: false,
          timer: 3,
          todoId: 6,
        },
      ],
    },
    {
      "2022-08-13": [
        {
          date: "2022-08-13",
          task: "영수증 작성",
          isDone: false,
          timer: 3,
          todoId: 7,
        },
      ],
    },
  ]);
  const navigate = useNavigate();

  const todos = allTodos.map((todos) => Object.values(todos));
  const realTodos = todos.flat();

  return (
    <Container>
      <ScrollMenu>
        {realTodos.map((todos) => {
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
