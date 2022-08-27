import axios from "axios";
import { client } from "./client";
import { dummyTodosList } from "./dummy";

// TODO: 백엔드 연결
export const getTodoList = (date, req) => {
  try {
    // const response = await client.get("/todo", { params: { date } });

    const isTargetDate = (element) => {
      const formatedDate = new Date(element.date);
      return formatedDate.getDate() === date.getDate();
    };
    const dummyTodosFromDate = dummyTodosList.filter(isTargetDate);

    return dummyTodosFromDate;
  } catch (err) {
    console.log(err);
  }
};

export const postTodo = async (todo, req) => {
  // const response = client.post("/login");
};

export const updateTodo = async (id, req) => {
  // const response = client.put("/todo/${id}");
};
