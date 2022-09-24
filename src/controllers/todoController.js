import { AuthClient } from "./client";

export const useTodoClient = () => {
  const authClient = AuthClient();

  // Todo: 백엔드 갱신 후 API요청 URL 수정
  const getTodoList = async (date) => {
    return await authClient.get("/api/v1/todo", {
      params: { date },
    });
  };

  const postTodo = async (todo) => {
    return await authClient.post(`/api/v1/todo`, todo);
  };

  const updateTodo = async (todoId, todo) => {
    return await authClient.put(`/api/v1/todo/${todoId}`, todo);
  };

  const deleteTodo = async (todoId) => {
    return await authClient.delete(`/api/v1/todo/${todoId}`);
  };

  return { getTodoList, postTodo, updateTodo, deleteTodo };
};
