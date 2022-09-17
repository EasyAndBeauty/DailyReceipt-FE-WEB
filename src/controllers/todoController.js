import { AuthClient } from "./client";

const authClient = AuthClient();

// Todo: 백엔드 갱신 후 API요청 URL 수정
export const getTodoList = async (date) => {
  return await authClient.get("/v2/todo", {
    params: { date },
  });
};

export const postTodo = async (todo) => {
  return await authClient.post(`/v2/todo`, todo);
};

export const updateTodo = async (todoId, todo) => {
  return await authClient.put(`/v1/todo/${todoId}`, todo);
};

export const deleteTodo = async (todoId) => {
  return await authClient.delete(`/v1/todo/${todoId}`);
};
