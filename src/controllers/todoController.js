import { v4 as uuidv4 } from "uuid";
import { client } from "./client";

export const getMemberTodo = (date) => {
  return client.get("/api/v1/todo", {
    params: { targetDate: date },
  });
};

export const getGuestTodo = (date) => {
  const data = window.localStorage.getItem(date);
  return data ? { data: JSON.parse(data) } : [];
};

export const postMemberTodo = async (todo) => {
  try {
    const res = await client.post(`/api/v1/todo`, todo);

    if (res.status !== 201) {
      throw new Error(res.status);
    }
    return res;
  } catch (e) {
    console.error(e);
  }
};

export const postGuestTodo = (todo) => {
  try {
    const data = JSON.parse(window.localStorage.getItem(todo.date));
    const newTodo = { ...todo, todoId: uuidv4() };
    const newArray = data ? [...data, newTodo] : [newTodo];
    window.localStorage.setItem(todo.date, JSON.stringify(newArray));
    return;
  } catch (e) {
    console.error(e);
  }
};

export const putMemberTodo = async (todo) => {
  try {
    const res = await client.put(`/api/v1/todo/${todo.todoId}`, todo);

    if (res.status !== 200) {
      throw new Error(res.status);
    }
  } catch (e) {
    console.error(e);
  }
};

export const putGuestTodo = (todo) => {
  try {
    const data = JSON.parse(window.localStorage.getItem(todo.date));
    const newArray = data.map((item) => (item.todoId === todo.todoId ? todo : item));
    window.localStorage.setItem(todo.date, JSON.stringify(newArray));
  } catch (e) {
    console.error(e);
  }
};

export const deleteMemberTodo = async (todo) => {
  try {
    const res = await client.delete(`/api/v1/todo/${todo.todoId}`);

    if (res.status !== 200) {
      throw new Error(res.status);
    }
  } catch (e) {
    console.error(e);
  }
};

export const deleteGuestTodo = (todo) => {
  try {
    const data = JSON.parse(window.localStorage.getItem(todo.date));
    const newTodos = data.filter((item) => item.todoId !== todo.todoId);
    window.localStorage.setItem(todo.date, JSON.stringify(newTodos));
  } catch (e) {
    console.error(e);
  }
};
