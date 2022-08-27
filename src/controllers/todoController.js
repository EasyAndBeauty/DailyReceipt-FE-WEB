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
  // const response = client.post("/login");
  const randomInt = Math.floor(Math.random() * 100);
  return { id: randomInt };
};

export const updateTodo = async (id, req) => {
  // const response = client.put("/todo/${id}");
};
