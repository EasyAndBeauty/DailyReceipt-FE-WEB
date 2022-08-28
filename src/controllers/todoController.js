import axios from "axios";
import { client } from "./client";
import { dummyTodosList } from "./dummy";

// TODO: 백엔드 연결
const TODAY = new Date();
export const getTodoList = (date = TODAY, req) => {
  try {
    // const response = await client.get("/todo", { params: { date } });

    const dummyTodosFromDate = dummyTodosList.filter((todo) => {
      const formatedDate = new Date(todo.date);
      return formatedDate.getDate() === date.getDate();
    });

    return dummyTodosFromDate;
  } catch (err) {
    console.log(err);
  }
};

export const postTodo = async (todo, req) => {
  const todoBody = { isDone: false, ...todo };
  try {
    const response = await client.post("/todo", todoBody);

    return response.data;
  } catch (error) {
    console.log("Todo를 추가하지 못했습니다.");
    console.log(error);
  }
};

export const updateTodo = async (id, todo, req) => {
  try {
    const response = await client.put(`/todo/${id}`, { ...todo });
    if (response.ok) {
      const { task, timer, done } = { ...response.data };
      // Spring과의 예약어 충돌로 인한 재포맷
      const formatTodo = { task, timer, isDone: done };

      return formatTodo;
    }
  } catch (error) {
    console.log("Todo를 수정하지 못했습니다.");
    console.log(error);
  }
};
