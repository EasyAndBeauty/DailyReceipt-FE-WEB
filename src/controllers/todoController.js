import axios from "axios";
import { client } from "./client";
import { dummyTodosList } from "./dummy";

// 오늘 날짜 설정
const today = new Date();
const FORMATTED_TODAY = today.toISOString().split("T")[0];

export const getTodoList = async (date = FORMATTED_TODAY) => {
  try {
    // const response = await client.get('/v2/todo', {
    //   params: { date },
    // });

    // return response.data;

    const dummyTodosFromDate = dummyTodosList.filter((todo) => {
      const formatedDate = new Date(todo.date);
      return formatedDate.getDate() === date.getDate();
    });

    return dummyTodosFromDate;
  } catch (err) {
    console.log(err);
  }
};

export const postTodo = async (user_id, todo) => {
  try {
    const response = await client.post(`/v2/todo/${user_id}`, todo);

    return response.data;
  } catch (error) {
    console.log("Todo를 추가하지 못했습니다.");
    console.log(error);
  }
};

export const updateTodo = async (id, todo) => {
  try {
    const response = await client.put(`/v1/todo/${id}`, todo);

    return response.data;
  } catch (error) {
    console.log("Todo를 수정하지 못했습니다.");
    console.log(error);
  }
};

export const deleteTodo = async (todoId) => {
  try {
    const response = await axios.get("https://httpstat.us/200");
    console.log("다음의 Todo 항목을 삭제합니다.");
    console.log(todoId);

    if (response.ok) return;
  } catch (error) {
    console.log(error);
  }
};
