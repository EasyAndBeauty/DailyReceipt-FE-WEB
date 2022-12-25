import { v4 as uuidv4 } from "uuid";
import { client } from "./client";
import { isLoggedIn } from "utils/auth";

export const getTodoList = async (date) => {
  console.log(isLoggedIn);
  const getMemberTodo = (date) => {
    return client.get("/api/v1/todo", {
      params: { targetDate: date },
    });
  };

  const getGuestTodo = (date) => {
    const data = window.localStorage.getItem(date);
    return data ? JSON.parse(data) : [];
  };

  // const test = isLoggedIn ? getMemberTodo(date) : getGuestTodo(date);
  return isLoggedIn ? getMemberTodo(date) : getGuestTodo(date);
};

export const postTodo = async (todo) => {
  const postMemberTodo = async (todo) => {
    try {
      const res = await client.post(`/api/v1/todo`, todo);

      if (res.status !== 201) {
        throw new Error(res.status);
      }
      return res;
    } catch (e) {
      console.log(e);
    }
  };

  const postGuestTodo = (todo) => {
    try {
      const data = JSON.parse(window.localStorage.getItem(todo.date));
      const newTodo = { ...todo, id: uuidv4() };
      const newArray = data ? [...data, newTodo] : [newTodo];
      window.localStorage.setItem(todo.date, JSON.stringify(newArray));
      return;
    } catch (e) {
      console.log(e);
    }
  };

  const test = isLoggedIn ? postMemberTodo(todo) : postGuestTodo(todo);
  return test;
};

export const putTodo = async (todo) => {
  const putMemberTodo = async (todo) => {
    try {
      const res = await client.put(`/api/v1/todo/${todo.todo_id}`, todo);

      if (res.status !== 201) {
        throw new Error(res.status);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const putGuestTodo = (todo) => {
    try {
      const data = JSON.parse(window.localStorage.getItem(todo.date));
      const newArray = [...data, todo];
      window.localStorage.setItem(todo.date, JSON.stringify(newArray));
    } catch (e) {
      console.log(e);
    }
  };

  isLoggedIn ? putMemberTodo(todo) : putGuestTodo(todo);
  return;
};

export const deleteTodo = async (todo) => {
  const deleteMemberTodo = async (todo) => {
    try {
      const res = await client.delete(`/api/v1/todo/${todo.todo_id}`);

      if (res.status !== 201) {
        throw new Error(res.status);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const deleteGuestTodo = (todo) => {
    try {
      const data = JSON.parse(window.localStorage.getItem(todo.date));
      const newTodos = data.filter((item) => item.todo_id !== todo.todo_id);
      window.localStorage.setItem(todo.date, JSON.stringify(newTodos));
    } catch (e) {
      console.log(e);
    }
  };

  isLoggedIn ? deleteMemberTodo(todo) : deleteGuestTodo(todo);
  return;
};
