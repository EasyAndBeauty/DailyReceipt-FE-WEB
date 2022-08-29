import React, { useState, useEffect, useContext } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReceiptPaper } from "components";
import * as S from "./style";
import ReceiptDemeImage from "assets/images/receipt.png";
import { v4 as uuidv4 } from "uuid";

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

  const todos = allTodos.map((todos) => Object.values(todos));
  const realTodos = todos.flat();

  return (
    <Container>
      <ScrollMenu>
        {realTodos.map((todos) => {
          return <ReceiptPaper todos={todos} key={uuidv4()} />;
        })}
      </ScrollMenu>
    </Container>
  );
  //   return (
  //     <Temp>
  //       <ReceiptContainer>
  //         <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
  //           {Data.map(({ nickname, avatar, itemId }: Interface) => {
  //             return (
  //               <Block itemId={itemId} nickname={nickname} avatar={avatar} />
  //             );
  //           })}
  //         </ScrollMenu>
  //         {allTodos.map((todos, idx) => {
  //           return (
  //             <S.Box key={uuidv4()}>
  //               <ReceiptPaper todos={Object.values(todos)[0]} key={uuidv4()} />
  //             </S.Box>
  //           );
  //         })}
  //       </ReceiptContainer>
  //     </Temp>
  //   );
  // };

  // const ReceiptContainer = styled.div`
  //   max-width: 20rem;
  //   height: 70%;
  //   margin-top: 5%;
  //   display: flex;
  //   flext-flow: row wrap;
  //   flex-direction: row;
  //   align-items: center;
  //   justify-content: flex-start;
  //   overflow-x: scroll;
  //   box-sizing: border-box;
  // `;

  // const Temp = styled.div`
  //   width: 20rem;
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   justify-content: center;
  //   background-color: #f5f5f5;
  //   box-sizing: border-box;
  //   gap: 2.5rem;
  // `;
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
  }
`;
