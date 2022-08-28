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

export const postTodo = (todo, req) => {
  const todoBody = { isDone: false, ...todo };
  const response = client.post("/todo", todoBody);
  return;
};

export const updateTodo = (id, todo, req) => {
  // const response = client.put("/todo/${id}");
  return { id, ...todo };
};
