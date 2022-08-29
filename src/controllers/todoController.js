import { client } from "./client";

// 오늘 날짜 설정
const today = new Date();
const FORMATTED_TODAY = today.toISOString().split("T")[0];

export const getTodoList = async (user_id, date = FORMATTED_TODAY, req) => {
  try {
    const response = await client.get(`/v2/todo/${user_id}`, {
      params: { date },
    });

    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const postTodo = async (user_id, todo, req) => {
  try {
    console.log(user_id, todo);
    const response = await client.post(`/v2/todo/${user_id}`, todo);

    return response.data;
  } catch (error) {
    console.log("Todo를 추가하지 못했습니다.");
    console.log(error);
  }
};

export const updateTodo = async (id, todo, req) => {
  try {
    console.log(id, todo);
    const response = await client.put(`/v1/todo/${id}`, todo);

    return response.data;
  } catch (error) {
    console.log("Todo를 수정하지 못했습니다.");
    console.log(error);
  }
};
